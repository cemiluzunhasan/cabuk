import { Button, Col, Row, Card } from "antd";

const Service = () => {
  return (
    <div className="d-flex fd-column a-center pt-100 pb-100 bg-grey">
      <div className="content">
        <h1 className="text-center">HİZMETLERİMİZ</h1>
        <p className="text-center">Karayolu taşımacılığı ile çevreci teslimat çözümleri</p>
        <Row className="mt-50">
          <Col md={{ span: 24 }} lg={{ span: 8 }}>
            <Card className="full-width mb-30" cover={
              <img
                style={{ border: '1px solid #f0f0f0' }}
                alt="example"
                src="/img/service/1.png"
              />
            }>
              <Card.Meta
                title="Şehirlerarası Araçlarla Teslimat Servisleri"
                description="Şehirlerarası ulaşımı sağlayan mevcut yolcu otobüsleri ile kargo hizmetlerinde kullanılan araç sayısını azaltıyoruz. Bu sayede kargonuz karışık araç ağına takılmadan gün içinde size ulaşıyor, ayrıca karbon ayak izimizi minimum değerde tutuyoruz"
              />
            </Card>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 8 }}>
            <Card className="full-width mb-30" cover={
              <img
                style={{ border: '1px solid #f0f0f0' }}
                alt="example"
                src="/img/service/2.png"
              />
            }>
              <Card.Meta
                title="Kurye Hizmeti"
                description="Teslimatınızı adresten teslim noktasına güvenli bir şekilde taşıyoruz."
              />
            </Card>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 8 }}>
            <Card className="full-width mb-30" cover={
              <img
                style={{ border: '1px solid #f0f0f0' }}
                alt="example"
                src="/img/service/3.png"
              />
            }>
              <Card.Meta
                title="Yöresel Market"
                description="Çok Yakında"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;