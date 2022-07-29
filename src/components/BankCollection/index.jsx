import "./BankCollection.css"
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios'
import { useNavigate } from 'react-router';

function BankCollection(){
    const [user, setUser] = useState(null)
    const [email, SetEmail] = useState(null)
    const [theName, setTheName] = useState("")
    const [theRn, setTheRn] = useState(null)
    const [theAn, setTheAn] = useState(null)
    const navigate = useNavigate();
    function assingUser(){
        Auth.currentAuthenticatedUser().then((user2) => {
          setUser(user2);
        });
      }
    if(!user){assingUser();}
    const namechange = event => {
        setTheName(event.target.value)
      };
    const rnchange = event => {
        setTheRn(event.target.value)
    };
    const anchange = event => {
        console.log(event.target.value)
        setTheAn(event.target.value)
    };
    useEffect(()=>{
        if(user){
            var email = user.attributes.email
            SetEmail(email)
        }
    },[user])
    const handleSubmit = event => {
        event.preventDefault();
        console.log(theName)
        console.log(email)
        console.log(theRn)
        console.log(theAn)
        const info = {
            name: theName,
            email: email,
            rn: theRn,
            an: theAn
            }
        const header = {"Content-Type": "application/json"}
        console.log(info)
        axios.post("https://aqxdd3tztd.execute-api.us-east-1.amazonaws.com/default/addBankInformation", info, header)
            .then((response) => {
                if(response.status == 204)
                {
                    alert("Thank you! Now you will be redirectred to puchase products!")
                    navigate("/products")
                    //window.location.replace("https://securitize.d5m618u6ryqvr.amplifyapp.com/products")
                }
                else
                {
                    alert("Error, please retry, if the error persists - contact us.")
                }
            });
        
      }; 
    
    

    return(
        <body class="fullbody">
            <div class="all testbox">
            <form action="/" class="all mainform" onSubmit={handleSubmit}>
                <div class="all banner">
                <h1 class="h1bank">Bank Onboarding</h1>
                </div>
                <div class="all item">
                <p>Name</p>
                <div class=" all name-item">
                    <input class = "inputstuff all" type="text" name="name" placeholder="Full Name" onChange={namechange} value={theName}/>
                </div>
                </div>
                <div class="all contact-item">
                <div class="all item">
                    <p class ="all" >Routing Number</p>
                    <input class ="inputstuff all" type="text" name="routing" onChange={rnchange} value={theRn}/>
                </div>
                <div class="all item">
                    <p class ="all" >Account Number</p>
                    <input class ="inputstuff all" type="text" name="acct" onChange={anchange} value={theAn}/>
                </div>
                </div>
                <div class="btn-block">
                <button class="buttonstuff" type="submit" href="/">Submit</button>
                </div>
            </form>
            </div>
        </body>
)
}
export default BankCollection