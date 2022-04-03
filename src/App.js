import './App.css';
import ExploreSection from './components/ExploreSection';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ExploreSection />
      </div>
    </div>
  );
}

export default App;
