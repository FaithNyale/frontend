import { Navbar } from './components/Navbar';
import { Leftbar } from './components/Leftbar';
import { Container } from './components/Container';
import './App.css';
import { Footer } from './components/footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
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
