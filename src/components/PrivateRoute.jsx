import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";

// PrivateRoute bileşeni, sadece token varsa çocuk bileşene izin verir
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // localStorage'dan token'ı alıyoruz

    if (!token) {
        // Eğer token yoksa, login sayfasına yönlendiriyoruz
        return <Navigate to="/" />;
    }

    return children; // Eğer token varsa, istenen bileşeni render ediyoruz
};

// prop-types ile children'ı doğruluyoruz
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, // children bir React node (bileşen ya da içerik) olmalı
};

export default PrivateRoute;
