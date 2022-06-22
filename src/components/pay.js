import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export function Pay() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [getStripe, setStripe] = useState("")
  const [unpaid, setUnpaid] = useState([])
  const [date, setDate] = useState("")
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

  useEffect(() => {
    if(userData && user)
    {
        var stripe_key = userData.stripe_id;
        axios.get('https://u4233eyn62.execute-api.us-east-1.amazonaws.com/default/getUnpayed/'+stripe_key)
            .then(res => {console.log(res['data']); setUnpaid(res['data'])})
        var link = 'https://ofwzplr1ue.execute-api.us-east-1.amazonaws.com/default/stripeCheckout/'+stripe_key+'/'+date
        setStripe(link)
    }
  },[userData,user,date])

  const Dropdown = ({ label, name, value, options, onChange }) => {
    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="select"
          value={value}
          name={name}
          onChange={onChange}>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
        </Form.Control>
      </Form.Group>
    );
  };
  
  const handleChange = (event) => {
    const date = event.target.value;
    console.log(date)
    setDate(date)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(getStripe)
    axios.get(getStripe)
        .then(res => {console.log(res['data']); window.location.replace(res['data'])})
  }
  //add code to pull unpayed months based on user and add to a list to put in the options area

  return (
    <Container class="w-75 ml-1">
    <Form onSubmit={handleSubmit} >
        <Dropdown
            label="Month of Payment Due"
            options={unpaid}
            name="date"
            value={date || ""}
            onChange={handleChange}
        />
        <Button variant="primary" type="submit">
        Submit
       </Button>
    </Form>
    </Container>
  )
}