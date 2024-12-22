import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router'dan useNavigate hook'u
import axiosInstance from "../axios.js"; // API çağrıları için axios kullanıyoruz
import './Dashboard.css';
import Layout from "./Layout.jsx"; // CSS dosyasını import ediyoruz

const Dashboard = () => {
    const [userData, setUserData] = useState(null); // Kullanıcı verisini tutacak state
    const navigate = useNavigate(); // Sayfa yönlendirmeleri için useNavigate hook'u

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosInstance.get('/user'); // Base URL ve token zaten axiosInstance'da tanımlı
                setUserData(response.data.data);
                localStorage.setItem('username', response.data.data.username);
                localStorage.setItem('email', response.data.data.email);
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/'); // Hata durumunda login sayfasına yönlendir
            }
        };

        fetchUserData();
    }, [navigate]);

    return (
        <Layout>
            {userData ? (
                <div className="dashboard-content">
                    <h1>Welcome, {userData.username}!</h1>
                    <p>Email: {userData.email}</p>
                    <button className="logout-button" onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('username');
                        localStorage.removeItem('email');
                        navigate('/login');
                    }}>
                        Logout
                    </button>
                </div>
            ) : (
                <p className="loading-text">Loading...</p>
            )}
        </Layout>
    );
};

export default Dashboard;