import { Link } from 'react-router-dom';
import '../style/styles.css';
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>My App</h2>
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/" onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('username');
                        localStorage.removeItem('email');
                    }}>Logout</Link></li>
                </ul>
            </aside>
            <main className="content">
                <header className="header">
                    <div className="user-info">
                        <span>Welcome, {username}!</span><br/>
                        <span>{email}</span>
                    </div>
                </header>
                <div className="main-content">
                    {children}
                </div>
            </main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired, // children bir React node (bileşen ya da içerik) olmalı
};

export default Layout;