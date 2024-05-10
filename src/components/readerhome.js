import React from 'react';
import { useHistory } from 'react-router-dom';

function ReaderHome() {
    const history = useHistory();

    const openNextFile = (fileName) => {
        history.push(fileName);
    };

    return (
        <div>
            <div className="header">
                <h1><b>My Library</b></h1><br /><br /><br />
                <h1>When in doubt go to the library.</h1>
                <p>Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life.</p>
            </div>
            <div className="row1-container">
                <div className="box box-down cyan" onClick={() => openNextFile('search')}>
                    <h2>Search Book</h2>
                    <p>Search if the book is available or not.</p>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>
                <div className="box red" onClick={() => openNextFile('raiseissue')}>
                    <h2>Issue Book Request</h2>
                    <p>Raise the request to issue the book.</p>
                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>
                <div className="box box-down blue" onClick={() => openNextFile('qr')}>
                    <h2>Book Details using QRs</h2>
                    <p>Enter ISBN Number of the book and get book details by scanning QR.</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ReaderHome;
