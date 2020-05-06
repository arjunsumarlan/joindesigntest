import React, { useState, useEffect } from 'react';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import { decrypt } from '../../utils';
import logo from '../../assets/logo.svg';

function App() {
    const history = useHistory();
    const location = useLocation();
    const [data, setData] = useState('');

    useEffect(() => {
        (async function () {
            const key = await localStorage.getItem('k');
            const encrypted = await localStorage.getItem('e');
            if (key && encrypted) {
                const { email } = JSON.parse(encrypted);
                setData(decrypt(email, key));
            } else {
                location.href = '/login';
                history.replace('/login');
            }
        })();
    }, [history, location]);

    return (
        <div className="Home">
            <img src={logo} className="App-logo" alt="logo" />
            <p><span role="img" aria-label="wavehand">👋</span>Hi, <code data-testid="data-email">{data}</code> welcome to outer space!</p>
        </div>
    );
}

export default App;
