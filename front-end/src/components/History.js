import React from 'react';



const History = (props) => {
  console.log("Seller Sales History :", props.mySalesHistory)
  const salesHistory = props.mySalesHistory.map((elem) => <div><span>{elem.id} || </span><span>{elem.name} || </span><span>{elem.descrition} || </span><span>{elem.price} || </span></div>)
    return (
    <div className = 'history'>
        History
        {salesHistory}
    </div>
    );
}

export default History;



