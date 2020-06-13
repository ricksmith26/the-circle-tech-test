import React, { useState } from 'react';
import UserPool from './UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

export default (props) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('')

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
         console.error('onSuccess:', data.idToken.payload.sub);
         props.saveUser({
            email: data.idToken.payload.email,
            cognitoUsername: data.idToken.payload.sub
         })
      },

      onFailure: error => {
         console.error('onError:', error);
         setError(error.message)

      },

      newPasswordRequired: data => {
         console.log('newPasswordRequired:', data)
      }
   })
};
   return (
      <form onSubmit={onSubmit}>
         <div className="centeredView">
               <label>Email</label>
               <input
                  style={{marginBottom: '36px'}}
                  value={email}
                  onChange={event => setEmail(event.target.value)}
               />
               <label>Password</label>
               <input
                  type="password"
                  style={{marginBottom: '36px'}}
                  value={password}
                  onChange={event => setPassword(event.target.value)}
               />

               {error.length > 0 ? <p className="error">{error}</p> : null}


               <button style={{marginBottom: '24px'}} className="blue-button" type='submit'>Login</button>
         </div>
      </form>
   )

}