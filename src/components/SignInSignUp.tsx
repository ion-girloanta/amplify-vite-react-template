import { Authenticator } from '@aws-amplify/ui-react';

export default function SignInSignUp() {
  return (
    <Authenticator
      formFields={{
        signUp: {
          username: {
            label: 'Username',
            placeholder: 'Enter your username',
            isRequired: true,
            order: 1,
          },
          password: {
            label: 'Passwords',
            placeholder: 'Enter your password',
            isRequired: true,
            order: 2,
          },
          confirm_password: {
            label: 'Confirm Password',
            placeholder: 'Confirm your password',
            isRequired: true,
            order: 3,
          },
          email: {
            label: 'Email',
            placeholder: 'Enter your email',
            isRequired: true,
            order: 4,
          },
          phone_number: {
            label: 'Phone Number',
            placeholder: '+972-xx-xxxxxxx',
            isRequired: false,
            order: 5,
          },
        },
      }}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
