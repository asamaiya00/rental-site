import './App.css';
import ExploreSection from './components/ExploreSection';
import AboutUsSection from './components/AboutUsSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ExploreSection />
        <AboutUsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
