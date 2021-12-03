import NavbarMain from './components/shared/NavbarMain'
import Footer from './components/shared/Footer'
import Hero from './components/home/Hero'
import HomeSearch from './components/home/HomeSearch'
import ProductsPreview from './components/home/ProductsPreview'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavbarMain 
      navSelected='home'
      />
      <Hero />
      <HomeSearch />
      <ProductsPreview />
      <Footer />
    </div>
  );
}

export default App;
