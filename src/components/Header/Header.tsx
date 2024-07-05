import React, { useState, useEffect } from "react";
import { Layout, Input, Avatar, Badge, Menu } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import "./Header.scss";

const { Header: AntHeader } = Layout;
const { Search } = Input;

function Header() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // Type assertion to HTMLElement
      if (isUserMenuOpen && !target.closest(".user-avatar")) {
        setUserMenuOpen(false);
      }
      if (isNotificationOpen && !target.closest(".notification-icon")) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isUserMenuOpen, isNotificationOpen]);

  const handleUserMenuClick = () => {
    setUserMenuOpen(!isUserMenuOpen);
    // Đóng thông báo nếu đang mở
    if (isNotificationOpen) {
      setNotificationOpen(false);
    }
  };

  const handleNotificationClick = () => {
    setNotificationOpen(!isNotificationOpen);
    // Đóng menu người dùng nếu đang mở
    if (isUserMenuOpen) {
      setUserMenuOpen(false);
    }
  };

  return (
    <AntHeader className="header-main">
      {/* Search */}
      <div className="flex items-center w-2/4 lg:h-2/3">
        <Search
          placeholder="Search..."
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
          className="mr-4"
          allowClear
        />
      </div>

      {/* User Avatar and Notifications */}
      <div className="flex items-center lg:w-1/3 w-2/4 justify-start">
        {/* Bell Icon */}
        <span
          onClick={handleNotificationClick}
          className="notification-icon relative"
        >
          <Badge count={5} offset={[5, -5]}>
            <BellOutlined className="text-blue-500 text-lg cursor-pointer" />
          </Badge>
        </span>

        {/* User Avatar */}
        <span
          onClick={handleUserMenuClick}
          className="user-avatar ml-4 relative"
        >
          <Badge dot offset={[5, -5]}>
            <Avatar size="small" icon={<UserOutlined />} />
          </Badge>
        </span>

        {/* User Menu */}
        {isUserMenuOpen && (
          <Menu
            mode="vertical"
            className="menu-dropdown z-50 absolute right-100 top-full mt-2"
            onClick={handleUserMenuClick}
          >
            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="logout">Logout</Menu.Item>
          </Menu>
        )}

        {/* Notifications */}
        {isNotificationOpen && (
          <Menu
            mode="vertical"
            className="menu-dropdown z-50 absolute right-100 top-full mt-2"
            onClick={handleNotificationClick}
          >
            <Menu.Item key="notification1">New message</Menu.Item>
            <Menu.Item key="notification2">New task</Menu.Item>
          </Menu>
        )}
      </div>
    </AntHeader>
  );
}

export default Header;
