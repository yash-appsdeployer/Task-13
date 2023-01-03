import React from 'react'
import '../Service/Service.css'

const Service = () => {
    return (
        <>
            <section id="Service">
                <div className='container services'>
                    <div className="services-heading text-center mt-3 ">
                        <h3 className='pb-3' style={{ "borderBottom": "1px solid #F0CF97" }}>Our Services</h3>
                    </div>

                    <div className='services-data '>
                        <p className='services-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus deserunt molestias voluptas cum maiores eos quidem doloremque iusto ad aliquid numquam odit qui rem neque laborum dicta iure error totam, incidunt quibusdam Illo?
                        </p>
                    </div>

                    <div className="d-flex flex-wrap justify-content-evenly mt-5">
                        <div>
                            <div className="services-logo">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="services-box">
                                <h3 >Concept Design</h3>
                                <p className="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
                            </div>
                        </div>

                        <div>
                            <div className="services-logo">
                                <i className="fa-solid fa-flag"></i>
                            </div>
                            <div className="services-box">
                                <h3>Luxuriour Interior</h3>
                                <p className="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
                            </div>
                        </div>

                        <div>
                            <div className="services-logo">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div className="services-box">
                                <h3 >Wow Living Room</h3>
                                <p className="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-wrap justify-content-evenly">
                        <div>
                            <div className="services-logo">
                                <i className="fa-solid fa-cookie-bite"></i>
                            </div>

                            <div className="services-box">
                                <h3 >Amaze Kitchen</h3>
                                <p className="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
                            </div>
                        </div>


                        <div>
                            <div className="services-logo">
                                <i className="fa-solid fa-cloud"></i>
                            </div>

                            <div className="services-box">
                                <h3>Beauty colors</h3>
                                <p className="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
                            </div>
                        </div>

                        <div>
                            <div className="services-logo">
                                <i className="fa-solid fa-bed"></i>
                            </div>
                            <div className="services-box">
                                <h3>Cool Bedroom</h3>
                                <p className="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service