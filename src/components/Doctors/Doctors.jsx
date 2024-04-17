import React from 'react'
import './Doctors.css'

const Doctors = () => {
  return (
    <section className="doctors" id="doctors">
        <h1  className="heading">our <span>doctors</span></h1>
        <div className="box-container">
            <div className="box">
                <img src="../../assets/doc-1.jpg" alt="" />
                <h3>Dr. john deo</h3>
                <span>expert doctor</span>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="box">
                <img src="../../assets/doc-2.jpg" alt="" />
                <h3>Dr. Pullen</h3>
                <span>expert doctor</span>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="box">
                <img src="../../assets/doc-3.jpg" alt="" />
                <h3> Dr. Swallow</h3>
                <span>expert doctor</span>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="box">
                <img src="../../assets/doc-4.jpg" alt="" />
                <h3>Dr. Mangle</h3>
                <span>expert doctor</span>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="box">
                <img src="../../assets/doc-5.jpg" alt="" />
                <h3>Dr. Fillmore</h3>
                <span>expert doctor</span>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="box">
                <img src="../../assets/doc-6.jpg" alt="" />
                <h3>Dr. Watamaniuk</h3>
                <span>expert doctor</span>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Doctors
