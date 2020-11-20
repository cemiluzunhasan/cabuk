import Link from 'next/link';
import { Dropdown, Menu } from "antd";

const DropdownMenu = ({ menu, children }) => {
  let menudropdown = (
    <Menu>
      { menu.map(x => (
        <>
          { x.menu ?
            <Menu.SubMenu title={x.title}>
              {x.menu.map(w =>
                <Menu.Item>
                  <Link href={w.to}>
                    <a>
                      {w.icon && <span className="mr-5">{w.icon}</span>}
                      <span>{w.title}</span>
                    </a>
                  </Link>
                </Menu.Item>
              )}
            </Menu.SubMenu>
            :
            <Menu.Item key={x.to}>
              <Link href={x.to}>
                <a>
                  {x.icon && <span className="mr-5">{x.icon}</span>}
                  <span>{x.title}</span>
                </a>
              </Link>
            </Menu.Item>
          }
        </>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={menudropdown}>
      { children}
    </Dropdown>
  );
};

export default DropdownMenu;