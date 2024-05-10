import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import LoginForm from './components/Login';
import Home from './components/Home';
import AdminHome from './components/admin_home';
import ReaderHome from './components/readerhome';
import Admin from './components/Admin'
function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container mt-3">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/admin_home" component={AdminHome} />
                        <Route path="/reader_home" component={ReaderHome} />
                        <Route path="/admin" component={Admin} />
                        {/* Add other routes for About, Admin, and Login */}
                        {/* <Route path="/about" component={About} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/login" component={Login} /> */}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
