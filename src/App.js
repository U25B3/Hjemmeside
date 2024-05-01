import logo from './logo.svg';
import Header from './components/Header/header.js';
import Splash from './components/Splash/splash.js';
import Footer from './components/Footer/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <Footer />
    </div>
  );
}

export default App;
