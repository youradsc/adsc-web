import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material'
import NavBarFull from "../NavBarFull";
import "./StoreFront.css"
import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';


function StoreFront() {
    const [user, setUser] = useState(null)
    const [uemail,setUemail] = useState("")
    const [push, setPush] = useState("")
    function assingUser(){
      Auth.currentAuthenticatedUser().then((user2) => {
        console.log(user2)
        setUser(user2);
      });
    }
    if(!user){assingUser();}
  
    useEffect(() => {
      if(user){
        var email = ""
        var url = ""  
        email = user.attributes.email
        email = "email="+email+"&"
        axios.get(`https://ezzb0c02e8.execute-api.us-east-1.amazonaws.com/default/Check_Onboarding_Tasks?${email}`).then(res=>{
            console.log(res.data.customer_id)
            url = 'https://6lz9byn0vd.execute-api.us-east-1.amazonaws.com/default/addUserOrders?stripe_id='+res.data.customer_id
            setPush(url)
        })
        setUemail(user.attributes.email)
        //setting up urls to set products and get user product
      }
    }, [user]);

    const [products, setProducts] = useState([])
    const [oldProducts, setOldProducts] = useState({})
    const [inputs, setInputs] = useState({});

    useEffect(()=>
        {
            if(products.length===0 && uemail!==""){
                axios.get('https://cx0p9ctcx1.execute-api.us-east-1.amazonaws.com/default/GetProductData')
                .then(res => {setProducts(res.data)})}
                axios.get("https://gvdjedw9h7.execute-api.us-east-1.amazonaws.com/default/getUserProducts?email="+uemail).then(res=>{
                    if(typeof res.data.Item==='undefined'){
                        setOldProducts({})
                    }
                    else{
                        setOldProducts(res.data.Item)
                    }
                })
        },[uemail, products]
    )

    useEffect(()=>{},[inputs])

    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setInputs(values => ({...values, [id]: value}))
      }
    
      const handleSubmit = () => {
        var temp = inputs
        console.log(temp)
        temp["Email"] = uemail
        axios.post(push,JSON.stringify(temp)).then(res=>window.location.replace(res.data))
        console.log('Your product selection has been submitted')
        alert('thank you for purchasing products')
      }

    const ProductCard = ({id, pc, pm, sat, value, onChange, name, url}) =>
    {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`images/${id}.jpeg`}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text> This product has an average cost of {pc}$. It brings in around {pm} in revenue per sale. It currently has {sat} stores selling it.</Card.Text>
                <Card.Link href={url} target="_blank">Link to Product</Card.Link>
            </Card.Body>
            <Card.Footer>
                <Form.Group>
                    <Form.Label>Enter the number of units you want to sell.</Form.Label>
                    <p>Currently owned units: {oldProducts[id] || '0'}</p>
                    <Form.Control
                        type = "text"
                        value={value || '0'}
                         id={id}
                        onChange={onChange}>
                    </Form.Control>
                </Form.Group>
            </Card.Footer>
        </Card>

    )
    }
    
    return (
        <div className="container-center-horizontal">
        <div className="dash2 screen">
          <div className="dashboard">
            <NavBarFull />
            <h1 class="pageheading dmsans-bold-white-50px">Welcome to Product Selection!</h1>
            <Grid container>
                    {products.map(item=>(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ProductCard url={item.url} name={item.name} id={item.id} pc={item.pc} pm={item.pm} sat={item.sat} onChange={handleChange} value={inputs[item.id] || "0"}/>
                        </Grid>
                    ))
                    }                   
            </Grid>
            <div className="d-grid gap-2">
                <Button size="lg" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
        </div>
      </div>
        
    )
}

export default StoreFront;