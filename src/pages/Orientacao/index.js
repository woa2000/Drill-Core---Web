import React, {useEffect, useState, useRef } from 'react'

import { Table, Button, Input, Select, Switch, message, Space, Popconfirm, Modal, Form, InputNumber} from 'antd';
import 'antd/dist/antd.css';
import { LoginOutlined, SearchOutlined, UserAddOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';


import * as orientacaoServices from '../../services/orientacaoServices';
import {DataStore} from 'aws-amplify';

import './styles.css'
import { Orientacao } from '../../models';

import * as XLSX from 'xlsx';

const { Option } = Select;

function ListaObjetos({objetos, titulo, titulo_botao}) {
    const [modal_novo, setmodal_novo] = useState(false);
    const [modal_edicao, setmodal_edicao] = useState(false);
    const [objeto, setObjeto] = useState({});


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    
    const ModalNovaObjeto = ({modal_novo, setmodal_novo, titulo}) => {
        const [form] = Form.useForm();
      
        const salvarObjeto = async (form) => {
          const response = await orientacaoServices.save(form);
          if(response.success === true)
          {
            message.success('Orientação adicionada com sucesso!');
          }    
        }
      
        function tog_novo() {
          setmodal_novo(!modal_novo)
        }

        function handleSubmit(e) {
          if (form.getFieldValue('Sigla') != "") 
          {
            console.log('submmit ->',form.getFieldsValue());
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
                    name="Codigo"
                    label="Código"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <InputNumber style={{ width: '100%' }}/>
                    </Form.Item>                    
                    <Form.Item 
                    name="Sigla"
                    label="Sigla"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Input placeholder="Sigla"/>
                    </Form.Item>
                    <Form.Item 
                    name="Descricao"
                    label="Descrição"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Input placeholder="Descrição"/>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
      
    const ModalAtualizaObjeto = ({modal_edicao, setmodal_edicao, atividade: objeto, titulo}) => {
        const [form] = Form.useForm();
      
        const atualizarObjeto = async (objetoAtualizado, objeto) => {
          const response = await orientacaoServices.update(objetoAtualizado, objeto);
          if(response.success === true)
          {
            message.success('Orientação atualizada com sucesso!');
          }    
        }
      
        const loadInformacoes = () => {	
          form.setFieldsValue({
            Sigla: objeto?.Sigla,
            Codigo: objeto?.Codigo,
            Descricao: objeto?.Descricao,
          });
      
          console.log('setting field value', form.getFieldValue('Sigla'))
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
                name="Codigo"
                label="Código"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber style={{ width: '100%' }}/>
              </Form.Item>
              <Form.Item               
                name="Sigla"
                label="Sigla"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input/>
              </Form.Item>    
              <Form.Item               
                name="Descricao"
                label="Descrição"
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
    
    const handleDeletar= async (objeto) => {
        const response = await orientacaoServices.deleteObject(objeto);
        if(response.success === true)
        {
        message.success('Orientação excluída com sucesso!');
        }    
    }

    function handleEditar(objeto){
        setObjeto(objeto);
        setmodal_edicao(true);
    }

    const handleAlterarStatus = async (status, objeto) => {
        const response = await orientacaoServices.setActive(status, objeto);
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
            title: 'Sigla',
            dataIndex: 'Sigla',
            sorter: (a, b) => a.Sigla.localeCompare(b.Sigla),
            ...getColumnSearchProps('Sigla'),
        },
        { 
            title: 'Descrição',
            dataIndex: 'Descricao',
            sorter: (a, b) => a.Descricao.localeCompare(b.Descricao),
            ...getColumnSearchProps('Descricao'),
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
            objetos.length >= 1 ? (
            
            <Space size="middle">
                <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => handleDeletar(record)}>
                    <a>Excluír</a>
                </Popconfirm>
                <a onClick={() => handleEditar(record)}>Editar</a> 
                
            </Space>
            
            ) : null,
        },
    ];

    //create a function to import the data from excel file  and save it in the database 
    const importarOrientacao = async (file) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, {
          type: 'binary',
        });
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        const data_json = XLSX.utils.sheet_to_json(worksheet);
        data_json.forEach(async (element) => {
          const response = await orientacaoServices.save(new Orientacao({Codigo : element.Codigo, Sigla : element.Sigla, Descricao : element.Descricao })); 
          console.log('response => ',response)

        });
      };
      reader.readAsBinaryString(file);
    }

    return(
        <div>
            <div className='title'>
                <h1>{titulo}</h1>
                <Button type="primary" 
                icon={<LoginOutlined />} 
                onClick={() => {
                    setmodal_novo(true)
                    }}
                >{titulo_botao}</Button>
                {/* <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    importarOrientacao(file);
                  }}
                /> */}
            </div>
            <Table columns={columns} dataSource={objetos} onChange={onChange} key='tableAlvo'/>
            <ModalNovaObjeto 
                 modal_novo={modal_novo} 
                setmodal_novo={setmodal_novo}
                titulo = 'Nova Orientação'
            />
            <ModalAtualizaObjeto
                modal_edicao = {modal_edicao} 
                setmodal_edicao = {setmodal_edicao} 
                atividade = {objeto}
                titulo = 'Atualizar Orientação'
            /> 
        </div>
    )
}

function OrientacaoPage() {
    const [orientacoes, setOrientacoes] = useState([]);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Orientacao).subscribe((snapshot) => {
            //isSynced can be used to show a loading spinner when the list is being loaded. 
            const { items, isSynced } = snapshot;    
            getOrientacao();
          });
      
          //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
          return function cleanup() {
            subscription.unsubscribe();
          }
    },[]);

    
    const getOrientacao = async () => {
        const response = await orientacaoServices.getAll();
        setOrientacoes(response);
    }

    return (
        <div>
            <ListaObjetos 
                titulo='Orientações' 
                titulo_botao='Nova Orientação' 
                objetos={orientacoes}
            />
        </div>
    )
}

export default OrientacaoPage