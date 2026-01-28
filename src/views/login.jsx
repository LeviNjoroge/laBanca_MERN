import React, { useState, useEffect } from 'react';

function login(){
    return(
        <>
            <h2>Welcome back to LaBanca</h2>
            <form action="" method="post">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Joe Doe"/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
                <br />
                <button>Log in</button>
            </form>
        </>
    );
}

export default login;