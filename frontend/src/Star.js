import React from 'react';

function Star(props) {
  let x = [];
  for (let i = 0; i < props.rates; i++) {
    x.push("");
  }
  // function renderStar(){
  //   return(
  //     <div>
  //       <p>star</p>
  //       {x.map((index) => (
  //         <p>star</p>
  //         )
  //       )}
  //     </div>
  //   )
  // }

  const renderStar = x.map((index) => (
    <img
    src="icon/icon-star.svg"
    alt="star"
    className="star-icon-size align-middle"
    />
  ))

  return (
    <div>
      {renderStar}
    </div>
  )
}

export default Star;