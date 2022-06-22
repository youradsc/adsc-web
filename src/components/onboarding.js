import * as React from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';
import Logo from './images/adsc.jpeg'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Onboarding() {
  const [inputs, setInputs] = React.useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let temp = JSON.stringify(inputs)
      axios.post(link,temp).then(res => {
        console.log(res);
      })
  }

    //const { route } = useAuthenticator((context) => [context.route]);
    const [user, setUser] = React.useState(null)
    const [link, setLink] = React.useState("")
    function assingUser(){
      Auth.currentAuthenticatedUser().then((user2) => {
        setUser(user2);
      });
    }
    if(!user){assingUser();}
  
    React.useEffect(() => {
      if(user){   
          var email = ""
          var userName = ""
          var url = ""  
        email = user.attributes.email
        userName = user.attributes.sub
        email = "email="+email+"&"
        userName = "userName="+userName
        console.log(email)
        console.log(userName)
        url = `https://6docuyd642.execute-api.us-east-1.amazonaws.com/default/User_Onboarding?${email}${userName}`
        setLink(url)
      }
    }, [user]);
  

  return(
    <Container class="w-75 mt-5 ml-5 bg-dark text-white" >
      <Row xs={4}>
        <img src={Logo} alt="logo"></img>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Blank
          label="Please enter your Client_ID"
          name="client_id"
          value={inputs.client_id || ""}
          onChange={handleChange}
        />
        <Blank
          label="Please enter your Client_Secret"
          name="client_secret"
          value={inputs.client_secret || ""}
          onChange={handleChange}
        />
        <Blank
          label="Please enter your Refresh_Token"
          name="refresh_token"
          value={inputs.refresh_token || ""}
          onChange={handleChange}
        />
        <Dropdown
          label="How much are you able to invest?"
          options={[
            {label: '', value: 0},
            { label: 'Tier1', value: 500 },
            { label: 'Tier2', value: 1000 },
            { label: 'Tier3', value: 2000 },
          ]}
          name="investment"
          value={inputs.investment || ""}
          onChange={handleChange}
        />
        <Dropdown
          label="How do you feel about risk on capital?"
          options={[
            {label: '', value: ''},
            { label: 'Risk Averse', value: 'Low' },
            { label: 'Risk Moderate', value: 'Medium' },
            { label: 'Risk Inclined', value: 'High' },
          ]}
          name="risk_aversity"
          value={inputs.risk_aversity || ""}
          onChange={handleChange}
        />
        <BlankN
          label="Product Price Minimum"
          name="ppl"
          value={inputs.ppl || 0}
          onChange={handleChange}
        />
        <BlankN
          label="Product Price Maximum"
          name="pph"
          value={inputs.pph || 0}
          onChange={handleChange}
        />
        <p>{inputs.client_id},{inputs.client_secret},{inputs.refresh_token},{inputs.investment},{inputs.risk_aversity},{inputs.ppl},{inputs.pph}</p>
  
        <Button variant="primary" type="submit">
        Submit
       </Button>
      </Form>
    </Container>

    );
  }

  

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
            <option value={option.value}>{option.label}</option>
          ))}
      </Form.Control>
    </Form.Group>
  );
};

const Blank = ({label, name, value, onChange}) => {
  return (
    <Form.Group>
      <Form.Label> {label}</Form.Label>
      <Form.Control 
        type="text" 
        name={name}
        value={value || ""} 
        onChange={onChange}
      />
    </Form.Group>
  )
}

const BlankN = ({label, name, value, onChange}) => {
  return (
    <Form.Group>
      <Form.Label> {label}</Form.Label>
      <Form.Control 
        type="number" 
        name={name}
        value={value || ""} 
        onChange={onChange}
      />
    </Form.Group>
  )
}
