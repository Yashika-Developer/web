import React, { useState } from 'react';
import axios from 'axios';

function AdminRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        libraryId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = () => {
        axios.post('http://localhost:8080/library-admin', formData)
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    };

    return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <h2>Admin Registration</h2>
                    <form id="adminRegistrationForm">
                        <div className="inputbox">
                            Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter Your Name" />
                        </div>
                        <div className="inputbox">
                            Email: <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
                        </div>
                        <div className="inputbox">
                            Contact Number: <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required placeholder="Enter Contact details" />
                        </div>
                        <div className="inputbox">
                            Library ID: <input type="number" name="libraryId" value={formData.libraryId} onChange={handleChange} required placeholder="Enter Library ID" />
                        </div>
                        <button type="button" onClick={submitForm}>Register</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AdminRegistration;
