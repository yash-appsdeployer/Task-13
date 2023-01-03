import React from 'react'
import './Contact.css'
import contact from '../Assets/contact.jpg'

const Contact = () => {
    return (
        <div>
            <section id="Contact">
                <div className='contact container-fluid mt-5 pb-5 pt-4'>
                    <div>
                        <h3 className='contact-heading text-center pb-3' >Contact Us</h3>
                    </div>

                    <div class="row">
                        <div class="col mb-5">
                            <div className='image-container mt-5'>
                                <img className='contact-image object-fit-cover border rounded' src={contact} alt='aboutImage' />
                            </div>
                        </div>
                        <div class="col pb-3">
                            <div className='input-form mt-2'>
                                <div className="input-name">
                                    <input type="text" placeholder='Enter Your Name'  />
                                </div>
                                <div className="input-name">
                                    <input type="email" placeholder='Enter Your Email Adress'  />
                                </div>
                                <div className="input-name">
                                    <input type="textarea" placeholder='Convey your Message'  />
                                </div>

                                <div className="input-name mt-4">
                                    <button className='btn btn-submit'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact