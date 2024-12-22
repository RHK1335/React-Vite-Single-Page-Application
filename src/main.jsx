import ReactDOM from 'react-dom/client';
import './index.css';  // CSS dosyasını import ediyoruz
import App from './App';  // App component'ini import ediyoruz
import { BrowserRouter as Router } from 'react-router-dom';  // React Router'ı import ediyoruz

// ReactDOM ile uygulamamızı render ediyoruz
ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
);
