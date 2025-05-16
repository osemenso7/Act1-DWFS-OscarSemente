import { Routes, Route } from 'react-router-dom';
import { GlobalProvider} from './context/GlobalContext';

import Header from './Components/Header.jsx';
import BookSelector from './Views/BookSelector.jsx';
import BookDetail from './Views/BookDetail.jsx';
import Transaction from './Views/Transaction.jsx';
import Footer from "./Components/Footer.jsx";
import useTimer from "./Hooks/UseTimer.jsx";

function AppContent() {
    const { loading } = useTimer(1000);

    return (
        <div className="App">
            <Header/>
            {(loading) ? (
                <main className="waitTimer">
                    <div className="waitTimer__spinner spinner-border text-warning"></div>
                    <p className="waitTimer__text">Cargando...</p>
                </main>
            ) : (
                <Routes>
                    <Route path="/" element={<BookSelector/>}/>
                    <Route path="/:bookId" element={<BookDetail/>}/>
                    <Route path="/transaction" element={<Transaction/>}/>
                </Routes>
            )}
            <Footer/>
        </div>
    );
}

function App() {
    return (
        <GlobalProvider>
            <AppContent />
        </GlobalProvider>
    );
}

export default App
