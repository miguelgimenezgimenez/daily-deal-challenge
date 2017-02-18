import React, { PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Ratings } from '../api/ratings.js';
import '../../styles/dashboard.css';
import '../../styles/FacesBig.css';


let colors= ['red', 'yellow', 'orange','green'];
let style;
class Dashboard extends React.Component {

  constructor(){
    super();
    this.state={
      className:''
    }
  }
  componentDidMount() {
    const classNames=['sad-big worst-big', 'sad-big', 'regular-big', 'smile-big', 'smile best-big'];
    const rating = Math.floor(this.props.ratings[0].average);
    style = {background:colors[rating], color:colors[rating]};
    this.setState({
      className:`circle-big ${classNames[rating]} `
    });
  }


  render () {
    return (
      <div>
        <div className="header"
          style={style}
          >
          </div>

          <div className="container">
            <div className={this.state.className}
              style={style}
              >

            </div>

          </div>
          <div
            className= "footer"
            style={style}
            ></div>
          </div>
        )
      }
    }


    export default createContainer(() => {
      Meteor.subscribe('ratings');

      return {
        ratings: Ratings.find({service:'daily'}).fetch(),

      };
    }, Dashboard);
