import React from 'react';
import {Fragment} from 'react';
import './Features.css';
import dollar from './../../Assets/dollar.png';
import search from './../../Assets/search.png';
import star from './../../Assets/star.png';

export default function Features () {
  return (
    <Fragment>
      <div className="features container-fluid text-center">
        <h1>Features</h1>
        <span>Trusted Doctors, Top Hospitals, Hassles Taken Care</span>

        <div className="container-lg">

          <div
            className="row align-items-center justify-content-center"
            id="blogs-div"
          >
            {/* card-1 */}
            <div className="col-8 my-5 col-lg-3 shadow cardBox">
              <div className="card border-0">
                <img
                  className="card-img-top img-fluid"
                  src={dollar}
                  alt="search"
                />
                <div className="card-body text-start">

                  <h5 className="card-title">
                    Compare Cost,
                    Get Exclusive Packages
                  </h5>
                  <p className="card-text">
                    Treatments sorted by cost. Currency conversion also available!
                  </p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="col-8 my-5 col-lg-3 shadow cardBox">
              <div className="card border-0">
                <img className="card-img-top" src={search} alt="dollar" />
                <div className="card-body text-start">

                  <h4 className="card-title">
                    Help in Hospitalisation;

                  </h4>
                  <p className="card-text">
                    Search for hospitals based on your medical treatment, budget, medical packages, location and all your other needs!
                  </p>
                </div>
              </div>
            </div>

            {/* card-3 */}
            <div className="col-8 my-5 col-lg-3 shadow cardBox">
              <div className="card border-0">
                <img className="card-img-top" src={star} alt="star" />
                <div className="card-body text-start">
                  <h4 className="card-title">
                    Choose the best
                  </h4>
                  <p className="card-text">
                    See hundreds of genuine reviews and ratings and make the correct choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}
