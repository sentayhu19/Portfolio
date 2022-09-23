import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Blog from './components/Blog/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Resume />
      <Blog />
    </div>
  );
}

export default App;
