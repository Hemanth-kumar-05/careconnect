import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
        <h1 className="heading"><span>about</span> us</h1>
        <div className="row">
            <div className="image">
                <img src="../../assets/about-img.svg" alt=""/>
            </div>
            <div className="content">
                <h3>we take care of your healthy life</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Iure Ducimus, Quod Ex Cupiditate Ullam In Assumenda Maiores Et Culpa Odit Tempora Ipsam Qui, Quisquam Quis Facere Iste Fuga, Minus Nesciunt.</p>
                <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Natus Vero Ipsam Laborum Porro Voluptates Voluptatibus A Nihil Temporibus Deserunt Vel?</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>
    </section>
  )
}

export default About
