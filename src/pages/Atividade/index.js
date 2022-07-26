import React, {useEffect, useState, useRef } from 'react'

import { Table, Button, Input, Select, Switch, message, Space, Popconfirm, Modal, Form} from 'antd';
import 'antd/dist/antd.css';
import { LoginOutlined, SearchOutlined, UserAddOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';


import * as atividadeServices from '../../services/atividadeServices';
import {DataStore} from 'aws-amplify';

import './styles.css'
import { Atividade } from '../../models';

const { Option } = Select;

function ListaAtividades({atividades}){
    const [modal_novo, setmodal_novo] = useState(false);
    const [modal_edicao, setmodal_edicao] = useState(false);
    const [atividade, setAtividade] = useState({});


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    
    const ModalNovaAtividade = ({modal_novo, setmodal_novo}) => {
        const [form] = Form.useForm();
      
        const salvarAtividade = async (nomeAtividade, codigo, tipo) => {
          const response = await atividadeServices.salvarAtividade(nomeAtividade, parseInt(codigo), tipo);
          console.log('salvarAtividade', response)    
          if(response.success === true)
          {
            message.success('Atividade adicionada com sucesso!');
          }    
        }
      
        function tog_novo() {
          setmodal_novo(!modal_novo)
        }
      
      
        function handleSubmit(e) {
          if (form.getFieldValue('NomeAtividade') != "") 
          {
            console.log('submmit ->',form.getFieldsValue());
            salvarAtividade(form.getFieldValue('NomeAtividade'), form.getFieldValue('Codigo'),form.getFieldValue('Tipo')).then(() => {
              tog_novo()
            })
          }
        }
        return(
            <Modal
              visible={modal_novo}
              title="Nova Atividade"
              onOk={tog_novo}
              onCancel={tog_novo}
              footer={[
                <Button key="back" onClick={tog_novo}>
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
                    name="Codigo"
                    label="Código"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Input placeholder="Código"/>
                    </Form.Item>
                    <Form.Item 
                    name="NomeAtividade"
                    label="Nome da Atividade"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Input placeholder="Nome da Atividade"/>
                    </Form.Item>
                    <Form.Item 
                    name="Tipo"
                    label="Tipo"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Select
                            style={{
                            width: '100%',
                            }}
                        >
                            <Option value="HORAS PRODUTIVAS">HORAS PRODUTIVAS</Option>
                            <Option value="HORAS MECÂNICAS">HORAS MECÂNICAS</Option>
                            <Option value="HORAS NÃO MECÂNICAS">HORAS NÃO MECÂNICAS</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
      
    const ModalAtualizaAtividade = ({modal_edicao, setmodal_edicao, atividade}) => {
        const [form] = Form.useForm();
      
        const atualizarAtividade = async (atividadeAtualizada, atividade) => {
          const response = await atividadeServices.atualizarAtividade(atividadeAtualizada, atividade);
          if(response.success === true)
          {
            message.success('Atividade atualizada com sucesso!');
          }    
        }
      
        const loadInformacoes = () => {	
          form.setFieldsValue({
            NomeAtividade: atividade.NomeAtividade,
            Codigo: atividade.Codigo,
            Tipo: atividade.Tipo,
          });
      
          console.log('setting field value', form.getFieldValue('NomeAtividade'))
        }
      
        useEffect(() => {
              loadInformacoes();
          }, [atividade]);
      
        const tog_edicao = () => {
          setmodal_edicao(!modal_edicao);
        }
      
        const handleSubmit = () => {
            atualizarAtividade(form.getFieldValue() , atividade).then(() => {
              tog_edicao()
            });
        }
      
        return(
          <Modal
              visible={modal_edicao}
              title="Editar Atividade"
              onOk={tog_edicao}
              onCancel={tog_edicao}
              footer={[
                <Button key="back" onClick={tog_edicao}>
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
            >
              <Form.Item               
                name="Codigo"
                label="Código"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item               
                name="NomeAtividade"
                label="Nome da Atividade"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input/>
              </Form.Item>              
              <Form.Item 
                name="Tipo"
                label="Tipo"
                rules={[
                    {
                    required: true,
                    },
                ]}
                >
                    <Select
                        defaultValue="HORAS PRODUTIVAS"
                        style={{
                        width: '100%',
                        }}
                        name="tipo"
                        id='tipo'
                    >
                        <Option value="HORAS PRODUTIVAS">HORAS PRODUTIVAS</Option>
                        <Option value="HORAS MECÂNICAS">HORAS MECÂNICAS</Option>
                        <Option value="HORAS NÃO MECÂNICAS">HORAS NÃO MECÂNICAS</Option>
                    </Select>
                </Form.Item>
            </Form> 
            </Modal>
            
        )
    }
    
    const handleDeletar= async (atividade) => {
        const response = await atividadeServices.deleteAtividade(atividade);
        if(response.success === true)
        {
        message.success('Atividade excluída com sucesso!');
        }    
    }

    function handleEditar(atividade){
        setAtividade(atividade);
        setmodal_edicao(true);
    }

    const handleAlterarStatus = async (status, atividade) => {
        const response = await atividadeServices.setAtivo(status, atividade);
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
            title: 'Código',
            dataIndex: 'Codigo',
            sorter: (a, b) => a.Codigo - b.Codigo,
            defaultSortOrder: 'ascend',
            ...getColumnSearchProps('Codigo'),
        },
        { 
            title: 'Nome da Atividade',
            dataIndex: 'NomeAtividade',
            sorter: (a, b) => a.NomeAlvo.localeCompare(b.NomeAlvo),
            ...getColumnSearchProps('NomeAtividade'),
        },
        { 
            title: 'Tipo',
            dataIndex: 'Tipo',
            sorter: (a, b) => a.Tipo.localeCompare(b.Tipo),
            filters: [
                {
                  text: 'HORAS PRODUTIVAS',
                  value: 'HORAS PRODUTIVAS',
                },
                {
                  text: 'HORAS MECÂNICAS',
                  value: 'HORAS MECÂNICAS',
                },
                {
                    text: 'HORAS NÃO MECÂNICAS',
                    value: 'HORAS NÃO MECÂNICAS',
                  },
              ],
              onFilter: (value, record) => record.Tipo.toString().search(value) !== -1,
        },
        {
            title: 'Ativo',
            key: 'ativo',
            filters: [
              {
                text: 'Ativo',
                value: 'true',
              },
              {
                text: 'Inativo',
                value: 'false',
              },
            ],
            onFilter: (value, record) => record.Ativo.toString().search(value) !== -1,
            render: (_, record) => (
              <Space size="middle">
               <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={record.Ativo}
                onClick={() => handleAlterarStatus(!record.Ativo, record)}
              />
              </Space>
            )
          },
        {
        title: 'Ação',
        key: 'action',
        render: (_, record) =>
            atividades.length >= 1 ? (
            
            <Space size="middle">
                <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => handleDeletar(record)}>
                    <a>Excluír</a>
                </Popconfirm>
                <a onClick={() => handleEditar(record)}>Editar</a> 
            </Space>
            
            ) : null,
        },
    ];

    return(
        <div>
            <div className='title'>
                <h1>Atividades</h1>
                <Button type="primary" 
                icon={<LoginOutlined />} 
                onClick={() => {
                    setmodal_novo(true)
                    }}
                >Nova Atividade</Button>
            </div>
            <Table columns={columns} dataSource={atividades} onChange={onChange} key='tableAlvo'/>
            <ModalNovaAtividade 
                 modal_novo={modal_novo} 
                setmodal_novo={setmodal_novo}
            />
            <ModalAtualizaAtividade
                modal_edicao = {modal_edicao} 
                setmodal_edicao = {setmodal_edicao} 
                atividade = {atividade}
            /> 
        </div>
    )
}


function AtividadePage() {
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Atividade).subscribe((snapshot) => {
            //isSynced can be used to show a loading spinner when the list is being loaded. 
            const { items, isSynced } = snapshot;    
            getAtividades();
          });
      
          //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
          return function cleanup() {
            subscription.unsubscribe();
          }
    },[])

    const getAtividades = async () => {
        const response = await atividadeServices.getAtividades();
        setAtividades(response);
        console.log('atividades', response)
      }
    

  return (
    <div>
        <ListaAtividades
            atividades={atividades}
        />
    </div>
  )
}

export default AtividadePage