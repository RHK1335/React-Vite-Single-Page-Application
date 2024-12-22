import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../axios.js";
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');  // Hata mesajları state'i


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/user/create', {
                username,
                email,
                password,
            });

            if (response.data) {
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            setError(error.response.data.message);
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Yeni Kullanıcı Oluştur</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>
                    <button type="submit" className="btn">Kayıt Ol</button>
                    <button className="btn secondary" onClick={() => {
                        navigate('/')
                    }}>Giriş Yap
                    </button>
                </form>
                <br/>
                {error && <p className="error-message">{error}</p>} {/* Hata mesajını gösterme */}
            </div>
        </div>
    );
};

export default Register;
