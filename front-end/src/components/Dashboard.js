import React from 'react';



const Dashboard = (props) => {
  console.log("Dashboard :", props.dashMonSales)
  console.log("Dash Items Available:", props.itemsAvailable)
  console.log("Dash Seller Logo:",props.logo)
  console.log("Dash Items Sold:", props.itemsSold)
  console.log("Dash Seller Rating:", props.myRating)
  const monthlySales = props.dashMonSales.map((elem) => <span>{elem.monthly_sales}</span>)
  const availableItems = props.itemsAvailable.map((elem) => <span>{elem.Items_Available}</span>)
  const sellerLogo = props.logo.map((elem) => <img src = {elem.logo_url} alt= "Seller_Logo"/>)
  const soldItems = props.itemsSold.map((elem) => <span>{elem.Items_Sold}</span>)
  const sellerRating = props.myRating.map((elem) => <span>{elem.Avg_Rating}</span>)
    return (
    <div className = 'dashboard'>
        {sellerLogo}
     <div>My Rating : {sellerRating}</div>
     <div>Monthly Sales : {monthlySales}</div> 
     <div>Num Of Items Available : {availableItems}</div>
     <div>Num Of Items Sold : {soldItems}</div>
     
    </div>
    );
}

export default Dashboard;