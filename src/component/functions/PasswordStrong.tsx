import React, {Component, useState} from 'react';
import Ps from "./ps";

const PasswordStrong = ({}:{}) => {
    const [passwords, setPassword] = useState('');

        return (
            <div className="m-20">
                <h3>Cand Dev</h3>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="password"
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                    <Ps passwords={passwords}/>
                </div>
            </div>
        );
}

export default PasswordStrong;