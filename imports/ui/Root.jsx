import React, { Component } from 'react';
import {browserHistory } from 'react-router';
import '../../client/main.css';
import { Ratings } from '../api/ratings.js';
import Divider from 'material-ui/Divider';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import '../../styles/paper.css';
import '../../styles/face.css';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state={
      average: 0,
    };
  }

  handleClick(service, rating) {
    Meteor.call('ratings.insert', service, rating, (err, average) => {
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
      console.log(this.state.average, i);
      if (i===Math.floor(this.state.average+1)) {
        const percentage = Math.floor((this.state.average-i)*100);
        console.log(percentage);
        style.background=`linear-gradient(to right, yellow ${percentage}%, white 0)`;
      } else {
      this.state.average>i ? style.backgroundColor='yellow':style.backgroundColor='white';
      }
      return (
        <div
          key = {face}
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
                <h1>How did we do? Please rate your experience</h1>
                <h2> We're always looking for ways to improve our customer experience</h2>
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
