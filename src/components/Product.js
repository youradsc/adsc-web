import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import { Card, CardGroup, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material'

export function Product() {
    const [user, setUser] = useState(null)
    const [push, setPush] = useState("")
    const [getProds, setGetProds] = useState("")
    function assingUser(){
      Auth.currentAuthenticatedUser().then((user2) => {
        setUser(user2);
      });
    }
    if(!user){assingUser();}
  
    useEffect(() => {
      if(user){
        console.log(user)   
        var email = ""
        var userName = ""
        var url = ""  
        var getFromCloud = ""
        email = user.attributes.email
        userName = user.attributes.sub
        email = "email="+email+"&"
        userName = "userName="+userName
        url = 'https://jko83bytag.execute-api.us-east-1.amazonaws.com/default/addUserProducts?'+email+userName
        console.log(url)
        setPush(url)
        getFromCloud = 'https://ezzb0c02e8.execute-api.us-east-1.amazonaws.com/default/Check_Onboarding_Tasks?'+email+userName
        console.log(getFromCloud)
        setGetProds(getFromCloud)
      }
    }, [user]);

    const [products, setProducts] = useState([])
    const [inputs, setInputs] = React.useState({});

    useEffect(()=>
        {
            var response = ""
            if(products.length==0){
                var allProd = {}
                var setProd = {}
                axios.get('https://ilujm74uca.execute-api.us-east-1.amazonaws.com/default/Get_Price_Range_Product')
                .then(res => {
                    setProducts(res.data)
                    for (let item of res.data){
                        allProd[item.id]="no"
                    }
                })
                axios.get(getProds).then(res=>{setInputs(Object.assign(allProd,JSON.parse(res["data"].products)))})
            }

        },[products,getProds]
    )

    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setInputs(values => ({...values, [id]: value}))
      }
    
      const handleSubmit = () => {
        console.log(inputs)
        axios.post(push,JSON.stringify(inputs))
        console.log('Your product selection has been submitted')
      }

    const ProductCard = ({id, pc, pm, sat, value, onChange}) =>
    {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px160"/>
            <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Text> This product has an average cost of {pc}$. It brings in around {pm} in revenue per sale. It currently has {sat} stores selling it.</Card.Text>
            </Card.Body>
            <Card.Footer>
            <Form.Group>
                <Form.Label>{id}</Form.Label>
                <Form.Control
                    as="select"
                    value={value}
                    id={id}
                    onChange={onChange}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </Form.Control>
            </Form.Group>
            </Card.Footer>
        </Card>
    )
    }
    
    return (
        <div>
            <Grid container>
                
                    {products.map(item=>(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ProductCard id={item.id} pc={item.pc} pm={item.pm} sat={item.sat} onChange={handleChange} value={inputs[item.id] || "no"}/>
                        </Grid>
                    ))
                    }                   
            </Grid>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
        
    )
}