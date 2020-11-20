import React, { useState } from 'react';
import "../styles/main.less";
import "antd/dist/antd.less";
import { Layout, Drawer } from 'antd';
import PageHeader from "../components/Layout/Header";
import Header2 from "../components/Layout/Header2";
import PageFooter from '../components/Layout/PageFooter';

function MyApp({ Component, pageProps }) {
  const { Header, Content, Footer } = Layout;
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header>
        <PageHeader />
        <Header2 />
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer className="bg-darkgrey text-white">
        <PageFooter />
      </Footer>
    </>
  )
    ;
}

export default MyApp;
