import React, { useEffect, useState, useRef } from 'react'

import { Auth, DataStore } from 'aws-amplify'

import { Col, Row, Table, Button, Input, message, Space, Switch, Select, Popconfirm, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import * as userServices from '../../services/userServices';
import { UsuarioDG } from '../../models';


const ListaUsuarios = ({ objetos }) => {
    const [modalNovoUsuario, setModalNovoUsuario] = useState(false);
    const [modalCodigoUsuario, setModalCodigoUsuario] = useState(false);
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const showModal = () => {
        setModalNovoUsuario(!modalNovoUsuario);
    }

    const showModalCodigo = () => {
        setModalCodigoUsuario(!modalCodigoUsuario);
    }

    const handleConfirmarCodigo = async (record) => {
        console.log(record);
        setUserName(record.UserName);
        setUserId(record.id);
        showModalCodigo();
    }

    const ModalNovoUsuario = () => {
        const [form] = Form.useForm();

        async function handleSubmit() {
            try {
                await Auth.signUp({ username: form.getFieldValue('username'), password: form.getFieldValue('password'), attributes: { email: form.getFieldValue('email'), name: form.getFieldValue('name') } })
                    .then((response) => {
                        saveUser(response.userSub)
                    });
            }
            catch (error) {

            }
            setModalNovoUsuario(!modalNovoUsuario);
        }

        async function saveUser(userId) {
            const response = await userServices.createUser(userId, form.getFieldValue('name'), form.getFieldValue('email'), form.getFieldValue('username'), "Aguardando Ativação")
            if (response.success === true) {
                message.success('Sonda adicionada com sucesso!');
            }
        }

        return (
            <Modal
                visible={modalNovoUsuario}
                title="Novo Usuário"
                onOk={showModal}
                onCancel={showModal}
                footer={[
                    <Button key="back" onClick={showModal}>
                        Cancelar
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleSubmit}>
                        Salvar
                    </Button>,
                ]}
            >
                <Form
                    layout='vertical'
                    form={form}
                    initialValues={{
                        layout: 'vertical',
                    }}
                >
                    <Form.Item
                        name='name'
                        label="Nome"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Nome" />
                    </Form.Item>
                    <Form.Item
                        name='email'
                        label="E-mail"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, informe seu e-mail',
                            },
                        ]}
                    >
                        <Input placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item
                        name='username'
                        label="Usuário"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, informe seu nome de usuário',
                            },
                        ]}
                    >
                        <Input placeholder="Usuário" />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        label="Senha"
                    >
                        <Input
                            placeholder="Senha"
                            type="password"
                        />
                    </Form.Item>
                    <Form.Item
                        name='confirmpassword'
                        label="Confirmar Senha"
                        rules={[
                            { required: true, message: 'Por favor, confirme sua senha' },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('As senhas não conferem');
                                }
                            })
                        ]}
                    >
                        <Input
                            placeholder="Confirmar Senha"
                            type="password"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }

    const ModalConfirmaCodigo = () => {
        const [form] = Form.useForm();

        async function handleConfirmarCodigo() {
            console.log("aqui -> ", userId, userName)
            await Auth.confirmSignUp(userName, form.getFieldValue('code'))
            .then((response) => {
                console.log("handleConfirm ->", response);     
                changeUserStatus(userName, "Confirmado");        
            });
        }

        async function changeUserStatus(userId, status) {
            const response = await userServices.updateUser(userId, status);
            if (response.success === true) {
                message.success('Status alterado com sucesso!');
            }
        }

        return (
            <Modal
                visible={modalCodigoUsuario}
                title="Confirmar Código"
                onOk={showModalCodigo}
                onCancel={showModalCodigo}
                footer={[
                    <Button key="back" onClick={showModalCodigo}>
                        Cancelar
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleConfirmarCodigo}>
                        Salvar
                    </Button>,
                ]}
            >
                <Form
                    layout='vertical'
                    form={form}
                    initialValues={{
                        layout: 'vertical',
                    }}
                >
                    <Form.Item
                        name='code'
                        label="Código"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Código" />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }

   

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Pesquisar ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Pesquisar
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Limpar
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filtrar 2
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    const columns = [
        {
            title: 'Usuário',
            dataIndex: 'UserName',
            sorter: (a, b) => a.UserName.localeCompare(b.UserName),
            defaultSortOrder: 'ascend',
            ...getColumnSearchProps('UserName'),
        },
        {
            title: 'Nome',
            dataIndex: 'Nome',
            sorter: (a, b) => a.Nome.localeCompare(b.Nome),
            defaultSortOrder: 'ascend',
            ...getColumnSearchProps('Nome'),
        },
        {
            title: 'E-mail',
            dataIndex: 'Email',
            sorter: (a, b) => a.Email.localeCompare(b.Email),
            defaultSortOrder: 'ascend',
            ...getColumnSearchProps('Email'),
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            sorter: (a, b) => a.Status.localeCompare(b.Status),
            defaultSortOrder: 'ascend',
            ...getColumnSearchProps('Status'),
        },
        {
            title: 'Ação',
            key: 'action',
            render: (_, record) =>
                objetos.length >= 1 ? (

                    <Space size="middle">
                        {/* <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => handleDeletar(record)}>
                    <a>Excluír</a>
                </Popconfirm> */}
                        <a onClick={() => handleConfirmarCodigo(record)}>Senha</a>
                    </Space>

                ) : null,
        },
    ];

    return (
        <div>
            <div><button onClick={() => { setModalNovoUsuario(!modalNovoUsuario) }}>Teste</button></div>
            <ModalNovoUsuario />
            <ModalConfirmaCodigo />
            <Table columns={columns} dataSource={objetos} onChange={onChange} key='tableUsuarios' />
        </div>

    )
}


function UsuarioPage() {
    const [objetos, setObjetos] = useState([]);

    useEffect(() => {
        const subscription = DataStore.observeQuery(UsuarioDG).subscribe((snapshot) => {
            //isSynced can be used to show a loading spinner when the list is being loaded. 
            const { items, isSynced } = snapshot;
            getUsers();
        });

        //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
        return function cleanup() {
            subscription.unsubscribe();
        }
    }, []);


    const getUsers = async () => {
        const response = await userServices.getUsuarios();
        console.log(response);
        setObjetos(response);
    }
    return (
        <div>
            <h1>Usuarios</h1>
            <ListaUsuarios
                objetos={objetos}
            />
        </div>
    )

}

export default UsuarioPage;