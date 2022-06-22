import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//Configure Amplify
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
import 'bootstrap/dist/css/bootstrap.min.css';


Amplify.configure(awsExports);
ReactDOM.render(<App />, document.getElementById('root'));
