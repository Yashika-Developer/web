import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const submitLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, role })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data.isAdmin) {
                history.push('/admin_home');
            } else if (data.isReader) {
                history.push('/reader_home');
            } else {
                setError('Incorrect login details');
            }
        } catch (error) {
            setError('Details Incorrect!! Please check and login again.');
        }
    };

    return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <h2>Login</h2>
                    {error && <div className="popup">{error}</div>}
                    <form>
                        <div className="inputbox">
                            Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                        </div>
                        <div className="inputbox">
                            Role:
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="LibraryAdmin">Admin</option>
                                <option value="reader">Reader</option>
                            </select>
                        </div>
                        <br /><br />
                        <button type="button" onClick={submitLogin}>Login</button>
                        <button type="button" onClick={() => history.push('/')}>Cancel</button>
                        <div className="register">
                            <p>Don't have an account <a href="register-reader.html">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
