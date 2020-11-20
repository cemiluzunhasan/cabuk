import { Col, Row, Card } from "antd";

const WhyToChoose = () => {
  return (
    <div className="d-flex fd-column a-center pt-100 pb-100 content">
      <h1 className="text-center">NEDEN BİZİ SEÇMELİSİNİZ</h1>
      <p className="text-center">Kendimizi müşterilere adadık ve kaliteye odaklandık</p>
      <Row gutter={30} className="mt-50">
        <Col md={{ span: 24 }} lg={{ span: 8 }}>
          <Card className="full-width mb-10" cover={
            <img
              style={{ border: '1px solid #f0f0f0' }}
              className="card-img"
              alt="example"
              src="/img/whyyouchoose/1.png"
            />
          }>
            <Card.Meta
              title="Hızlı ve Güvenilir"
              description="Şehirlerarası taşımacılık için kurduğumuz hızlı ve çevreci sistemimizle kargonuzu adresinizden teslimat noktasına kadar mümkün olan en kısa sürede ulaşmasını sağlıyoruz"
            />
          </Card>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 8 }}>
          <Card className="full-width mb-10" cover={
            <img
              style={{ border: '1px solid #f0f0f0' }}
              alt="example"
              src="/img/whyyouchoose/2.png"
            />
          }>
            <Card.Meta
              title="Uygun Fiyatlandırma"
              description="Kullanıcılarımız ve işletmelerimiz için en uygun fiyatı veriyoruz"
            />
          </Card>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 8 }}>
          <Card className="full-width mb-10" cover={
            <img
              style={{ border: '1px solid #f0f0f0' }}
              alt="example"
              src="/img/whyyouchoose/3.png"
            />
          }>
            <Card.Meta
              title="Çevreci Bakış Açısı"
              description="Mevcut kargo firmalarına göre daha az araç kullanarak karbon ayak izimizi ve çevremizi koruyoruz"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WhyToChoose;