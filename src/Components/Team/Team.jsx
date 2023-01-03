import React from 'react'
import './Team.css';
import team1 from '../Assets/team1.jpg'
import team2 from '../Assets/team2.jpg'
import team3 from '../Assets/team3.jpg'
import team4 from '../Assets/team4.jpg'

const Team = () => {
  return (
    <div>
      <section id="Team">
        <div className='team container mt-5 mb-5'>
          <div>
            <h2 className='text-center pb-3' style={{ "borderBottom": "1px solid #ffac1d" }} >Our Team</h2>
          </div>

          <div className="row text-center mt-5">
            
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="team-member rounded py-5 px-4"><img src={team1} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Katy Perry</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>


            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="team-member rounded  py-5 px-4"><img src={team2} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Will Smith</h5><span className="small text-uppercase text-muted">Senior Manager</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="team-member  rounded py-5 px-4"><img src={team3} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Jason Statham</h5><span className="small text-uppercase text-muted">Assistant Manager</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>


            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="team-member  rounded py-5 px-4"><img src={team4} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Chris Evans</h5><span className="small text-uppercase text-muted">Junior Manager </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#Team" className="social-link"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Team