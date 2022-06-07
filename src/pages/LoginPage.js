import { Auth } from 'aws-amplify'

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => Auth.federatedSignIn()}>
        Sign In
      </button>
    </div>
  )
}
export default LoginPage