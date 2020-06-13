import React, {useState, useCallback} from 'react'
import Login from './Login';
import SignUp from './SignUp';
import Quiz from './Quiz';
import RenderContextProvider from '../contexts/RenderContext';

import circleLogo from '../shared/thecircle.jpeg';


export default () => {
    const [index, setIndex] = useState(0);
    const [user, setUser] = useState({email: '', cognitoUsername: ''})

    const changeIndex = (index) => {
        setIndex(index)
    }

    const saveUser = (user) => {
        setUser({
            email: user.email,
            cognitoUsername: user.cognitoUsername
        })
        changeIndex(2)
    }

    return (
        <div >
            <img src={circleLogo} style={{marginTop: '44px', marginBottom: '44px'}}/>
            <div className="centeredView">
                {index === 0 && <Login saveUser={saveUser}/>}
                {index === 1 && <SignUp changeIndex={changeIndex}/>}

                {(index === 0 || index == 1)
                    &&  <div>
                            <button className="blue-button" onClick={() => {
                                index === 0 ? changeIndex(1) : changeIndex(0)
                            }}>{index === 0 ? 'Register' : 'Go To Login'}</button>
                        </div>}

                {index === 2 && 
                    <RenderContextProvider user={user}>
                        <Quiz user={user}></Quiz>
                    </RenderContextProvider>
                    }
            </div>
        </div>
    )

}