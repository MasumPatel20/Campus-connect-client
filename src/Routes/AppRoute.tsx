import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';

const AppRoute = () => {
    return(
        <Router>
            <Routes>
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoute;