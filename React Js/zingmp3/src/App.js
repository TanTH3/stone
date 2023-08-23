import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <div style={{ margin: '125px 0 0 0' }}>
                    <Routes>
                        {publicRoutes.map((route, i) => {
                            const Page = route.component;
                            return <Route key={i} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
