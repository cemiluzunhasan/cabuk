import { Drawer, Button } from 'antd';

const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="MobileMenu">
      <Drawer visible={visible} onClose={() => setVisible(false)}>

      </Drawer>
      <Button>
        <i className="fas fa-bars"></i>
      </Button>
    </div>
  );
}

export default MobileMenu;