import React, { PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Ratings } from '../api/ratings.js';
import '../../styles/dashboard.css';


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
    const classNames=['sad worst', 'sad', 'regular', 'smile', 'smile best'];
    const rating = Math.floor(this.props.ratings[0].average);
    style = {background:colors[rating], color:colors[rating]};
    this.setState({
      className:`circle ${classNames[rating]} big`
    });
  }


  render () {
    return (
      <div>
        <div className="header"
          style={style}
          >
            <div className={this.state.className}>

            </div>
            <div className="container"></div>
            <div
              className= "footer"
              style={style}
              ></div>
          </div>
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
