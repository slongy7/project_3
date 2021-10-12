import React from 'react';
import { useQuery } from '@apollo/client';
import 'bulma/css/bulma.min.css';
import '../img/TechTalk.png'

const Landing = () => {
    return (
    
        <div class='colums is-half'>
            <div class='column is-8'></div>
            {/* <img>'../img/TechTalk.png</img> */}
            
            
            
            <form class='box'>
            <br>

            </br>


            <div class='columns is-mobile is-centered'>
                <div class='columns is-half'></div>
                <p class='bd-notification is-primary'></p>
            </div>

            <a href="./Profile.js">Profile</a>
            <br></br>
            <a href="./Signup.js">Signup</a>

            <br></br>

            <div className='field'>
                <label class='label'>Email</label>
                <div class='control'>
                    <input class='input' type='email' placeholder='e.g. justin@example.com'></input>
                </div>
            </div>

            <div class='field'>
                <label class='label'>Password</label>
                <div class='control'>
                    <input class='input' type='password' placeholder='********'></input>
                </div>
            </div>
            <button class="button is-primary">Sign In</button>
        </form>
        
        </div>
        
        )
    }


export default Landing;