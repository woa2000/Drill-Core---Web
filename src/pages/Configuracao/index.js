import React from 'react'
import { Col, Row, Table, Button, Input, message, Space, Switch, Select, Popconfirm, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons';


import { DataStore } from 'aws-amplify';




function ConfiguracaoPage() {


    async function changeSync() {
        await DataStore.clear();
        await DataStore.start();
    }



    return (
        <div>
            <div>Configuracao</div>
            <div>
                <Button type="primary"
                    icon={<UserAddOutlined />}
                    onClick={() => {
                        alert('Limpar Banco de Dados');
                        changeSync();
                    }}
                >Limpar BD Local</Button>
            </div>
        </div>

    )
}

export default ConfiguracaoPage