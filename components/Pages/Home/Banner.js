import React from 'react';
import {Button, Carousel} from "antd";

export default () => {
  return (
    <Carousel responsive={[{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]} arrows={true} autoplay={true} autoplaySpeed={3000}>
      <div className="CarouselItem1">
        <div className="d-flex j-center fd-column">
          <div className="content">
            <p className="l-1-3 text-header text-bold mb-20">Kurye Hizmeti</p>
            <p className="text-xl mb-50">Teslimatınızı adresten teslim noktasına güvenli bir şekilde taşıyoruz.</p>
            <Button type="primary" className="btn-big">Şimdi İletişime Geç</Button>
          </div>
        </div>
      </div>
      <div className="CarouselItem2">
        <div className="d-flex j-center fd-column">
          <div className="content">
            <p className="text-xxl">Özel Teklif</p>
            <p className="l-1-3 text-header text-bold mb-20">Hızlı Teslimat</p>
            <p className="mb-50">Gün içinde sürekli çalışmakta olan araç ağıyla teslimatınızı aynı günde ulaşıyoruz.</p>
            <Button type="primary" className="btn-big">Şimdi İletişime Geç</Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}