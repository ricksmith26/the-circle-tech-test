import React, {useState, useCallback} from 'react'
import Login from './Login';
import SignUp from './SignUp';
import Quiz from './Quiz';
import RenderContextProvider from '../contexts/RenderContext';


export default () => {
    const [index, setIndex] = useState(0);
    const [user, setUser] = useState({email: '', cognito_username: ''})

    const changeIndex = (index) => {
        setIndex(index)
    }

    const saveUser = (user) => {
        setUser({
            email: user.email,
            cognito_username: user.cognito_username
        })
        changeIndex(3)
    }

    return (
        <div>
            {index === 0 && <Login saveUser={saveUser}/>}
            {index === 1 && <SignUp/>}

            {index === 0 || index == 1
                &&  <div>
                        <button onClick={() => {
                            index === 0 ? changeIndex(1) : changeIndex(0)
                        }}>{index === 0 ? 'Register' : 'Login'}</button>
                    </div>}

            {index === 3 && 
                <RenderContextProvider user={user}>
                    <Quiz user={user}></Quiz>
                </RenderContextProvider>
                }
        </div>
    )

}