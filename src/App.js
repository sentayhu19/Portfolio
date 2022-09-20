import Article from './components/article/Article';
import Navbar from './components/navbar/Navbar';
import Feature from './components/feature/Feature';
import CTA from './components/cta/CTA';
import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';
import Header from './containers/herader/Header';
import Possiblity from './containers/possibility/Possiblity';
import WhatGPT3 from './containers/what GPT3/WhatGPT3';
import Brand  from './components/brand/Brand';
import './App.css';
function App() {
  return (
  <div className="App">
    <div className="gradient_bg">
      <Navbar />
      <Header />
    </div>
      <Brand/>
      <WhatGPT3 />
      <Features/>
      <CTA />
      <Possiblity />
      <Blog/>
      <Footer/>
    
    </div>
  );
}

export default App;
