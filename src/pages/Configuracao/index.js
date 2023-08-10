import React from 'react'
import { Col, Row, Table, Button, Input, message, Space, Switch, Select, Popconfirm, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons';


import { DataStore,  Predicates, SortDirection } from 'aws-amplify';
import { EquipeProjeto } from '../../models';




function ConfiguracaoPage() {
    async function changeSync() {
        await DataStore.clear();
        await DataStore.start();
    }

    async function ClearAllEquipeProjeto() {
        var membros = DataStore.query(EquipeProjeto, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});
        membros.map(async (membro) => {
            await DataStore.delete(membro);
        })
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
            <div>        
            <Button type="primary"
                    icon={<UserAddOutlined />}
                    onClick={() => {
                        alert('Limpar Equipe');
                        ClearAllEquipeProjeto();
                    }}
                >Limpar EquipeProjeto</Button>
            </div>
        </div>

    )
}

export default ConfiguracaoPage