import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Product() {
    const [user, setUser] = React.useState(null)
    const [link, setLink] = React.useState("")
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
        email = user.attributes.email
        userName = user.attributes.sub
        email = "email="+email+"&"
        userName = "userName="+userName
        url = `https://jko83bytag.execute-api.us-east-1.amazonaws.com/default/addUserProducts/${email}/${userName}`
        console.log(url)
        setLink(url)
      }
    }, [user]);

    const [products, setProducts] = useState([])
    const [inputs, setInputs] = React.useState({});

    useEffect(()=>
        {
            var temp
            if(products.length==0){
                console.log('https://ilujm74uca.execute-api.us-east-1.amazonaws.com/default/Get_Price_Range_Product')
                axios.get('https://ilujm74uca.execute-api.us-east-1.amazonaws.com/default/Get_Price_Range_Product')
                .then(res => {
                    console.log(res)
                    setProducts(res.data)
                    temp = res.data
                })
            }
        },[products]
    )

    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setInputs(values => ({...values, [id]: value}))
      }
    
      const handleSubmit = () => {
        axios.post(link,inputs)
        console.log('Your product selection has been submitted')
      }

    const ProductCard = ({id, pc, pm, sat, value, onChange}) =>
    {
    return (
        <Card>
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
        {products.map(item=>(
            <ProductCard id={item.id} pc={item.pc} pm={item.pm} sat={item.sat} onChange={handleChange} value={inputs[item.id] || "no"}/>
            ))}
        <Button onClick={handleSubmit}>Submit</Button>
        </div>
        
    )
}