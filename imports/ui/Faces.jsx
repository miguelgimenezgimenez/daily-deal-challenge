
import React from 'react';

const borderColor={};

 const renderFaces=(props)=>{
  return ['sad worst', 'sad', 'regular', 'smile', 'smile best'].map((face, i)=>{
    const className=`circle ${face}`;
    const style={};
    if (props.average>0) {
      style.borderColor="#FFCA3A";
    }

    if (i===Math.floor(props.average)) {
      const percentage = Math.floor((props.average-i)*100);
      console.log(percentage);
      style.background=`linear-gradient(to right, #FFCA3A ${percentage}%, white 0)`;
    } else {
      props.average>i ? style.backgroundColor='#FFCA3A':style.backgroundColor='white';
    }
    return (
    <div
        key = {face}
        style={props.borderColor}
        onClick={()=>{
          props.handleClick('daily', i);
        }}
        className={className} >
        <div
          style={style}
          className="fill"/>
      </div>);
  });
}
export default renderFaces;
