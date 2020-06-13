import React, { useState } from 'react';
import UserPool from './UserPool';

export default (props) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [password2, setPassword2] = useState('');
   const [error, setError] = useState('')

   const onSubmit = event => {
      event.preventDefault();
      if (password === password2) {
         UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) setError(err.message);
            props.changeIndex(2);
         });
      } else {
         setError('Passwords must match')
      }

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
                  type='password'
                  style={{marginBottom: '36px'}}
                  value={password}
                  onChange={event => setPassword(event.target.value)}
               />
               <label>Re Enter Password</label>
               <input
                  type='password'
                  style={{marginBottom: '36px'}}
                  value={password2}
                  onChange={event => setPassword2(event.target.value)}
               />
               {error.length > 0 ? <p className="error">{error}</p> : null}
               <button style={{ marginBottom: '36px'}} className="blue-button" type='submit'>Signup</button>
         </div>
      </form>
   )
}