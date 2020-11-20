import {Col, Row} from "antd";
import Map from '../../Globals/Map';

const Contact = () => {
  return (
    <div className="Contact">
      <Row className="content pt-100 pb-100">
        <Col md={{ span: 24 }} xl={{ span: 12 }}>
          <h1 className="text-center">OFİSİMİZ</h1>
          <p className="text-lg text-center mb-60">Bizi İzmir' deki ofisimizde ziyaret edin</p>
          <Row className="full-width" justify="center">
            <Col className="ContactCard" md={{ span: 24 }} lg={{ span: 11 }}>
              <div className="icon-container" style={{minWidth: 60, padding: 10}}>
                <i className="fas fa-map-marker icon"/>
              </div>
              <div>
                <p className="text-xxxl l-1">Lokasyon</p>
                <p className="text-lg l-1-3">İzmir Teknopark</p>
              </div>
            </Col>
            <Col className="ContactCard" md={{ span: 24 }} lg={{ span: 11 }}>
              <div className="icon-container" style={{minWidth: 60, padding: 10}}>
                <i className="fas fa-tachometer-alt icon"/>
              </div>
              <div>
                <p className="text-xxxl l-1">Çalışma Saatleri</p>
                <p className="text-lg l-1-3 mb-5">Pzt-Cmt 07.00-17.00</p>
                <p className="text-lg l-1-3">Pzr 09.00-15.00</p>
              </div>
            </Col>
            <Col className="ContactCard" md={{ span: 24 }} lg={{ span: 11 }}>
              <div className="icon-container" style={{minWidth: 60, padding: 10}}>
                <i className="fas fa-phone-alt icon"/>
              </div>
              <div>
                <p className="text-xxxl l-1">Ofis Telefonu</p>
                <p className="text-lg l-1-3">+90 546 200 56 21</p>
              </div>
            </Col>
            <Col className="ContactCard" md={{ span: 24 }} lg={{ span: 11 }}>
              <div className="icon-container" style={{minWidth: 60, padding: 10}}>
                <i className="fas fa-envelope-open icon"/>
              </div>
              <div>
                <p className="text-xxxl l-1">Email</p>
                <p className="text-lg l-1-3">berkesaricam@icloud.com</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="MapContainer pl-60" md={{ offset: 0, span: 24 }} lg={{ span: 12 }}>
          <Map />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;