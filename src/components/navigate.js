import { Protected } from './Protected';
import { RequireAuth } from './RequireAuth';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { Home } from './Home';
import { Layout } from './Layout';
import {Wizard} from './wizard/wizard'
import { ProductSamples } from './ProductSamples';
import {Onboarding} from './onboarding';
import {Pay} from './pay.js'

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Nav, Navbar, Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

export function Navigate() {
  return (
    <BrowserRouter>
    <Container fluid="true" class="mb-5">
      <div>
        <Nav variant="tabs" class="navbar navbar-dark bg-dark">
            <Navbar expand="sm">
                <Navbar.Brand href="#home">Your-ADSC</Navbar.Brand>
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/dashboard"}>Wizard</Nav.Link>
                <Nav.Link as={Link} to={"/productsamples"}>Product Samples</Nav.Link>
                <Nav.Link as={Link} to={"/pay"}>Payment</Nav.Link>
                <Nav.Link as={Link} to={"/onboarding"}>Onboarding</Nav.Link>
                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            </Navbar>
        </Nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Layout />}/>
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
            path="/pay"
            element={
              <RequireAuth>
                <Pay />
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
        </Routes>
      </div>
      </Container>
    </BrowserRouter>
  );
}