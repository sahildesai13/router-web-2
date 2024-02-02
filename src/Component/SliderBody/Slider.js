import { Container, Row, Col } from 'react-bootstrap';
import './Slider.css';
function Slider() {
    return (
        <div>
                    <video src={require(`./img/Particales.mp4`)} autoplay loop playsinline width={'100%'}></video>
            <Container fluid>
                <div className='SliderBody'>
                    <Row>
                        <Col lg>

                        </Col>
                        <Col lg></Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Slider;