import React from 'react'
import './Portfolio.css'
import client1 from '../Assets/client1.jpg'
import client2 from '../Assets/client2.jpg'
import client3 from '../Assets/client3.jpg'
import gallery1 from '../Assets/gallery1.jpg'
import gallery2 from '../Assets/gallery2.jpg'
import gallery3 from '../Assets/gallery3.jpg'
import gallery4 from '../Assets/gallery4.jpg'
import gallery5 from '../Assets/gallery5.jpg'
import gallery6 from '../Assets/gallery6.jpg'
import gallery7 from '../Assets/gallery7.jpg'
import gallery8 from '../Assets/gallery8.jpg'

const Portfolio = () => {
    return (
        <>
            <section id="Portfolio">

                <div className="portfolio container">
                    <div>
                        <h3 className='portfolio-heading-one text-center mt-5 pb-3' >Our Clients</h3>
                        <h4 className='portfolio-heading-two text-center mt-4'>What they say!!</h4>
                    </div>

                    <div class="d-flex flex-wrap justify-content-evenly mt-5">
                        <div >
                            <div class="card portfolio-card" >
                                <img  src={client1} class="card-img-top" alt="img1" />
                                <div class="card-body">
                                    <h5 class="card-title">Richie Rich</h5>
                                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, autem impedit dicta quae quos sequi.</p>
                                </div>
                            </div>
                        </div>

                        <div >
                            <div class="card portfolio-card" >
                                <img  src={client2}  class="card-img-top" alt="img1" />
                                <div class="card-body">
                                    <h5 class="card-title">Lady Gaga</h5>
                                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, autem impedit dicta quae quos sequi.</p>
                                </div>
                            </div>
                        </div>

                        <div >
                            <div class="card portfolio-card" >
                                <img src={client3} class="card-img-top" alt="img1" />
                                <div class="card-body">
                                    <h5 class="card-title">Dua Lipa</h5>
                                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, autem impedit dicta quae quos sequi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='gallery container mt-5'>
                    <div>
                        <h3 className='gallery-heading text-center pb-3' >Gallery</h3>
                    </div>

                    <div className="d-flex flex-col flex-wrap gallery-image mt-5">
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery1} alt="" />
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery2} alt="" />
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery3} alt="" />
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery4} alt="" />
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery5} alt="" />
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery6} alt="" />
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery7} alt="" />
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <img className='gallery-set object-fit-cover border rounded' src={gallery8} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio