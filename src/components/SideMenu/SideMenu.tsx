import React, { useState, useEffect } from "react";
import {
  FormOutlined,
  SnippetsOutlined,
  PlaySquareOutlined,
  HddFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import "./siderMenu.scss";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "dashboard",
    type: "group",
    children: [
      {
        key: "product",
        label: "Product",
        icon: <HddFilled />,
        className:
          "text-base hover:bg-custom-green bg-custom-menu-item font-medium",
      },
      {
        key: "media",
        label: "Media",
        icon: <PlaySquareOutlined />,
        className:
          "text-base hover:bg-custom-green bg-custom-menu-item font-medium",
      },
      {
        key: "page",
        label: "Page",
        icon: <SnippetsOutlined />,
        className:
          "text-base hover:bg-custom-green bg-custom-menu-item font-medium",
      },
      {
        key: "post",
        label: "Post",
        icon: <FormOutlined />,
        className:
          "text-base hover:bg-custom-green bg-custom-menu-item font-medium",
      },
    ],
  },
];

const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  // Xử lý sự kiện click vào menu items
  const handleMenuItemClick = (e: { key: React.Key }) => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
    setSelectedKeys([e.key.toString()]);
    navigate(`/${e.key}`.toString());
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Đồng bộ selectedKeys với path hiện tại
    const path = location.pathname.substr(1); // Bỏ đi ký tự "/" ở đầu path
    setSelectedKeys([path]);
  }, [location.pathname]);

  return (
    <div className="side-menu fixed top-0 left-0 h-full">
      <div
        className={`h-screen flex flex-col bg-white transition-width duration-300 
        ${collapsed ? "w-20" : "w-64"}`}
      >
        <div className="h-16 bg-white relative">
          <h1 className="text-2xl text-center pt-5 font-bold">
            {collapsed ? "D" : "DanSolution"}
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
        </div>
        <Menu
          selectedKeys={selectedKeys}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
          className=""
          onClick={handleMenuItemClick}
        />
      </div>
    </div>
  );
};

export default SideMenu;
