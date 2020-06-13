import React, { useState } from 'react';
import UserPool from './UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

export default () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const onSubmit = event => {
      event.preventDefault();

      UserPool.signUp(email, password, [], null, (err, data) => {
         if (err) console.error(err);
         console.log(data);
      });
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

            <button type='submit'>Signup</button>
         </form>
      </div>
   )

}