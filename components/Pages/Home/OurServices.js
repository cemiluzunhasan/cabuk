import { Col, Row } from "antd";

const OurServices = () => {
  return (
    <div className="d-flex fd-column a-center pt-100 pb-100" style={{ position: 'relative' }}>
      <div className="content">
        <img className="ServicesImage" src="/img/services.png" style={{ position: 'absolute', zIndex: -1, top: 0, width: 1300, right: 0 }} />
        <h1 className="text-center">Hizmetlerimiz</h1>
        <p className="text-center">Kargo sistemine yeni bir bakış açısı</p>
        <Row className="mt-50" justify="center">
          <Col md={{ span: 24 }} lg={{ span: 9 }} className="ContentCard d-flex">
            <div className="icon-container" style={{ minWidth: 60, padding: 10 }}>
              <img width={20} height={20} src="/icons/Simge_1.svg" />
            </div>
            <div>
              <p className="text-xxxl l-1">Hızlı Teslimat</p>
              <p className="text-lg l-1-3">Gün içinde sürekli çalışmakta olan araç ağıyla teslimatınızı aynı günde ulaşıyoruz.</p>
            </div>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 9 }} className="ContentCard d-flex">
            <div className="icon-container" style={{ minWidth: 60, padding: 10 }}>
              <img width={20} height={20} src="/icons/Simge_3.svg" />
            </div>
            <div>
              <p className="text-xxxl l-1">Çevreci Çözüm</p>
              <p className="text-lg l-1-3 w-250">Teslimat sürecinde araç sayısını minimuma indiriyor, günümüze ve geleceğimize sahip çıkıyoruz.</p>
            </div>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 9 }} className="ContentCard d-flex">
            <div className="icon-container" style={{ minWidth: 60, padding: 10 }}>
              <img width={20} height={20} src="/icons/Simge_2.svg" />
            </div>
            <div>
              <p className="text-xxxl l-1">Kurye Hizmeti</p>
              <p className="text-lg l-1-3">Dilerseniz teslimatınız güvenli bir şekilde teslim noktalarımızdan adresinize taşınıyor.</p>
            </div>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 9 }} className="ContentCard d-flex">
            <div className="icon-container" style={{ minWidth: 60, padding: 10 }}>
              <img width={20} height={20} src="/icons/Simge_4.svg" />
            </div>
            <div>
              <p className="text-xxxl l-1">Şeffaf Teslimat Süreci</p>
              <p className="text-lg l-1-3 w-250">Kargonuzun teslim sürecini dilediğiniz zaman takip edebilme imkanı sağlıyoruz.</p>
            </div>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 9 }} className="ContentCard d-flex">
            <div className="icon-container" style={{ minWidth: 60, padding: 10 }}>
              <img width={20} height={20} src="/icons/Simge_5.svg" />
            </div>
            <div>
              <p className="text-xxxl l-1">Güvenli Teslimat</p>
              <p className="text-lg l-1-3">Teslimatlarınızda güvenlik prosedürüne önem veriyoruz.</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurServices;