import Navbar from './components/NavbarMain'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HomeSearch from './components/HomeSearch'
import ProductsPreview from './components/ProductsPreview'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HomeSearch />
      <ProductsPreview />
      <Footer />
    </div>
  );
}

export default App;
