import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Header = () => {
    const items = [
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/">
              Bankruptcy Law
            </a>
          ),
          key: '0',
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/">
              Business Law
            </a>
          ),
          key: '1',
        },
        {
            label: (
              <a target="_blank" rel="noopener noreferrer" href="/">
                Civil Rights Law
              </a>
            ),
            key: '1',
          },
      ];

  return (
    <div id='Header'>
        <div className="container">
            
            <div className="header">
                <div className="logo"><h1>Notary</h1></div>
                <div className="navBar">
                    <ul>
                        <li>
                            <NavLink to={"/"}> Home </NavLink>
                        </li>
                        <li className='dropdown'>
                        <Dropdown
                          menu={{
                            items,
                             }}>
                         <a onClick={(e) => e.preventDefault()}>
                       <Space>
                         Practice Areas
                        <DownOutlined />
                      </Space>
                    </a>
                      </Dropdown>
                        </li>
                        <li>  <NavLink to={"/"}> Testimonials </NavLink></li>
                        <li>  <NavLink to={"/"}> About </NavLink></li>
                        <li>  <NavLink to={"/"}> Contact </NavLink></li>
                        <li>  <NavLink to={"/pages/add"}> Add  </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header