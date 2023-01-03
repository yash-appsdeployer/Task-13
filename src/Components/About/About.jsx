import React from 'react'
import './About.css'
import about from '../Assets/about.jpg'

const About = () => {
    return (
        <div>
            <section id="About">
                <div className='about container-fluid mt-2'>
                    <div>
                        <h3 className='about-heading text-center pb-3' >About Us</h3>
                    </div>
                    <div>
                        <p className='about-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus deserunt molestias voluptas cum maiores eos quidem doloremque iusto ad aliquid numquam odit qui rem neque laborum dicta iure error totam, incidunt quibusdam Illo?
                        </p>
                    </div>

                    <div class="row">
                        <div class="col mb-5">
                            <div className='image-container mt-5'>
                                <img className='about-image object-fit-cover border rounded' src={about} alt='aboutImage' />
                            </div>
                        </div>
                        <div class="col pb-5">
                            <div>
                                <h3 className="about-message ">Our Little Company</h3>
                                <p className="about-para ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae voluptas voluptatibus labore sequi, ipsam molestias inventore animi tempora maxime iure, cum sint ex distinctio repudiandae doloribus placeat obcaecati error, quidem accusamus asperiores! Officia et est odit dolores cumque laudantium libero. Assumenda sed, ullam</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" about-two text-center pt-5 pb-5">
                    <div className="aboutTwo-header">
                        <p className="about-first">We Design your Awesome dreams</p>
                        <p className="about-second">Lorem ipsum dolor sit amet, consectetur </p>
                        <p className="about-third ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi pariatur placeat quisquam quas eos porro perspiciatis quaerat voluptatem natus?</p>
                    </div>

                    <div className="mt-4">
                                    <button className='btn about-btn'>Get it Now!!</button>
                                </div>
                </div>
            </section>
        </div>
    )
}

export default About