import React from 'react';
import { Link } from 'react-router-dom';

function AdminHome() {
    return (
        <div>
            <h1>Admin Panel</h1>
            <div className="grid-container">
                <Link to="/addbook" className="card">
                    <p><strong>Add New Books</strong></p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/add-book-5221292-4359747.png?f=webp&w=256" alt="addbook" />
                </Link>
                <Link to="/removebook" className="card">
                    <p><strong>Remove Books</strong></p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/remove-book-10698997-8587125.png?f=webp&w=256" alt="" />
                </Link>
                <Link to="/updatebook" className="card">
                    <p><strong>Update Books</strong></p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/update-book-8757103-7084878.png?f=webp&w=256" alt="" />
                </Link>
                <Link to="/approvr-reject" className="card">
                    <p><strong>Request Approve/Reject</strong></p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/request-3310968-2767093.png?f=webp&w=256" alt="" />
                </Link>
                <Link to="/list-request" className="card">
                    <p><strong>List Issue Requests</strong></p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/task-request-3584768-2993314.png?f=webp&w=256" alt="" />
                </Link>
                <Link to="/qr" className="card">
                    <p><strong>QR for Book Details</strong></p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/qr-14-315767.png?f=webp&w=256" alt="" />
                </Link>
            </div>
        </div>
    );
}

export default AdminHome;
