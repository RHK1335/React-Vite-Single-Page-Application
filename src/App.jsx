import { Route, Routes } from 'react-router-dom';  // React Router'dan Route ve Routes'u import ediyoruz
import Login from './components/Login';  // Login component'ini import ediyoruz
import Dashboard from './components/Dashboard';
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./components/Profile.jsx";
import Settings from "./components/Settings.jsx";
import Register from "./components/Register.jsx";  // Dashboard component'ini import ediyoruz

const App = () => {
    return (
        <div>
            <Routes>
                {/* Anasayfa route'u */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> {/* Yeni rota */}
                {/* PrivateRoute bileşenini children olarak kullanıyoruz */}
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            </Routes>
        </div>
    );
};

export default App;
