import React from 'react';
import {Fragment} from 'react';
import Home from '../../Components/Home/Home';
import Features from '../../Components/Features/Features';
import Carousel from '../../Components/Carousel/Carousel';
import Packages from '../../Components/Packages/Packages';

function Landing () {
  return (
    <Fragment>
      <Home />
      <Features />
      <Carousel />
      <Packages />
    </Fragment>
  );
}

export default Landing;
