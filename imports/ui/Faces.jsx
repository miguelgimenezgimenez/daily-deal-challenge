import React, { PropTypes } from 'react'

import '../../styles/face.css';

export default class Faces extends React.Component {
  render() {
    return ['worst', 'bad', 'regular', 'good', 'best']
    .map((face, i)=>{

      const className=`circle ${face}`;
      const style={};
      if (this.props.average>0) {
        style.borderColor="#FFCA3A";
      }

      if (i===Math.floor(this.props.average)) {
        const percentage = Math.floor((this.props.average-i)*100);
        console.log(percentage);
        style.background=`linear-gradient(to right, #FFCA3A ${percentage}%, white 0)`;
      } else {
        this.props.average>i ? style.backgroundColor='#FFCA3A':style.backgroundColor='white';
      }

      return (
        <div
          key = {face}
          style={style}
          onClick={()=>{
            this.props.handleClick('daily', i);
          }}
          className={className} >
          <div
            style={style}
            className="fill"/>
          </div>);
        });

      }
    }
