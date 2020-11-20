import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import DropdownMenu from '../Globals/DropdownMenu';
import { mainMenu, services, aboutUs, contact } from '../../helpers/constants';

export default () => {
  return (
    <div className="Header2 bg-green text-black d-flex" style={{ height: 90 }}>
      <div className="content d-flex a-center j-between full-height">
        <img src="/img/logo.png" width={200} />
        <div className="Menu d-flex a-center full-height">
          <DropdownMenu menu={mainMenu}>
            <p className="mb-0 mr-20 c-pointer">Ana Sayfa</p>
          </DropdownMenu>
          <DropdownMenu menu={services}>
            <p className="mb-0 mr-20 c-pointer">Hizmetler</p>
          </DropdownMenu>
          <DropdownMenu menu={aboutUs}>
            <p className="mb-0 mr-20 c-pointer">Hakkımızda</p>
          </DropdownMenu>
          <DropdownMenu menu={contact}>
            <p className="mb-0 mr-20 c-pointer">İletişim</p>
          </DropdownMenu>
          <FacebookOutlined className="text-lg text-white ml-30 mr-10" />
          <InstagramOutlined className="text-lg text-white mr-10" />
          <TwitterOutlined className="text-lg text-white mr-10" />
        </div>
      </div>
    </div>
  )
}