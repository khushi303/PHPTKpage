import './App.css';
import Header from './components/Header';
import Chicago from './components/Chicago';
import Conference from './components/Conference';
import About from './components/About';
import Footer from './components/Footer';
import Sponsor from './components/Sponsor';
import Gallary from './components/Gallary';

function App() {
  return (
    <div>
      <Header />
      <Chicago />
      <Conference />
      <Sponsor />
      <About />
      <Gallary />
      <Footer />
    </div>
  );
}

export default App;
