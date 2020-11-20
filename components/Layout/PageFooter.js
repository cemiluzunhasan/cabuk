import { Button, Col, Divider, Row } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const PageFooter = () => {
  return (
    <div className="Footer text-white content">
      <Row>
        <Col span={24}>
          <div className="d-flex j-between a-center p-30" style={{ border: '1px solid rgba(136,136,136,.8)' }}>
            <p className="text-xxxl mb-0">Teklif almak için bizimle iletişime geçin</p>
            <Button className="btn w-200 h-50 text-xxl radius" type="primary">Teklif Al</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-60" gutter={20}>
        <Col md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 6 }} className="mb-30">
          <img
            src="/img/footer/footer.png"
            className="full-width" />
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 6 }}>
          <p className="text-border mb-10 pb-5 text-lg">Hakkımızda</p>
          <p className="text-white">Şehirlerarası taşımacılık için kurduğumuz hızlı ve çevreci sistemimizle kargonuzu
            adresinizden teslimat noktasına kadar mümkün olan en kısa sürede ulaşmasını sağlıyoruz</p>
          <div className="d-flex mt-10">
            <FacebookOutlined className="text-white mr-5" />
            <TwitterOutlined className="text-white mr-5" />
            <InstagramOutlined className="text-white " />
          </div>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 6 }} className="mb-30">
          <p className="text-border mb-30 text-lg pb-5">Popüler Kategoriler</p>
          <p className="text-grey footer-text c-pointer">Hızlı Teslimat</p>
          <Divider style={{ borderColor: '#707070' }} />
          <p className="text-grey footer-text c-pointer">Karbon Salınımı</p>
          <Divider style={{ borderColor: '#707070' }} />
          <p className="text-grey footer-text c-pointer">Özel Teklif</p>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 6 }} className="mb-30">
          <p className="text-border mb-10 text-lg pb-5">Çağrı Merkezi</p>
          <div className="d-flex a-center">
            <i className="fas fa-phone-alt ml-5 mr-15 text-green" />
            <h1 className="text-white text-xl mb-0">+90 546 200 56 21</h1>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PageFooter;
