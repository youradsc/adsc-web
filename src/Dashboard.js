import Auth from '@aws-amplify/auth';
import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk

function Dashboard(){
    return (<p>Hello</p>)
}
Auth.currentCredentials()
  .then(credentials => {
    const lambda = new Lambda({
      credentials: Auth.essentialCredentials(credentials)
    });
    return lambda.invoke({
      FunctionName: 'my-function',
      Payload: JSON.stringify({ hello: world }),
    });
  })
  export default Dashboard