import React, { Component } from 'react';
import {browserHistory } from 'react-router';
import '../../client/main.css';
import { Ratings } from '../api/ratings.js';
import Divider from 'material-ui/Divider';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import '../../styles/paper.css';
import '../../styles/face.css';


const borderColor={};
class Root extends Component {

  constructor(props) {
    super(props);
    this.state={
      average: 0,
    };
  }

  handleClick(service, rating) {
    borderColor.borderColor="#FFCA3A";
    Meteor.call('ratings.insert', service, rating+1, (err, average) => {
      console.log(average);
      if (!err) {
        this.setState({
          average
        });
      } else {
        alert('Something bad happened.');
      }
    });
  }

  render() {
    const faces=['worst', 'bad', 'regular', 'good', 'best'].map((face, i)=>{
      const className=`circle ${face}`;
      const style={};
      if (this.state.average>0) {
        style.borderColor="#FFCA3A";
      }

      if (i===Math.floor(this.state.average)) {
        const percentage = Math.floor((this.state.average-i)*100);
        console.log(percentage);
        style.background=`linear-gradient(to right, #FFCA3A ${percentage}%, white 0)`;
      } else {
        this.state.average>i ? style.backgroundColor='#FFCA3A':style.backgroundColor='white';
      }
      return (
        <div
          key = {face}
          style={borderColor}
          onClick={()=>{
            this.handleClick('daily', i);
          }}
          className={className} >
          <div
            style={style}
            className="fill"/>
          </div>);
        });
        return (
          <div>
            <div className="paper rear"/>
            <div className="paper ">
              <div className="content" >
                <div className="text">
                  <h1>How did we do? Please rate your experience</h1>
                  <h3> We're always looking for ways to improve our customer experience</h3>
                </div>
              </div>

              <div className="ratings">
                { faces }
              </div>
            </div>
          </div>
        );
      }
    }

    export default createContainer(() => {
      Meteor.subscribe('ratings');

      return {
        ratings: Ratings.find({}).fetch(),

      };
    }, Root);
