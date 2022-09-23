import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
