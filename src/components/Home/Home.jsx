import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="image">
            <img src="../../assets/home-img.svg" alt="home-img.svg" />
        </div>
        <div className="content">
            <h3>stay safe, stay healthy</h3>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Sed Autem Vero? Magnam, Est Laboriosam!</p>
            <a href="#" className="btn">contact us <span className="fas fa-chevron-right"></span> </a>
        </div>
    </section>
  )
}

export default Home
