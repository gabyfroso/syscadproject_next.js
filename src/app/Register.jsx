'use client';
import React, { useState, useEffect } from 'react';

import mdM from '../css/cssMovements.module.css';
import { GoEye, GoEyeClosed } from 'react-icons/go';

function Register({ animations = false }) {

    const [HiddenPassword, setHiddenPassword] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {


    }, [HiddenPassword])

    const chgeValues = (e) => {
        if (e.name == "password") {
            setPassword(e.value);
        }
        if (e.name == "username") {
            setUsername(e.value);
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        console.log('Formulario enviado');
    }


    return (
        <fieldset className={mdM.fs}>
            <form onChange={(e) => { chgeValues(e.target); }} onSubmit={handleSubmit} >
                <ul>
                    <li className={mdM.li}>
                        <label type="text" htmlFor='username'>
                            User:
                        </label>
                        <input type='text' name='username' id='username' 
                        defaultValue={`${username}`} autoComplete="username"/>
                    </li>
                    <li className={mdM.li}>
                        <label type="text" htmlFor='password'>
                            Password:
                        </label>
                        <div>
                            <input className={mdM.finput} type={`${HiddenPassword? "password" : "text"}`}
                                id='password'
                                name='password'
                                autoComplete="current-password"
                                defaultValue={`${password}`}
                            />
                            <button className={mdM.binput} 
                            onTouchStart={(e) => { setHiddenPassword(!HiddenPassword);}}
                            onClick={e=> e.preventDefault()}
                            >
                                {HiddenPassword ? <GoEye /> : <GoEyeClosed />}
                            </button>
                        </div>
                    </li>
                </ul>

                <input className={mdM.submit} type='submit' value={'Enviar'}/>
            </form>
        </fieldset>
    )
}

export default Register