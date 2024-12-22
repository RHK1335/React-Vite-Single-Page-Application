import { useState } from 'react';
import axiosInstance from '../axios';  // Axios yapılandırmasını import ediyoruz
import './Login.css';
import {useNavigate} from "react-router-dom"; // CSS dosyasını import ediyoruz

const Login = () => {
    const [username, setUsername] = useState('');  // Kullanıcı adı state'i
    const [password, setPassword] = useState('');  // Şifre state'i
    const [error, setError] = useState('');  // Hata mesajları state'i
    const navigate = useNavigate(); // Sayfa yönlendirmeleri için useNavigate hook'u

    // Form submit işlemi
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Backend API'sine POST isteği gönderiyoruz
            const response = await axiosInstance.post('/login', {
                username,
                password
            });

            // API'den dönen token'ı alıyoruz
            const token = response.data.token;

            // Token'ı localStorage'a kaydediyoruz
            localStorage.setItem('token', token);

            // Başarılı giriş sonrası kullanıcıyı başka bir sayfaya yönlendiriyoruz
            window.location.href = '/dashboard';  // Yönlendirme işlemi
        } catch (err) {
            // Eğer giriş başarısız olursa hata mesajı gösteriyoruz
            setError('Giriş başarısız! Lütfen tekrar deneyin.' + err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}  // Kullanıcı adını state'e set etme
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}  // Şifreyi state'e set etme
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <br/>
                <button className="btn secondary" onClick={() => {
                    navigate('/register')
                }}>Yeni kullanıcı oluştur
                </button>
                {error && <p className="error-message">{error}</p>} {/* Hata mesajını gösterme */}0
            </div>
        </div>
    );
};

export default Login;
