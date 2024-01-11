import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutMe, Contact, Footer, Navbar, Portfolio, Resume } from './components';

function App() {
    return (
        <div className="container my-5 bg-dark border border-5" style={{ borderRadius: 40 }}>
            <div className='container'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>

        </div>
    );
}

export default App;
