import React, { useState } from 'react';
import { Menu, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './style.css';

function UserLogged({ userName = 'DrillCore', signOut }) {
    function handleLogout() {
        console.log('handleLogout');
        signOut();
    }

    return (
        <Menu
            theme="dark"
            mode="horizontal"
        >
            <Menu.SubMenu key={'a1'} title={<div className='user-logged'><Avatar icon={<UserOutlined />} /> <span className='name'>{userName}</span></div>}>
                {
                    <Menu.Item key={'a2'}>
                        <Popconfirm title="Realmente deseja sair?" onConfirm={() => handleLogout()}>
                            <a>Sair</a>
                        </Popconfirm>
                    </Menu.Item>
                }
            </Menu.SubMenu>
        </Menu>

    )
}

export default UserLogged;