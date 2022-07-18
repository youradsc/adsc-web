import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material'
import NavBarFull from "../NavBarFull";
import "./ProductFront.css"
import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router';


function ProductFront() {
    const navigate = useNavigate();
    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
      ]);
    if(route==="authenticated"){
        navigate("/store")
    }
    const [products, setProducts] = useState(null)
    useEffect(()=>
        {
            if(!products){
                axios.get('https://cx0p9ctcx1.execute-api.us-east-1.amazonaws.com/default/GetProductData')
                .then(res => {setProducts(res.data)})}
                
        },[]
    )
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
        </Card>

    )
    }
    if(products){return (
        <div className="container-center-horizontal">
        <div className="dash2 screen">
          <div className="dashboard">
            <NavBarFull />
            <h1 class="pageheading dmsans-bold-white-50px">Welcome to Product Selection!</h1>
            <Grid container>
                    {products.map(item=>(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ProductCard url={item.url} name={item.name} id={item.id} pc={item.pc} pm={item.pm} sat={item.sat}/>
                        </Grid>
                    ))
                    }                   
            </Grid>
        </div>
        </div>
      </div>
        
    )
    }
}

export default ProductFront;