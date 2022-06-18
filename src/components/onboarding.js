import * as React from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

const Onboarding = () => {
  const [inputs, setInputs] = React.useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(link)
    axios.get(link, { inputs })
      .then(res => {
        console.log(res);
        console.log(res.data);
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
  
    if(user)
    {
      return (
        <form onSubmit={handleSubmit}>
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
    
          <input type="submit" />
        </form>
      );
    }
    else{
        return <p>Route back to Sign In</p>
    }
  }

  

const Dropdown = ({ label, name, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} name={name} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

const Blank = ({label, name, value, onChange}) => {
  return (
    <label>
      {label}
      <input 
        type="text" 
        name={name}
        value={value || ""} 
        onChange={onChange}
      />
    </label>
  )
}

const BlankN = ({label, name, value, onChange}) => {
  return (
    <label>
      {label}
      <input 
        type="number" 
        name={name}
        value={value || ""} 
        onChange={onChange}
      />
    </label>
  )
}


export {Onboarding};