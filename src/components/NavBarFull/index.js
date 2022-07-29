import Button from "../Button";
import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';
import {NavLink as Link } from "react-router-dom"
import "./NavBarFull.css"
import { useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Auth } from 'aws-amplify';
function NavBarFull(){
    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
      ]);
    const [user, setUser] = useState(null)
    const [dashlink, setDashLink] = useState(null)
    function assingUser(){
        Auth.currentAuthenticatedUser().then((user2) => {
          setUser(user2);
        });
      }
    if(!user){assingUser();}
    /** 
    useEffect(()=>{
        if(user)
        {
            var email = user.attributes.email
            var link = "https://ttpr9pwqc9.execute-api.us-east-1.amazonaws.com/default/configureCustomerStripeAccount?email="
            link+=email
            axios.get(link)
            .then(res => {
                console.log("redirecURI")
                console.log(res.headers.get('Location'))
                setDashLink(res.headers.get('Location'))
            })
        }
    },[user])
    **/

    return (
        <div className="content">
            <div className="logo">
                <img className="group-179" src="/img/group-179@2x.svg" />
                <div className="sales-strike">SalesStrike</div>
            </div>
            <div>
                <nav className="navbar">
                <ul className="navlistcont">
                    <li className="navbar-link-text-1 inter-medium-mischka-14px">
                    <Link className="navbar-link-text inter-medium-mischka-14px" to="/">Home</Link>
                    </li>
                    <li className="navbar-link-text-1 inter-medium-mischka-14px">
                    <Link className="navbar-link-text-1 inter-medium-mischka-14px" to="/products">Products</Link>
                    </li>
                    {(user) ? (<li className="navbar-link-text-1 inter-medium-mischka-14px">
                    <Link className="navbar-link-text-1 inter-medium-mischka-14px" to="/dash2">Dashboard</Link>
                    </li>) : null}
                </ul>
                </nav>
            </div>
            <Button>Login/Logout</Button>
        </div>
        )
}
export default NavBarFull

