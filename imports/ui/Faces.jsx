
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
      style.background=`linear-gradient(to right, #FFCA3A ${percentage}%, white 0)`;
    } else {
      props.average>i ? style.backgroundColor='#FFCA3A':style.backgroundColor='white';
    }
    return (
      <div
        className="overlap"
        key={face}
        onClick={()=>{
          props.handleClick('daily', i);
        }}
        >
          <div className="outside">
            <div className="inside">
              <div className="hole"/>
            </div>
          </div>
        <div
          // key = {face}
          style={props.borderColor}

          className={className} >
          <div
            style={style}
            className="fill"/>
          </div>
      </div>
      );
    });
  }
  export default renderFaces;
