import { productSection7 } from "../../../utils/constant/DataSection7";
import Slider from "react-slick";
import Card from "../../atoms/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section7 = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="section__7">
      <div className="section__7-gallery-slider">
        <div className="section__7-container-col">
          <h3 className="section__7-gallery-slider__tittle">
            Flash Pre Order | Arrives in 2-5 Weeks
          </h3>
          <div className="section__7-gallery-slider__more">
            <a className="" href="wishlist.html">
              Lihat Semua
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 24.912 17.517"
              >
                <defs></defs>
                <path
                  id="right-arrow"
                  d="M16.775 4.937A.883.883 0 1 0 15.52 6.18l6.366 6.366H.879a.875.875 0 0 0-.879.88.884.884 0 0 0 .879.892h21.007l-6.366 6.354a.9.9 0 0 0 0 1.255.88.88 0 0 0 1.255 0l7.873-7.873a.865.865 0 0 0 0-1.243z"
                  className="cls-1"
                  transform="translate(0 -4.674)"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="section__7-gallery-slider__content">
          <Slider className="section__7-container-card" {...settings}>
            {productSection7.map((product) => (
              <Card
                key={product.id}
                img={product.img}
                title={product.title}
                titleDate={product.titleDate}
                reviews={product.reviews}
                prevPrice={product.prevPrice}
                newPrice={product.newPrice}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Section7;
