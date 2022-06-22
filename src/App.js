//App.js
import {Navigate} from './components/helpers/navigate'
import { Authenticator } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Authenticator.Provider>
      <Navigate />
    </Authenticator.Provider>
  );
}

export default App;