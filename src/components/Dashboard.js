// components/ProtectSecond.js
import { Heading } from '@aws-amplify/ui-react';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Navigate } from "react-router-dom";
export function Dashboard() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  function assingUser(){
    Auth.currentAuthenticatedUser().then((user2) => {
      setUser(user2);
    });
  }
  if(!user){assingUser();}

  useEffect(() => {
    if(user){   
        var email = ""
        var userName = ""
        var link = ""  
      email = user.attributes.email
      userName = user.attributes.sub
      email = "email="+email+"&"
      userName = "userName="+userName
      console.log(email)
      console.log(userName)
      link = "https://ezzb0c02e8.execute-api.us-east-1.amazonaws.com/default/Check_Onboarding_Tasks?"+email+userName
      getData(link)
    }
  }, [user]);
  function getData(url)
    {
    console.log(url)
    axios.get(url)
    .then(res => {
        console.log(res);
        setUserData(res.data)
    })
    }
  console.log(userData)
  const [apiOut, setApiOut] = useState(null)
  const [salesOut, setSalesOut] = useState(null)
  useEffect(() => {
    if(user && userData && ("client_id" in userData) && ("client_secret" in userData) &&("refresh_token" in userData))
    {
      var client_id = userData.client_id
      var client_secret = userData.client_secret
      var refresh_token = userData.refresh_token
      getProductList(client_id, client_secret, refresh_token, "GET_MERCHANT_LISTINGS_ALL_DATA")
      getSalesList(client_id, client_secret, refresh_token)
    }
  }, [userData])
  function getProductList(client_id, client_secret, refresh_token, product_type)
  {
    var obj = {"client_id" : client_id, "client_secret": client_secret, "refresh_token": refresh_token, "type": "GET_MERCHANT_LISTINGS_ALL_DATA"}
    let temp = JSON.stringify(obj)
    axios.post("https://1xgh9vlygi.execute-api.us-east-1.amazonaws.com/default",temp,{headers: {
      'content-type': 'application/json'
    }}).then(res => {
      console.log(res.data);
      setApiOut(res.data)
    })
  }
  function getSalesList(client_id, client_secret, refresh_token)
  {
    var url = "https://gqpng1src6.execute-api.us-east-1.amazonaws.com/default/Get_Sales?"
    var url2 = "https://gqpng1src6.execute-api.us-east-1.amazonaws.com/default/Get_Sales?client_id=amzn1.application-oa2-client.81f1a3e2774e44b7897bbe3cc818c46f&client_secret=57f8c4ad89c1460fe2133901e5909c75f3e52630ba5ad89046b0ec42c67c5477&refresh_token=Atzr|IwEBICIBiCO06XPYLx4DdthLFvC_G7clIIP_kgDZfKcwiQl5SpkmWxOgW_28cjtdNWLwi7RyiGXGl0rv30pl4MuXwHW4ChRM8CQ9-9xyyAoWsYYAjeIK6M_-RgfRcOmmVUX-OEHmKkj-wy52F6Dft4yto-kVkTcYkCrItrC3GdPgR7uhheTlnRXVLGir2mfhBZLMS36gG9AUdrVeqm0YjMia--TdBjfvPe0_5-8NIo1rqtbin-6smi5UflKv7bYuM505oD2I_fHtG1f3Kdjfv4fhv4jFVwiEcGIKdjjMjU4hn0LX9_hq2trMRMCIKU5tSQDSMPk"
    var temp= "client_id="+client_id+"&client_secret="+client_secret+"&refresh_token="+encodeURIComponent(refresh_token)
    url = url + temp
    console.log(url)
    axios.get(url).then(res=>{
      console.log(res.data)
      setSalesOut(res.data)
    })
  }

  if(userData && user && apiOut && salesOut)
  {
    return(
      <div>
      <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>SKU</th>
          <th>ASIN</th>
        </tr>
      </thead>
      <tbody>
        {(Object.values((apiOut.body))).map(item=>(
          <tr key={item.asin1}>
            <td key={1}>{item["item-name"]}</td>
            <td key={2}>{item.price}</td>
            <td key={3}>{item.quantity}</td>
            <td key={4}>{item["seller-sku"]}</td>
            <td key={5}> {item.asin1}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p>{"Total Month Sales: $" + salesOut["payload"][0]["totalSales"]["amount"]}</p>
    <p>{"Total Orders: " + salesOut["payload"][0]["orderCount"]}</p>
    <p>{"Total Items Sold: " + salesOut["payload"][0]["orderItemCount"]}</p>
    </div>
    )
  }
  else if (user && userData && !(("client_id" in userData) && ("client_secret" in userData) &&("refresh_token" in userData))) {
    return <Navigate to="/onboarding"/>
  }
  else{
      return <p>Loading...</p>
  }
}