import React from "react";
import TotalSales from "../TotalSales";
import Icons from "../Icons";
import Sales from "../Sales";
import X1 from "../X1";
import X3 from "../X3";
import "./Dash2.css";
import NavBarFull from "../NavBarFull";
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router';
import TinyLineChartShowCartesianGridShowX from"../TinyLineChartShowCartesianGridShowX";
import ChartTitle from "../ChartTitle"

function Dash2(props) {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState(null)
  const [productdetails, setProductDetails] = useState(null)
  const [saleshistory, setSalesHistory] = useState(null)

  const [totalsales, setSales] = useState(null)
  const [totalcost, setCost] = useState(null)
  const navigate = useNavigate();
  function assingUser(){
    Auth.currentAuthenticatedUser().then((user2) => {
      setUser(user2);
    });
  }
  function clickFunction()
  {
    return(<p>submitted</p>)
  }
  if(!user){assingUser();}
  useEffect(() => {
    if(user){     
      var email = user.attributes.email
      var link = "https://gvdjedw9h7.execute-api.us-east-1.amazonaws.com/default/getUserProducts?email="
      var link2 = "https://sbm8g2xbra.execute-api.us-east-1.amazonaws.com/default/GetSalesPerUser?email="
      link += email
      link2 += email
      axios.get(link)
      .then(res => {
        setProducts(res.data.Item)
      })
      axios.get(link2)
      .then(res => {
        setSalesHistory(res.data.Item)
      })
    }

  }, [user]);

  useEffect(()=> {
    console.log(products)
    var pdatal = "https://cx0p9ctcx1.execute-api.us-east-1.amazonaws.com/default/GetProductData"
    axios.get(pdatal)
      .then(res => {
        setProductDetails(res.data)
    })
  },[products])

  useEffect(()=>{
    if(user&&products&&productdetails&&saleshistory)
    {
      var sum = 0
      var listinventory =  Object.entries(products)
      for(var i = 0; i < listinventory.length; i++)
      {
        var temp = listinventory[i]
        if(temp[0]!= "Email")
        {
          console.log(productdetails.filter(stuff=>(stuff.id === temp[0])))
          sum+=temp[1]*((productdetails.filter(stuff=>(stuff.id === temp[0])))[0]["Wholesale Price"])
        }
      } 
      setCost(Math.round(sum*100)/100)
      var sum2 = 0
      for(var i = 0; i < saleshistory.length; i++)
      {
        var temp = saleshistory[i][1]
        var items = Object.entries(temp)
        for(var j = 0; j < items.length; j++)
        {
           var temp2 = items[j]
           console.log(productdetails.filter(stuff=>(stuff.id == temp2[0])))
           sum2+=temp2[1]*(productdetails.filter(stuff=>(stuff.id == temp2[0]))[0]["Sell Price"])
        }
      }
      setSales(Math.round(sum2*100)/100)
    }
  },[user,products,productdetails])
  useEffect(()=>{console.log(totalcost)},[totalsales,totalcost])
  const {
    title,
    name1,
    totalCost,
    price1,
    earnings,
    year,
    name2,
    feb,
    place1,
    apr,
    name3,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec,
    july,
    price2,
    productSales,
    productName,
    place2,
    place3,
    amount,
    status,
    adidasBlackHat,
    number1,
    number2,
    price3,
    noStock1,
    nikeWhiteJacket,
    number3,
    number4,
    price4,
    noStock2,
    costumersList,
    name4,
    brooklynSGmailCom,
    name5,
    jacobJGmailCom,
    name6,
    theresaWGmailCom,
    totalSales1Props,
    totalSales2Props,
    sales1Props,
    sales2Props,
    x11Props,
    x12Props,
    x13Props,
    x31Props,
    x32Props,
  } = props;

  if(user&&products&&productdetails&&saleshistory)
  {
    console.log(products)
    console.log(saleshistory)
    console.log(productdetails)
    return (
      <div className="container-center-horizontal">
        <div className="dash2 screen">
          <div className="dashboard">
            <NavBarFull />
            <div className="header-default">
              <div className="title">{title}</div>
              <div className="header-float-left">
                <div className="search-notification">
                  <img className="search-notification-item" src="/img/ic-baseline-search@2x.svg" />
                  <div className="search-notification-item">
                    <div className="overlap-group">
                      <img className="icon-notifications" src="/img/vector@2x.svg" />
                      <div className="ellipse-1"></div>
                    </div>
                  </div>
                </div>
                <img className="divider-line-vertical" src="/img/divider---line---vertical@2x.svg" />
                <div className="profile">
                  <div className="name">{user.attributes.email}</div>
                </div>
              </div>
            </div>
            <div className="total-container">
              <TotalSales totalSales="Total Sales" x512K={"$"+totalsales} description="The total sales is a measure of the gross amount of revenue that your products have collected throughout your duration with us."/>
              <TotalSales
                totalSales="Total Cost"
                x512K={"$"+totalcost}
                className={totalSales2Props.className}
                description="The total cost is the a measure of the amount of money you have invested but the products have not shown yet showing you your running cost on our platform."
              />
               <TotalSales
                totalSales="Utilization"
                x512K={"%"+((Math.round((totalsales/totalcost)*100)))}
                className={totalSales2Props.className}
                description="The utilization is a ratio of your total sales to your current running cost to show your pending risk versus your overall pay out from our software so far."
              />
              
            </div>
            <div className="earnings">
            <div className="headline">
                <div className="earnings-1 mulish-bold-white-20px">Sales History</div>
              </div>
                <table class="table1" border="1">
                      <thead class="table-head inter-medium-white-20px">
                          <th class="tableheader">Date</th>
                          <th class="tableheader">Name</th>
                          <th class="tableheader">Your Inventory</th>
                          <th class="tableheader">Sold Inventory</th>
                          <th class="tableheader">Sales Price</th>
                          <th class="tableheader">Gross Return</th>
                          <th class="tableheader">Return Per Unit</th>
                          <th class="tableheader">Your Total Return</th>
                      </thead>
                    <tbody>
                    {(saleshistory).map(item=>{
                      var temp = Object.entries(item[1]);
                      return temp.map(([key, value])=>(
                      <tr class="tr inter-medium-white-20px">
                            <td class="tabledata">{item[0]}</td>
                            <td class="tabledata">{(productdetails.filter(temp=>(temp.id == key)))[0]["name"]}</td>
                            <td class="tabledata">{products[key]}</td>
                            <td class="tabledata">{value}</td>
                            <td class="tabledata">{"$"+(productdetails.filter(temp=>(temp.id == key)))[0]["Sell Price"]}</td>
                            <td class="tabledata">{"$"+Math.round((value*(productdetails.filter(temp=>(temp.id == key)))[0]["Sell Price"]) * 100) / 100}</td>
                            <td class="tabledata">{"$"+(productdetails.filter(temp=>(temp.id == key)))[0]["Profit Per Unit Estimate"]}</td>
                            <td class="tabledata">{"$"+(productdetails.filter(temp=>(temp.id == key)))[0]["Profit Per Unit Estimate"] * value}</td>
                        </tr>))   
                    })}
                    </tbody>
                </table> 
                <div className="xx-small-data-box1">
                  <div className="left-column-11">
                    <ChartTitle />
                    <div className="bottm-text1">
                      <img className="arrow_upward1" src="/img/arrow-upward-1@2x.svg" />
                      <div className="x110-since-yesterday1 mulish-normal-cararra-12px">Info</div>
                    </div>
                  </div>
                  <TinyLineChartShowCartesianGridShowX />
                </div>
                <div className="xx-small-data-box2">
                  <div className="left-column-11">
                    <ChartTitle />
                    <div className="bottm-text1">
                      <img className="arrow_upward1" src="/img/arrow-upward-1@2x.svg" />
                      <div className="x110-since-yesterday1 mulish-normal-cararra-12px">Info</div>
                    </div>
                  </div>
                  <TinyLineChartShowCartesianGridShowX />
                </div>
                <div class="understandsales inter-medium-white-20px">
                  <h5 class="salesheader">Understanding Sales</h5>
                  <ul class="instructionlist">
                    <li class="instructionlistelem">Date: The date that the transaction took place and someone else bought your product.</li>
                    <li class="instructionlistelem">Name: The name of the product that was sold to the endpoing customer.</li>
                    <li class="instructionlistelem">Your Inventory: The amount of inventory you have remaining for this product after all sales have been deducted from your inventory.</li>
                    <li class="instructionlistelem">Sold Inventory: The amount of inventory of the given item that was sold in transaction that the row represents.</li>
                    <li class="instructionlistelem">Sales Price: The price that the item sold for on Amazon to the endpoint buyer.</li>
                    <li class="instructionlistelem">Gross Return: The total amount of money made from all items sold in that transaction row not including costs.</li>
                    <li class="instructionlistelem">Return Per Unit: The amount of money you receive to your payout account for each item sold of the given product.</li>
                    <li class="instructionlistelem">Total Return: The total return you receive to your payout account for all the items sold of the given product for the corresponding transaction.</li>
                  </ul>
                </div>
            </div>
            <div className="flex-row">
              <div className="product-sales border-1px-limed-spruce">
                <div className="product-sales-1 mulish-bold-white-20px">Your Sales Inventory</div>
                            <table class="table2" border="1">
                                <thead class="table-head inter-medium-white-20px">
                                    <th class="tableheader">Name</th>
                                    <th class="tableheader">Your Remaining Inventory</th>
                                    <th class="tableheader">Rev Estimate</th>
                                    <th class="tableheader">Sales Estimate</th>
                                    <th class="tableheader">Rating</th>
                                    <th class="tableheader">Sales Price</th>
                                </thead>
                              <tbody>
                              {(productdetails).map(item=>(
                                  products[item.id] ? (<tr class="tr inter-medium-white-20px">
                                      <td class="tabledata">{item.name}</td>
                                      <td class="tabledata">{products[item.id]}</td>
                                      <td class="tabledata">{"$"+item["Monthly Revenue"]}</td>
                                      <td class="tabledata">{item["Monthly Sales"]}</td>
                                      <td class="tabledata">{item.rating}</td>
                                      <td class="tabledata">{"$"+item["Sell Price"]}</td>
                                  </tr>)
                                  : null
                              ))}
                              </tbody>
                          </table> 
                          <div class="understandinventory inter-medium-white-20px">
                            <h5 class="understandinginvetoryheader">Understanding Inventory</h5>
                            <ul class="instructionlist">
                            <li class="instructionlistelem">Name: The name of the product that was sold to the endpoing customer.</li>
                              <li class="instructionlistelem">Your Inventory: The amount of inventory you have remaining for this product after all sales have been deducted from your inventory.</li>
                              <li class="instructionlistelem">Rev Estimate: The average estimated revenue of the product on Amazon based on our proprietary research tools.</li>
                              
                              <li class="instructionlistelem">Sales Estimate: The average estiamted quantity of sales of the product on Amazon based on our properietary research tools.</li>
                              <li class="instructionlistelem">Rating: Overall idea rating of the product based on our properietary data analytics.</li>
                              <li class="instructionlistelem">Sales Price: The average price this type of item sells for on Amazon based on our proprietary research tools.</li>
                            </ul>
                          </div>
                      </div>
              <div className="costumers-list border-1px-limed-spruce">
                <div className="costumers-list-1 mulish-bold-white-20px">Collect Payout</div>
                <button onClick={clickFunction()}>
                  Collect Money 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if(!user)
  {
    navigate("/")
  }
  else
  {
    return( <p>Loading</p>)
  }
}

export default Dash2;
