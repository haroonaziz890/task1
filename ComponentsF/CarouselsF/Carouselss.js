import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="C:\Full Stack Web Development\Projects\bootstrap\haroon a\home\src\ComponentsF\CarouselsF\gquad.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>C:\Full Stack Web Development\Projects\bootstrap\haroon a\home\src\ComponentsF\CarouselsF\gquad.jpeg</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="home\src\ComponentsF\CarouselsF\download.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>C:\Full Stack Web Development\Projects\bootstrap\haroon a\home\src\ComponentsF\CarouselsF\gquad.jpeg</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="home\src\ComponentsF\CarouselsF\download.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>C:\Full Stack Web Development\Projects\bootstrap\haroon a\home\src\ComponentsF\CarouselsF\gquad.jpeg</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;