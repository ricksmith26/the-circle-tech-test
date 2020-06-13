import React, { useState } from 'react';
import UserPool from './UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

export default (props) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const onSubmit = event => {
      event.preventDefault();
   

   const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
      
   })
   const authDetails =  new AuthenticationDetails({
      Username: email,
      Password: password
   })
   
   user.authenticateUser(authDetails, {

      onSuccess: data => {
         console.error('onSuccess:', data);
         props.saveUser({
            email: data.idToken.payload.email,
            cognitoUsername: data.idToken.payload.sub
         })
      },

      onFailure: error => {
         console.error('onError:', error);


      },

      newPasswordRequired: data => {
         console.log('newPasswordRequired:', data)
      }
   })
};
   return (
      <div>
         <form onSubmit={onSubmit}>
            <label>Email</label>
            <input
               value={email}
               onChange={event => setEmail(event.target.value)}
            />
            <label>Password</label>
            <input
               value={password}
               onChange={event => setPassword(event.target.value)}
            />

            <button type='submit'>Login</button>
         </form>
      </div>
   )

}