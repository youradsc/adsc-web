//App.js
import { Authenticator } from '@aws-amplify/ui-react';

import { Protected } from './components/Protected';
import { RequireAuth } from './components/RequireAuth';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import {Wizard} from './wizard/wizard'
import { ProductSamples } from './components/ProductSamples';
import {Onboarding} from './components/onboarding';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


/*
 * Configure the SDK to use anonymous identity 
 */

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/wizard"
            element={
                <Wizard />
            }
          />
          <Route
            path="/productsamples"
            element={
              <RequireAuth>
                <ProductSamples />
              </RequireAuth>
            }
          />
          <Route
            path="/onboarding"
            element={
              <RequireAuth>
                <Onboarding />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;