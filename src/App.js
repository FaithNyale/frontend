import { Navbar } from './components/Navbar';
import { Leftbar } from './components/Leftbar';
import { Container } from './components/Container';
import './App.css';
import { Footer } from './components/footer';
import { CustomerContext } from './components/CustomerContext';
import { useState } from 'react';



function App({setResponse}) {
  const [Customer, useCustomer] = useState("Nazi");
  return (
    <div className="App">
      <Navbar data = { setResponse }/>
      <h1>Customer Feedback</h1>
      <div className='container-body'>
        <Leftbar/>
        <Container/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
