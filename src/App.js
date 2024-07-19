import { Navbar } from './components/Navbar';
import { Leftbar } from './components/Leftbar';
import { Container } from './components/Container';
import './App.css';
import { Footer } from './components/footer';
import { CustomerContext, FeedBackContext } from './components/CustomerContext';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FeedBack } from './components/Feedback';
import { Home } from './components/Home';
import { Complaints } from './components/Complaints';
import { Compliments } from './components/Compliments';



function App() {
  const [ response, setResponse ] = useState(true);
    const [professionalism, setProfessionalism] = useState(false);
    const [serviceQuality, setServiceQuality] = useState(false);
    const [satisfaction, setSatisfaction] = useState(false);
    const [comentsAndSuggestion, setComentsAndSuggestion] = useState(false);
  return (
    <FeedBackContext.Provider value={{
      response,
      setResponse,
      professionalism,
      setProfessionalism,
      serviceQuality,
      setServiceQuality,
      satisfaction,
      setSatisfaction,
      comentsAndSuggestion,
      setComentsAndSuggestion,
    
    }}>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/complaint" element={<Complaints />} />
          <Route path="/compliments" element={<Compliments />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </FeedBackContext.Provider>
  );
}

export default App;
