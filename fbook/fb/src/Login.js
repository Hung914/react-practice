import React from 'react';
import './Login.css';
import {auth, provider} from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider';
function Login() {

    const[state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => alert(error.message));
    }

    return (
        <div className = 'login'>
            <div className = 'loginlogo'>
                <img src = 'data:image/png;base64,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' />
            </div>
            <button type = 'submit' onClick = {signIn}>Sign In</button>
        </div>
    )
}

export default Login
