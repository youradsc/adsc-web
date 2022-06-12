// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
export function Protected() {
  const { route } = useAuthenticator((context) => [context.route]);
  Auth.currentAuthenticatedUser()

  const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}