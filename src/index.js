import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//Configure Amplify
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
import "./index.css";

Amplify.configure(awsExports);
ReactDOM.render(<App />, document.getElementById('root'));
