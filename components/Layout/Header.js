import React from 'react';
import {FieldTimeOutlined, BankOutlined} from '@ant-design/icons';

export default () => {
  return (
    <div className="Header content text-white d-flex j-between">
      <div className="d-flex a-center">
        <FieldTimeOutlined className="text-white mr-5" />
        <p className="text-white mb-0 mr-30">Çalışma Saatleri | Pzt-Cmt 08.00-18.00</p>
        <BankOutlined className="text-white mr-5" />
        <p className="text-white mb-0">Lokasyon | İzmir</p>
      </div>
      <div className="d-flex a-center">
        İletişime Geçin: <span className="text-green text-xl text-bold ml-10">+90 546 200 56 21</span>
      </div>
    </div>
  );
}