import './App.css';
import ExploreSection from './components/ExploreSection';
import AboutUsSection from './components/AboutUsSection';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ExploreSection />
        <AboutUsSection />
      </div>
    </div>
  );
}

export default App;
