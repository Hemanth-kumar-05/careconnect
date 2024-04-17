import React from 'react'
import './index.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { Link } from 'react-router-dom'


const ServicesPage = () => {
    return (
        <>
            <Header />
            <section className="services-page" id="services-page">
                <h1 className="heading">our <span>services</span></h1>
                <div className="services-list">
                    <section className="service">
                        <i className="fas fa-notes-medical"></i>
                        <div className="service-desc">
                            <h3>free checkups</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit aperiam, ratione voluptas velit esse cum dignissimos at ducimus incidunt illum, amet, enim ut quod repellat unde minima pariatur odit.
                            Libero molestiae id excepturi rerum reiciendis quam minima soluta aspernatur ut. Ut a voluptatem ipsum repellendus atque inventore sit? Praesentium consectetur asperiores fugiat nesciunt ipsum. Incidunt atque similique consequuntur nostrum?
                            Dolorem ducimus modi, est quasi omnis eius magnam. Dolorum ad, placeat quisquam nemo distinctio, in et cum quos eligendi laborum fugit, dolor perferendis quas eius. A, eius? Eius, libero saepe.</p>
                        </div>
                        {/* <Link to="/services#" className="btn">learn more <span className="fas fa-chevron-right"></span> </Link> */}
                    </section>
                    <section className="service">
                        <i className="fas fa-ambulance"></i>
                        <div className="service-desc">
                            <h3>24/7 ambulance</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit aperiam, ratione voluptas velit esse cum dignissimos at ducimus incidunt illum, amet, enim ut quod repellat unde minima pariatur odit.
                            Libero molestiae id excepturi rerum reiciendis quam minima soluta aspernatur ut. Ut a voluptatem ipsum repellendus atque inventore sit? Praesentium consectetur asperiores fugiat nesciunt ipsum. Incidunt atque similique consequuntur nostrum?
                            Dolorem ducimus modi, est quasi omnis eius magnam. Dolorum ad, placeat quisquam nemo distinctio, in et cum quos eligendi laborum fugit, dolor perferendis quas eius. A, eius? Eius, libero saepe.</p>
                        </div>
                    </section>
                    <section className="service">
                        <i className="fas fa-user-md"></i>
                        <div className="service-desc">
                            <h3>expert doctors</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit aperiam, ratione voluptas velit esse cum dignissimos at ducimus incidunt illum, amet, enim ut quod repellat unde minima pariatur odit.
                            Libero molestiae id excepturi rerum reiciendis quam minima soluta aspernatur ut. Ut a voluptatem ipsum repellendus atque inventore sit? Praesentium consectetur asperiores fugiat nesciunt ipsum. Incidunt atque similique consequuntur nostrum?
                            Dolorem ducimus modi, est quasi omnis eius magnam. Dolorum ad, placeat quisquam nemo distinctio, in et cum quos eligendi laborum fugit, dolor perferendis quas eius. A, eius? Eius, libero saepe.</p>
                        </div>
                    </section>
                    <section className="service">
                        <i className="fas fa-pills"></i>
                        <div className="service-desc">
                            <h3>medicines</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit aperiam, ratione voluptas velit esse cum dignissimos at ducimus incidunt illum, amet, enim ut quod repellat unde minima pariatur odit.
                            Libero molestiae id excepturi rerum reiciendis quam minima soluta aspernatur ut. Ut a voluptatem ipsum repellendus atque inventore sit? Praesentium consectetur asperiores fugiat nesciunt ipsum. Incidunt atque similique consequuntur nostrum?
                            Dolorem ducimus modi, est quasi omnis eius magnam. Dolorum ad, placeat quisquam nemo distinctio, in et cum quos eligendi laborum fugit, dolor perferendis quas eius. A, eius? Eius, libero saepe.</p>
                        </div>
                    </section>
                    <section className="service">
                        <i className="fas fa-procedures"></i>
                        <div className="service-desc">
                            <h3>bed facility</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit aperiam, ratione voluptas velit esse cum dignissimos at ducimus incidunt illum, amet, enim ut quod repellat unde minima pariatur odit.
                            Libero molestiae id excepturi rerum reiciendis quam minima soluta aspernatur ut. Ut a voluptatem ipsum repellendus atque inventore sit? Praesentium consectetur asperiores fugiat nesciunt ipsum. Incidunt atque similique consequuntur nostrum?
                            Dolorem ducimus modi, est quasi omnis eius magnam. Dolorum ad, placeat quisquam nemo distinctio, in et cum quos eligendi laborum fugit, dolor perferendis quas eius. A, eius? Eius, libero saepe.</p>
                        </div>
                    </section>
                    <section className="service">
                        <i className="fas fa-heartbeat"></i>
                        <div className="service-desc">
                            <h3>total care</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit aperiam, ratione voluptas velit esse cum dignissimos at ducimus incidunt illum, amet, enim ut quod repellat unde minima pariatur odit.
                            Libero molestiae id excepturi rerum reiciendis quam minima soluta aspernatur ut. Ut a voluptatem ipsum repellendus atque inventore sit? Praesentium consectetur asperiores fugiat nesciunt ipsum. Incidunt atque similique consequuntur nostrum?
                            Dolorem ducimus modi, est quasi omnis eius magnam. Dolorum ad, placeat quisquam nemo distinctio, in et cum quos eligendi laborum fugit, dolor perferendis quas eius. A, eius? Eius, libero saepe.</p>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ServicesPage
