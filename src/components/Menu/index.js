import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';

// const renderItemMenu = (item) => {
//     return (
//     <Menu.Item key={index}>
//         <Link to={item.path}>
//         <span>{item.title}</span>
//         </Link>
//     </Menu.Item>
//     )
// }

function MenuDrill () {
    return(
        <Menu
            theme="dark"
            mode="horizontal"
        >
            {MenuData.map((item, index) => {
                 if(item.type === 'sub') {
                    return (         
                        <Menu.SubMenu key={index} title={item.title}>   
                            {   
                                item.subMenu.map((subItem) => {
                                    return (
                                        <Menu.Item key={subItem.path}>
                                            <Link to={subItem.path}>
                                            <span>{subItem.title}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                })
                            }   
                        </Menu.SubMenu>
                    )
                 }else{
                    return (
                        <Menu.Item key={index}>
                            <Link to={item.path}>
                            <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                 }
            })}
        </Menu>
    )
}

export default MenuDrill;