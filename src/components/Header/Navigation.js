import React from "react";
import "./Navigation.css";
import { Dropdown, Space} from "antd";
import { Link } from "react-router-dom";

function Navigation() {
  const items = [
    {
      label: <Link to={`/products/category/food`}>사료</Link>,
      key: "1",
    },
    {
      label: <Link to={`/products/category/snack`}>간식</Link>,
      key: "2",
    },
    {
      label: <Link to={`/products/category/healthcare`}>건강관리</Link>,
      key: "3",
    },
    {
      label: <Link to={`/products/category/hygiene`}>위생</Link>,
      key: "4",
    },
    {
      label: <Link to={`/products/category/beauty`}>미용</Link>,
      key: "5",
    },
    {
      label: <Link to={`/products/category/feeder`}>급식기</Link>,
      key: "6",
    },
    {
      label: <Link to={`/products/category/house`}>하우스</Link>,
      key: "7",
    },
    {
      label: <Link to={`/products/category/scratch`}>스크레쳐</Link>,
      key: "8",
    },
  ];

  return (
    <div className="Navigation">
      <Dropdown className='Navigation_Dropdown' menu={{ items }}>
        <span onClick={(e) => e.preventDefault()}>
          <div className='Navigation_container'><img src='/images/Header/menu.png' alt='category' /></div>
          <Space className='Navigation_container-style'>카테고리</Space>
        </span>
      </Dropdown>
    </div>
  );
}

export default Navigation;
