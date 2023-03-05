import Slider from 'react-slick';
import SliderItem from '../SliderItem/SliderItem';
import sliderImg1 from '../../images/slider-1.png';
import sliderImg2 from '../../images/slider-2.png';
import sliderImg3 from '../../images/slider-3.png';
import sliderImg4 from '../../images/slider-4.png';
import Arrow from './Arrow';

export default function Silder() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow />,
    swipeToSlide: true,
    speed: 500,
  };
  return (
    <section className="slider">
      <Slider {...settings}>
        <SliderItem tourImg={sliderImg1} tourName="ТРИ РЕКИ + МОРЕ" tourSelector="first-slide" />
        <SliderItem tourImg={sliderImg2} tourName="НЕДЕЛЯ НА МАЛЬДИВАХ" tourSelector="second-slide" />
        <SliderItem tourImg={sliderImg3} tourName="ШВЕДСКИЕ ПРОСТОРЫ" tourSelector="third-slide" />
        <SliderItem tourImg={sliderImg4} tourName="Захватывающие фьерды" tourSelector="fourth-slide" />
      </Slider>
    </section>
  );
}
