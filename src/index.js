import React from "react";
import ReactDOM from "react-dom";
import "./globals.css"
import "./styleguide.css"
import App from "./App";
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

//hi
Amplify.configure(awsExports);

ReactDOM.render(<App />, document.getElementById("app"));