import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDMkweuwwsep2OKN0KRYt35gKhcUBmmvBg',
    authDomain: 'stone-feb36.firebaseapp.com',
    projectId: 'stone-feb36',
    storageBucket: 'stone-feb36.appspot.com',
    messagingSenderId: '771349441838',
    appId: '1:771349441838:web:a646e38406a8011da5debf',
    measurementId: 'G-L8DEGCXWZ0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <Router>
            <div>
                <Header />
                <div>
                    <Routes>
                        {publicRoutes.map((route, i) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={i}
                                    path={route.path}
                                    element={<Page />}
                                />
                            );
                        })}
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
