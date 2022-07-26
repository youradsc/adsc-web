import "./BankCollection.css"
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios'

function BankCollection(){
    const [user, setUser] = useState(null)
    const [acct, setAcct] = useState(null)
    const [theName, setTheName] = useState("")
    const [theRn, setTheRn] = useState(null)
    const [theAn, setTheAn] = useState(null)
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
            var link = "https://ezzb0c02e8.execute-api.us-east-1.amazonaws.com/default/Check_Onboarding_Tasks?email="+email
            axios.get(link)
                .then(res => {
                    setAcct(res.data.account_id)
                    console.log(res.data.account_id)
                })
        }
    },[user])
    const handleSubmit = event => {
        event.preventDefault();
        console.log(theName)
        console.log(acct)
        console.log(theRn)
        console.log(theAn)
        const info = {
            name: theName,
            account: acct,
            rn: theRn,
            an: theAn
            }
        const header = {"Content-Type": "application/json"}
        console.log(info)
        axios.post("https://aqxdd3tztd.execute-api.us-east-1.amazonaws.com/default/addBankInformation", info, header)
            .then((response) => {
            console.log(response);
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