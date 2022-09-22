import React from 'react';
import './Portfolio.css';
import Card from './Card';
import Portfolio_data from './portfolioData.js';

const Portfolio = () => (
  <>
    <section className="Portfolio top" id="portfolio">
      <div className="container">
        <div className="heading text-center ">
          <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
          <h1>My Portfolio</h1>
        </div>

        <div className="content grid">
          {Portfolio_data.map((value, index) => <Card key={index} image={value.image} category={value.category} tech={value.tech} title={value.title} />)}
        </div>
      </div>
    </section>
  </>
);

export default Portfolio;
