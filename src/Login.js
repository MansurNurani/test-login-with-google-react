import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "17912434840-29tt5r5q6g6pq6p7l2r7mio0532apqvt.apps.googleusercontent.com";


function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [profileObj, setProfileObj] = useState(null);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setProfileObj(res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        //alert("You have been logged out successfully");
        //console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
        setProfileObj(null);

    };

    const handleClick = () => {
        if (profileObj) {
            alert(profileObj.givenName);
        }
        else {
            alert("کسی لاگین نیست");
        }
    }
    const userBox = (<div>
        {profileObj && "First Name:" + profileObj.name}<br />
        {profileObj && "Last Name:" + profileObj.familyName}<br />
        <img src={profileObj && profileObj.imageUrl} />
    </div>);

    return (
        <div>
            {showloginButton &&
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />}

            {showlogoutButton &&
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout>
            }
            <hr />
            {profileObj && userBox}
            <hr />
            <button onClick={handleClick}>Who am I?</button>
            <hr />
            <hr />
            <hr />
            {profileObj && "aaa:" + JSON.stringify(profileObj)}
        </div>
    );
}
export default Login;