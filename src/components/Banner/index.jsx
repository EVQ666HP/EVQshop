import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <p className="banner-left__p">New collection</p>
        <img
          className="banner-left__img"
          src="https://tres-bien.com/media/wysiwyg/blog/2302/2023-02-15_nike_stussy.jpg"
          alt=""
        />
        <div className="banner-left__overlay">
          <Link to="New-collection" className="custom-link">
            <div className="show-more">Show more</div>
          </Link>
        </div>
      </div>

      <div className="banner-right flex-column ">
        <div className="banner-top flex-column ">
          <h1>REAL DESIGNS BY REAL ARTISTS FOR REAL PEOPLE</h1>
          <img className="border-text" src="https://i.imgur.com/M325DAQ.png" alt="erorr" />
          <p>
            We're cgallenging conventional retail, putting an end to dead stock, unconventional
            waste and more funtastic
          </p>
        </div>
        <div className="banner-bottom">
          <div className="banner-bottom__left">
            <p className="banner-bottom__leftP">Final sale</p>
            <img
              className="banner-bottom__leftIMG"
              src="https://tres-bien.com/media/wysiwyg/start/2308/s_230811_prada.jpg"
              alt=""
            />
            <div className="banner-bottom__overlay">
              <Link to="Final-sale" className="custom-link">
                <div className="show-more">Show more</div>
              </Link>
            </div>
          </div>
          <div className="banner-bottom__right">
            <p className=" banner-bottom__rightP">NIKE AIR</p>
            <img
              className="banner-bottom__rightIMG"
              src="https://tres-bien.com/media/catalog/product/cache/92c32ae85341dabe805aa810fb1f52cd/f/o/footwear_230810_026.jpg"
              alt=""
            />
            <div className="banner-bottom__overlayR">
              <div className="show-more">Show more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
