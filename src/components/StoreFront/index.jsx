import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import { OverlayTrigger, Tooltip, Popover, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material'
import NavBarFull from "../NavBarFull";
import "./StoreFront.css"
import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router';


function StoreFront() {
    const [user, setUser] = useState(null)
    const [uemail,setUemail] = useState("")
    const [push, setPush] = useState("")
    const navigate = useNavigate();
    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
      ]);
    if(route!=="authenticated"){
        navigate("/products")
    }
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
                .then(res => {console.log(res.data); setProducts(res.data)})}
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

    //useEffect(()=>{},[inputs])

    const handleChange = (event) => {
        event.preventDefault()
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
        alert('Click Ok to be redirected to payment')
      }
      const renderTooltip = (props) => (
        <Popover className={props.mainClassName}> 
              <Popover.Header as="h3" className={props.secondaryClass}>Product Rationale</Popover.Header>
              <Popover.Body className={props.mainClassName}>
                <strong>{props.info}</strong>
              </Popover.Body>
            </Popover>
      );



    const ProductCard = ({id, name, mr, ms, pps, rating, sv, url, value, onChange, sp, rationale, status}) =>
    {
    return (
        <OverlayTrigger
            placement="auto-start"
            overlay={renderTooltip({mainClassName:"hoverinfo", info:rationale, secondaryClass:"headerhover"})}>
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
                    <p>{"Status: " + status}</p>
                </Card.Text>
                <Card.Link href={url} target="_blank">Link to Product</Card.Link>
            </Card.Body>
            <Card.Footer>
                <Form.Group>
                    <Form.Label>Enter the number of units you want to sell.</Form.Label>
                    <p>Currently owned units: {oldProducts[id] || '0'}</p>
                    <Form.Control
                        value={value || '0'}
                        id={id}
                        as='input'
                        onChange={onChange}
                        placeholder='0'
                        type='number'>
                    </Form.Control>
                </Form.Group>
            </Card.Footer>
        </Card>
        </OverlayTrigger>

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
                            <ProductCard url={item.url} name={item.name} id={item.id} mr={item["Monthly Revenue"]} ms={item["Monthly Sales"]} pps={item["Profit Per Unit Estimate"]} rating={item.rating} sp={item["Wholesale Price"]} sv={item["Search Volume"]} onChange={handleChange} value={inputs[item.id] || "0"} rationale={item["Rationale"]} status={item["Type"]}/>
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