import React, {useEffect, useState, useRef } from 'react'

import { Table, Button, Input, Switch, message, Space, Popconfirm, Modal, Form} from 'antd';
import 'antd/dist/antd.css';
import { LoginOutlined, SearchOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import { useHistory } from 'react-router-dom';

import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import * as boletimServices from '../../services/boletimServices';
import {DataStore} from 'aws-amplify';

import './styles.css'
import { Boletim } from '../../models';
import { IoMdAdd } from 'react-icons/io';
function ListaObjetos({objetos, titulo, titulo_botao}) {
    const [modal_novo, setmodal_novo] = useState(false);
    const [modal_edicao, setmodal_edicao] = useState(false);
    const [objeto, setObjeto] = useState({});

    const history = useHistory();


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    
    const ModalNovaObjeto = ({modal_novo, setmodal_novo, titulo}) => {
        const [form] = Form.useForm();
      
        const salvarObjeto = async (form) => {
          const response = await boletimServices.save(form);
          if(response.success === true)
          {
            message.success('Sonda adicionada com sucesso!');
          }    
        }
      
        function tog_novo() {
          setmodal_novo(!modal_novo)
        }

        function handleSubmit(e) {
          if (form.getFieldValue('NomeSonda') != "") 
          {
            salvarObjeto(form.getFieldsValue('')).then(() => {
              tog_novo()
            })
          }
        }
        return(
            <Modal
              visible={modal_novo}
              title={titulo}
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
                    name="NomeSonda"
                    label="Nome da Sonda"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Input style={{ width: '100%' }}/>
                    </Form.Item>                    
                </Form>
            </Modal>
        )
    }
      
    const ModalAtualizaObjeto = ({modal_edicao, setmodal_edicao, objeto, titulo}) => {
        const [form] = Form.useForm();
      
        const atualizarObjeto = async (objetoAtualizado, objeto) => {
          const response = await boletimServices.update(objetoAtualizado, objeto);
          if(response.success === true)
          {
            message.success('Sonda atualizada com sucesso!');
          }    
        }
      
        const loadInformacoes = () => {	
          form.setFieldsValue({
            NomeSonda: objeto?.NomeSonda
          });
        }
      
        useEffect(() => {
            loadInformacoes();
          }, [objeto]);
      
        const tog_edicao = () => {
          setmodal_edicao(!modal_edicao);
        }
      
        const handleSubmit = () => {
            atualizarObjeto(form.getFieldValue() , objeto).then(() => {
              tog_edicao()
            });
        }
      
        return(
          <Modal
              visible={modal_edicao}
              title={titulo}
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
                name="NomeSonda"
                label="Nome da Sonda"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input/>
              </Form.Item>                     
            </Form> 
            </Modal>
            
        )
    }
    
    function handleDetalhes(boletim){
      console.log('handleDetalhes', boletim)
      history.push('/detalheboletim',{data: boletim})
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

    const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' };

    const columns = [    
        { 
            title: 'Data',
            dataIndex: 'Data',
            sorter: (a, b) => a.Data.localeCompare(b.Data),            
            defaultSortOrder: 'ascend',
            render: (item) => { 
              const date = new Date(item);
              return (<span>{format(new Date(date.toISOString().slice(0, -1)), "dd'/'MM'/'yyyy", {locale:ptBR, dateOptions})} </span>) 
            },
            // ...getColumnSearchProps('Data'),
        }, 
        { 
          title: 'Cliente',
          dataIndex: 'Alvo',
          render: (item) => {
             return <div>{item != null ? (item.Projeto.Cliente.NomeCliente) : (null)}</div>
          },   
          onFilter: (value, record) => record.Projeto.Cliente.NomeCliente.toString().search(value) !== -1,
          // ...getColumnSearchProps('Data'),
        },    
        { 
          title: 'Projeto',
          dataIndex: 'Alvo',
          render: (item) => {
            return <div>{item != null ? (item.Projeto.NomeProjeto) : (null)}</div>
          },   
          onFilter: (value, record) => record.Projeto.NomeProjeto.toString().search(value) !== -1,
          // ...getColumnSearchProps('Data'),
        },    
        { 
          title: 'Alvo',
          dataIndex: 'Alvo',
          render: (item) => {
            return <div>{item != null ? (item.NomeAlvo) : (null)}</div>
          },   
          onFilter: (value, record) => record.NomeAlvo.toString().search(value) !== -1,
          // ...getColumnSearchProps('Data'),
        },    
        { 
          title: 'Sonda',
          dataIndex: 'Sonda',
          render: (item) => {
            return <div>{item != null ? (item.NomeSonda) : (null)}</div>
          },   
          onFilter: (value, record) => record.NomeSonda.toString().search(value) !== -1,
          // ...getColumnSearchProps('Data'),
        },    
        { 
          title: 'Turno',
          dataIndex: 'Turno',
          render: (item) => {
            return <div>{item != null ? (item.Codigo) : (null)}</div>
          },   
          onFilter: (value, record) => record.Codigo.toString().search(value) !== -1,
          // ...getColumnSearchProps('Data'),
        },    
        {
        title: 'Ação',
        key: 'action',
        render: (_, record) =>
            objetos.length >= 1 ? (
            
            <Space size="middle">
                <a onClick={() => handleDetalhes(record)}>Visualizar</a> 
            </Space>
            
            ) : null,
        },
    ];

    return(
        <div>
            <div className='title'>
                <h1>{titulo}</h1>
                {/* <Button type="primary" 
                icon={<LoginOutlined />} 
                onClick={() => {
                    setmodal_novo(true)
                    }}
                >{titulo_botao}</Button> */}
            </div>
            <Table columns={columns} dataSource={objetos} onChange={onChange} key='tableSonda'/>
            {/* <ModalNovaObjeto 
                 modal_novo={modal_novo} 
                setmodal_novo={setmodal_novo}
                titulo = 'Nova Sonda'
            />
            <ModalAtualizaObjeto
                modal_edicao = {modal_edicao} 
                setmodal_edicao = {setmodal_edicao} 
                objeto = {objeto}
                titulo = 'Atualizar Sonda'
            />  */}
        </div>
    )
}

function BoletimPage() {
    const [boletins, setBoletins] = useState([]);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Boletim).subscribe((snapshot) => {
            //isSynced can be used to show a loading spinner when the list is being loaded. 
            const { items, isSynced } = snapshot;    
            getBoletins();
          });
      
          //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
          return function cleanup() {
            subscription.unsubscribe();
          }
    },[]);

    
    const getBoletins = async () => {
        const query = await boletimServices.getAll();
        console.log('boletins querie ->', query);
        setBoletins(query);
    }

    return (
        <div>
            <ListaObjetos 
                titulo='Boletins' 
                titulo_botao='Novo Boletim' 
                objetos={boletins}
            />
        </div>
    )
}

export default BoletimPage