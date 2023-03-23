import "pure-react-carousel/dist/index.cjs";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import classes from "./CustomSlider.module.css";

const CustomSlider = () => {
  return (
    <CarouselProvider
      // naturalSlideHeight={1000}
      // naturalSlideWidth={125}
      totalSlides={6}
      visibleSlides={3}
      step={1}
      className={classes.customSlider}
      isPlaying={true}
      infinite={true}
      interval={500}
    >
      <ButtonBack>Back</ButtonBack>
      <Slider className={classes.slider}>
        <Slide index={0}>
          <div>1</div>
        </Slide>
        <Slide index={1}>
          <div>2</div>
        </Slide>
        <Slide index={2}>
          <div>3</div>
        </Slide>
        <Slide index={3}>
          <div>4</div>
        </Slide>
        <Slide index={4}>
          <div>5</div>
        </Slide>
        <Slide index={5}>
          <div>6</div>
        </Slide>
      </Slider>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default CustomSlider;
