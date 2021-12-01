import Navbar from './components/NavbarMain'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HomeSearch from './components/HomeSearch'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HomeSearch />
      <Footer />
    </div>
  );
}

export default App;
