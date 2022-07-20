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

    const [products, setProducts] = useState([])
    useEffect(()=>
        {
            if(products.length===0){
                axios.get('https://cx0p9ctcx1.execute-api.us-east-1.amazonaws.com/default/GetProductData')
                .then(res => {setProducts(res.data)})}
        },[products]
    )

    //useEffect(()=>{},[inputs])

    const ProductCard = ({id, name, mr, ms, pps, rating, sv, url, sp}) =>
    {
    return (
        <Card style={{ width: '24rem', height: '60 rem', border: '5px solid gray' }} className="card text-white bg-dark mb-3">
            <Card.Img variant="top" src={`images/${id}.png`}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <h5>Similar Listing Data</h5>
                    <p>Top listings sell an average of {ms} averaging ${mr} in monthly revenue.</p>
                    <p>This product is searched {sv} times monthly.</p>
                    <p>We rate this product a {rating}/5 selection.</p>
                    <p>It is available for purchase at ${sp} and will provide approxiamtely ${pps} in revenue.</p>
                </Card.Text>
                <Card.Link href={url} target="_blank">Link to Product</Card.Link>
            </Card.Body>
        </Card>

    )
    }
    
    return (
        <div className="container-center-horizontal">
        <div className="dash2 screen">
          <div className="dashboard">
            <NavBarFull />
            <h1 class="pageheading dmsans-bold-white-50px mb-5">Welcome to Product Selection!</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }} justifyContent="flex-start">
                    {products.map(item=>(
                        <Grid item xs={2} sm={3} md={3} lg={4}>
                            <ProductCard url={item.url} name={item.name} id={item.id} mr={item["Monthly Revenue"]} ms={item["Monthly Sales"]} pps={item["Profit Per Unit Estimate"]} rating={item.rating} sp={item["Wholesale Price"]} sv={item["Search Volume"]}/>
                        </Grid>
                    ))
                    }                   
            </Grid>
        </div>
        </div>
      </div>
        
    )
}

export default ProductFront;