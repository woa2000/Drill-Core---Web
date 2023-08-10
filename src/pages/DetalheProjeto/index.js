import React, {useState, useEffect, useRef} from 'react'
import moment from 'moment';

import { Table, Button, Input, Checkbox , Select, Switch, message, Space, Popconfirm, Modal, Form, Tabs, TimePicker  } from 'antd';
import 'antd/dist/antd.css';
import { LoginOutlined, ClockCircleOutlined, SearchOutlined, CopyOutlined, TeamOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import { useHistory } from 'react-router-dom';

import { DataStore } from 'aws-amplify';

import * as projetoServices from '../../services/projetoServices';

import './styles.css'
import { Alvo, Turno } from '../../models';
import SelectEquipe from '../../components/SelectEquipe';
import { EquipeProjeto } from '../../models';
import { Furo } from '../../models';

import * as XLSX from 'xlsx';

const { TabPane } = Tabs;
const {Option} = Select;
const format = 'HH:mm';

function ListaFuros({alvoID}){
  const [furos, setFuros] = useState([]);
  const[furo, setFuro] = useState({});

  const[modal_novo, setmodal_novo] = useState(false);
  const[modal_edicao, setmodal_edicao] = useState(false); 

  useEffect(() => {
    const subscription = DataStore.observeQuery(Furo).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;    
      getFuros(alvoID);
    });
    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }
  },[]);

  const ModalNovoFuro = ({alvoID, modal_novo, setmodal_novo}) => {
      const [form] = Form.useForm();
    
      const salvarFuro = async (form) => {
        const response = await projetoServices.saveFuro(form, alvoID);
        console.log('salvarFuro', response)    
        if(response.success === true)
        {
          message.success('Furo adicionado com sucesso!');
        }    
      }
    
      function tog_novo() {
        setmodal_novo(!modal_novo)
      }
    
    
      function handleSubmit(e) {
        if (form.getFieldValue('NomeAlvo') != "") 
        {
          salvarFuro(form.getFieldsValue()).then(() => {
            tog_novo()
          })
        }
      }
      return(
    <Modal
            visible={modal_novo}
            title="Novo Furo"
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
                  name="NomeFuro"
                  label="Nome do Furo"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Nome do Furo"/>
                </Form.Item>
                <Form.Item 
                  name="Status"
                  label="Status"
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
                      <Option value="Aguardando Início">Aguardando Início</Option>
                      <Option value="Em Execução">Em Execução</Option>
                      <Option value="Pausado">Pausado</Option>
                      <Option value="Concluído">Concluído</Option>
                  </Select>
                </Form.Item>
                <Form.Item 
                    name="FuroOrientado"
                    label="Furo Orientado"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                      <Switch  onChange={(value) => {console.log(value); form.setFieldsValue({FuroOrientado: value})}}/>                        
                    </Form.Item>
              </Form>
          </Modal>
      )
  }
    
  const ModalAtualizaFuro = ({modal_edicao, setmodal_edicao, furo}) => {
      const [form] = Form.useForm();
    
      const atualizarFuro = async (furoAtualizado, furo) => {
        const response = await projetoServices.updateFuro(furoAtualizado, furo);
        if(response.success === true)
        {
          message.success('Furo atualizado com sucesso!');
        }    
      }
    
      const loadInformacoes = () => {	
        form.setFieldsValue({
          NomeFuro: furo.NomeFuro,
          Status: furo.Status,
          FuroOrientado: furo.FuroOrientado,
        });
      }
    
      useEffect(() => {
            loadInformacoes();
        }, [furo]);
    
      const tog_edicao = () => {
        setmodal_edicao(!modal_edicao);
      }
    
      const handleSubmit = () => {
          atualizarFuro(form.getFieldValue() , furo).then(() => {
            tog_edicao()
          });
      }
    
      return(
        <Modal
            visible={modal_edicao}
            title="Editar Furo"
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
                initialValues={{
                  layout: 'vertical',
                }}
              >
                <Form.Item 
                  name="NomeFuro"
                  label="Nome do Furo"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Nome do Furo"/>
                </Form.Item>
                <Form.Item 
                  name="Status"
                  label="Status"
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
                      <Option value="Aguardando Início">Aguardando Início</Option>
                      <Option value="Em Execução">Em Execução</Option>
                      <Option value="Pausado">Pausado</Option>
                      <Option value="Concluído">Concluído</Option>
                  </Select>
                </Form.Item>
              </Form>
          </Modal>
          
      )
  }

  const getFuros = async (algoID) => {
    const furos = await projetoServices.getFuros(algoID);
    setFuros(furos);
  }

  const handleDeletar= async (furo) => {
      const response = await projetoServices.deleteFuro(furo);
      if(response.success === true)
      {
      message.success('Alvo excluído com sucesso!');
      }    
  }

  function handleEditar(furo){
      setFuro(furo);
      setmodal_edicao(true);
  }

  const handleAlterarFuroOrientado = async (status, objeto) => {
    const response = await projetoServices.setFuroOrientado(status, objeto);
  }

  const columns = [
    { 
      title: 'Nome do Furo',
      dataIndex: 'NomeFuro',
      sorter: (a, b) => a.NomeFuro.localeCompare(b.NomeFuro),
      defaultSortOrder: 'ascend',
    },
    { 
      title: 'Status',
      dataIndex: 'Status',
      sorter: (a, b) => a.Status.localeCompare(b.Status),
      defaultSortOrder: 'ascend',
    },
    {
      title: 'Furo Orientado',
      key: 'FuroOrientado',
      filters: [
        {
          text: 'SIM',
          value: 'true',
        },
        {
          text: 'NÃO',
          value: 'false',
        },
      ],
      onFilter: (value, record) => record.FuroOrientado.toString().search(value) !== -1,
      render: (_, record) => (
        <Space size="middle">
         <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={record.FuroOrientado}
          onClick={() => handleAlterarFuroOrientado(!record.FuroOrientado, record)}
        />
        </Space>
      )
    },
      {
        title: 'Ação',
        key: 'action',
        render: (_, record) =>
          furos.length >= 1 ? (
            
            <Space size="middle">
              <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => handleDeletar(record)}>
                  <a>Excluír</a>
              </Popconfirm>
              <a onClick={() => handleEditar(record)}>Editar</a> 
            </Space>
            
          ) : null,
      },
];

  return (
    <div>
      <div className='title'>
          <h2>Furos</h2>
          <Button type="primary" 
          icon={<LoginOutlined />} 
          onClick={() => {
              setmodal_novo(true)
              }}
          >Novo Furo</Button>
      </div>
      <Table columns={columns} dataSource={furos} rowKey='id'/>
      <ModalNovoFuro
        alvoID={alvoID}
        modal_novo={modal_novo}
        setmodal_novo={setmodal_novo}
      />
      <ModalAtualizaFuro 
        modal_edicao={modal_edicao}
        setmodal_edicao={setmodal_edicao}
        furo={furo}
      />
    </div>
    
  )
}

function ListaAlvos({projeto, alvos}){
    const [modal_novo, setmodal_novo] = useState(false);
    const [modal_edicao, setmodal_edicao] = useState(false);
    const [alvo, setAlvo] = useState({});


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);


    const ModalNovoAlvo = ({projetoId, modal_novo, setmodal_novo}) => {
        const [form] = Form.useForm();
      
        const salvarAlvo = async (nomeAlvo, projetoId) => {
          const response = await projetoServices.salvarAlvo(nomeAlvo, projetoId);
          console.log('salvarAlvo', response)    
          if(response.success === true)
          {
            message.success('Alvo adicionado com sucesso!');
          }    
        }
      
        function tog_novo() {
          setmodal_novo(!modal_novo)
        }
      
      
        function handleSubmit(e) {
          console.log('handleSubmit ->', projetoId);
          if (form.getFieldValue('NomeAlvo') != "") 
          {
            salvarAlvo(form.getFieldValue('NomeAlvo'), projetoId).then(() => {
              tog_novo()
            })
          }
        }
        return(
      <Modal
              visible={modal_novo}
              title="Novo Alvo"
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
                    name="NomeAlvo"
                    label="Nome do Alvo"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Nome do Alvo"/>
                  </Form.Item>
                </Form>
            </Modal>
        )
    }
      
    const ModalAtualizaAlvo = ({modal_edicao, setmodal_edicao, alvo}) => {
        const [form] = Form.useForm();
      
        const atualizarAlvo = async (alvoAtualizado, alvo) => {
          const response = await projetoServices.atualizarAlvo(alvoAtualizado, alvo);
          if(response.success === true)
          {
            message.success('Alvo atualizado com sucesso!');
          }    
        }
      
        const loadInformacoes = () => {	
          form.setFieldsValue({
            NomeAlvo: alvo.NomeAlvo
          });
        }
      
        useEffect(() => {
              loadInformacoes();
          }, [alvo]);
      
        const tog_edicao = () => {
          setmodal_edicao(!modal_edicao);
        }
      
        const handleSubmit = () => {
            atualizarAlvo(form.getFieldValue() , alvo).then(() => {
              tog_edicao()
            });
        }
      
        return(
          <Modal
              visible={modal_edicao}
              title="Editar Alvo"
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
              {/* <Input type='hidden' id='id'  name='id' /> */}
              <Form.Item               
                name="NomeAlvo"
                label="Nome do Alvo"
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
        
    const handleDeletar= async (alvo) => {
        const response = await projetoServices.deleteAlvo(alvo);
        if(response.success === true)
        {
        message.success('Alvo excluído com sucesso!');
        }    
    }

    function handleEditar(alvo){
        setAlvo(alvo);
        setmodal_edicao(true);
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
            title: 'Nome do Alvo',
            dataIndex: 'NomeAlvo',
            sorter: (a, b) => a.NomeAlvo.localeCompare(b.NomeAlvo),
            defaultSortOrder: 'ascend',
            ...getColumnSearchProps('NomeAlvo'),
          },
          {
            title: 'Ação',
            key: 'action',
            render: (_, record) =>
              alvos.length >= 1 ? (
                
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
                <Button type="primary" 
                icon={<LoginOutlined />} 
                onClick={() => {
                    setmodal_novo(true)
                    }}
                >Novo Alvo</Button>
            </div>
            <Table 
              columns={columns} 
              dataSource={alvos} 
              onChange={onChange} 
              expandable={{
                expandedRowRender: (record) => (
                  <div className='container-furos'>
                    <ListaFuros 
                      alvoID={record.id}
                    />
                  </div>
                )
              }}
              key='tableAlvo'
              rowKey='id'
            />
            <ModalNovoAlvo 
                projetoId={projeto.id} 
                modal_novo={modal_novo} 
                setmodal_novo={setmodal_novo}
            />
            <ModalAtualizaAlvo
                modal_edicao = {modal_edicao} 
                setmodal_edicao = {setmodal_edicao} 
                alvo = {alvo}
            /> 
        </div>
    )
}

function ListaTurnos({projeto, turnos}){
    const [modal_novo, setmodal_novo] = useState(false);
    const [modal_edicao, setmodal_edicao] = useState(false);
    const [turno, setTurno] = useState({});


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    
    const ModalNovoTurno = ({projetoId, modal_novo, setmodal_novo}) => {
        const [form] = Form.useForm();
      
        const salvarTurno = async (nomeTurno,codigo, inicio, termino, projetoId) => {
          const response = await projetoServices.salvarTurno(nomeTurno, codigo, inicio, termino, projetoId);
          console.log('salvarTurno', response)    
          if(response.success === true)
          {
            message.success('Alvo adicionado com sucesso!');
          }    
        }
      
        function tog_novo() {
          setmodal_novo(!modal_novo)
        }
      
      
        function handleSubmit(e) {
          console.log('handleSubmit ->', form.getFieldsValue());
          if (form.getFieldValue('NomeTurno') != "") 
          {
            salvarTurno(form.getFieldValue('NomeTurno'), form.getFieldValue('Codigo'),form.getFieldValue('Inicio'),form.getFieldValue('Termino'),  projetoId).then(() => {
              tog_novo()
            })
          }
        }

        return(
            <Modal
              visible={modal_novo}
              title="Novo Turno"
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
                    name="NomeTurno"
                    label="Nome do Turno"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Nome do Alvo"/>
                  </Form.Item>

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
                    name="Inicio"
                    label="Início"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TimePicker format={format}/>
                  </Form.Item>

                  <Form.Item 
                    name="Termino"
                    label="Termino"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TimePicker format={format}/>
                  </Form.Item>
                </Form>
            </Modal>
        )
    }
      
    const ModalAtualizaTurno = ({modal_edicao, setmodal_edicao, turno}) => {
        const [form] = Form.useForm();
      
        const atualizarTurno = async (turnoAtualizado, turno) => {
          const response = await projetoServices.atualizarTurno(turnoAtualizado, turno);
          if(response.success === true)
          {
            message.success('Turno atualizado com sucesso!');
          }    
        }
      
        const loadInformacoes = () => {	
          form.setFieldsValue({
            NomeTurno: turno.NomeTurno,
            Codigo: turno.Codigo,
            Inicio: turno.Inicio,
            Termino: turno.Termino,
          });
      
          console.log('setting field value', form.getFieldValue('NomeTurno'))
        }
      
        useEffect(() => {
              loadInformacoes();
          }, [turno]);
      
        const tog_edicao = () => {
          setmodal_edicao(!modal_edicao);
        }
      
        const handleSubmit = () => {
            atualizarTurno(form.getFieldValue() , turno).then(() => {
              tog_edicao()
            });
        }
      
        return(
          <Modal
              visible={modal_edicao}
              title="Editar Turno"
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
              {/* <Input type='hidden' id='id'  name='id' /> */}
              <Form.Item               
                name="NomeTurno"
                label="Nome do Turno"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input/>
              </Form.Item>
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
                name="Inicio"
                label="Início"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
                {/* <TimePicker format={format} value={moment(this, format)}/> */}
              </Form.Item>
              <Form.Item               
                name="Termino"
                label="Término"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
                {/* <TimePicker format={format} value={moment(this, format)}/> */}
              </Form.Item>
            </Form> 
            </Modal>
            
        )
    }
    
    const handleDeletar= async (turno) => {
        const response = await projetoServices.deleteTurno(turno);
        if(response.success === true)
        {
        message.success('Turno excluído com sucesso!');
        }    
    }

    function handleEditar(turno){
        setTurno(turno);
        setmodal_edicao(true);
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
            title: 'Nome do Turno',
            dataIndex: 'NomeTurno',
            sorter: (a, b) => a.NomeTurno.localeCompare(b.NomeTurno),
            defaultSortOrder: 'ascend',
            ...getColumnSearchProps('NomeTurno'),
        },
        { 
            title: 'Código',
            dataIndex: 'Codigo',
        },
        { 
            title: 'Início',
            dataIndex: 'Inicio',
        },
        { 
            title: 'Termino',
            dataIndex: 'Termino',
        },
        {
            title: 'Ação',
            key: 'action',
            render: (_, record) =>
                turnos.length >= 1 ? (                
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
                <Button type="primary" 
                icon={<ClockCircleOutlined />} 
                onClick={() => {
                    setmodal_novo(true)
                    }}
                >Novo Turno</Button>
            </div>
            <Table columns={columns} dataSource={turnos} onChange={onChange} key='tableTurno' rowKey='id'/>
            <ModalNovoTurno 
                projetoId={projeto.id} 
                modal_novo={modal_novo} 
                setmodal_novo={setmodal_novo}
            />
            <ModalAtualizaTurno
                modal_edicao = {modal_edicao} 
                setmodal_edicao = {setmodal_edicao} 
                turno = {turno}
            /> 
        </div>
    )
}

function ListaEquipe({projeto, membrosProjeto})
{
    const [modal_novo, setmodal_novo] = useState(false);
    const [modal_edicao, setmodal_edicao] = useState(false);
    const [objeto, setObjeto] = useState({});


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    
    const ModalNovaObjeto = ({modal_novo, setmodal_novo, titulo, projetoID}) => {
        const [form] = Form.useForm();
      
        const salvarObjeto = async (equipe, projetoID) => {
          const response = await projetoServices.salvarEquipeProjeto(equipe, projetoID);
          if(response.success === true)
          {
            message.success('Membro adicionado com sucesso!');
          }    
        }
      
        function tog_novo() {
          setmodal_novo(!modal_novo)
        }

        function handleSubmit(e) {
          salvarObjeto(form.getFieldsValue(), projetoID).then(() => {
            tog_novo()
          })
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
                    <SelectEquipe 
                      name={'Equipe'}
                      label={'Membros da Equipe'}
                    />
                </Form>
            </Modal>
        )
    } 
    
    const handleDeletar= async (objeto) => {
        const response = await projetoServices.deleteEquipeProjeto(objeto);
        if(response.success === true)
        {
        message.success('Membro excluído com sucesso!');
        }    
    }

    const handleAlterarStatus = async (status, objeto) => {
        const response = await projetoServices.setEquipeProjetoAtivo(status, objeto);
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
          title: 'Função',
          dataIndex: 'Equipe',
          render: (item) => item != null ? (Object.values(item)[2]) : null,
          sorter: (a, b) => {console.log('sort ->', Object.values(a)[2], Object.values(b)[2]); },
          // defaultSortOrder: 'ascend',
        },        
        { 
            title: 'Nome',
            dataIndex: 'Equipe',
            render: (item) => item != null ? (Object.values(item)[1]) : null,   
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
          membrosProjeto.length >= 1 ? (
            <Space size="middle">
                <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => handleDeletar(record)}>
                    <a>Excluír</a>
                </Popconfirm>
            </Space>
            
          ) : null,
        },
    ];

    return(
        <div>
            <div className='title'>
                
                <Button type="primary" 
                icon={<TeamOutlined />} 
                onClick={() => {
                    setmodal_novo(true)
                    }}
                >Adicionar Membros</Button>
            </div>
            <Table columns={columns} dataSource={membrosProjeto} onChange={onChange} key='tableEquipe' rowKey='id'/>
            <ModalNovaObjeto 
                  modal_novo={modal_novo} 
                  setmodal_novo={setmodal_novo}
                  titulo = 'Adicionar Equipe'
                  projetoID={projeto.id}
            />
        </div>
    )
}

function TabsProjeto({projeto, alvos, turnos, membrosProjeto}){
    
    return(
        <Tabs defaultActiveKey="1">
            <TabPane
                tab={<span><LoginOutlined /> Alvos </span>}
                key="1"
            >   
                <ListaAlvos 
                    projeto={projeto} 
                    alvos={alvos} 
                />
                
            </TabPane>

            <TabPane
                tab={<span><ClockCircleOutlined /> Turnos</span>}
                key="2"
            >
                <ListaTurnos
                    projeto={projeto}
                    turnos={turnos}
                />
            </TabPane>
            <TabPane
                tab={<span><TeamOutlined /> Equipe</span>}
                key="3"
            >
                <ListaEquipe
                    projeto={projeto}
                    membrosProjeto={membrosProjeto}
                />
            </TabPane>
        </Tabs>
    )
}

function DetalheProjetoPage() {
  const history = useHistory();
  const data = history.location.state.data;

  const [alvos, setAlvos] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [membrosProjeto, setMembrosProjeto] = useState([]);

  const [modal, setModal] = useState(false);

  const ModalDuplicar = ({projetoId, modal, setmodal}) => {
    const [form] = Form.useForm();

    const [duplicarTurno, setDuplicarTurno] = useState(false);
    const [duplicarEquipe, setDuplicarEquipe] = useState(false);
  
    function tog_novo() {
      setmodal(!modal)
    }
  
    const onChangeTurno = (e) => {
      console.log(`checked = ${e.target.checked}`);
      setDuplicarTurno(e.target.checked);
    };

    const onChangeEquipe = (e) => {
      console.log(`checked = ${e.target.checked}`);
      setDuplicarEquipe(e.target.checked);
    };
  
    async function handleSubmit(e) {
      console.log('handleSubmit ->', form.getFieldsValue());
      setmodal(false);
      const response = await projetoServices.duplicarProjeto(projetoId, duplicarTurno, duplicarEquipe);
      if(response === true ){
          message.success('Projeto duplicado com sucesso!');
      }
    }

    return(
        <Modal
          visible={modal}
          title="Duplicar Projeto"
          onOk={tog_novo}
          onCancel={tog_novo}
          footer={[
            <Button key="back" onClick={tog_novo}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={handleSubmit}>
              Duplicar
            </Button>,
          ]}
        >
            <span>Selecione as opções que deseja duplicar.</span>
            <Form
              layout='vertical'
              form={form}
              initialValues={{
                layout: 'vertical',
              }}
            >
              <Form.Item 
                name="Turno"
                label=""
              >
                <Checkbox onChange={onChangeTurno}>Turnos</Checkbox>
              </Form.Item>
              <Form.Item 
                name="Equipe"
                label=""
              >
                <Checkbox onChange={onChangeEquipe}>Equipe</Checkbox>
              </Form.Item>
            </Form>
        </Modal>
    )
  }


  useEffect(() => {
    const subscription = DataStore.observeQuery(Alvo).subscribe((snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. 
        const { items, isSynced } = snapshot;    
        console.log('get alvo ->', data.id)
        getAlvos(data.id);
      });
      const subscription2 = DataStore.observeQuery(Turno).subscribe((snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. 
        const { items, isSynced } = snapshot;    
        getTurnos(data.id);
      });
      const subscription3 = DataStore.observeQuery(EquipeProjeto).subscribe((snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. 
        const { items, isSynced } = snapshot;    
        getMembrosEquipe(data.id);
      });
  
      //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
      return function cleanup() {
        subscription.unsubscribe();
        subscription2.unsubscribe();
      }
  }, [])

  const getAlvos = async (projetoID) => {
    console.log("getAlvos => ", projetoID);
    const response = await projetoServices.getAlvos(projetoID);
    setAlvos(response);
    console.log('alvos ->', response)
  }

  const getTurnos = async (projetoID) => {
    const response = await projetoServices.getTurnos(projetoID);
    setTurnos(response);
    console.log('turnos ->', response)
  }

  const getMembrosEquipe = async (projetoID) => {
    const response = await projetoServices.getEquipeProjeto(projetoID);
    setMembrosProjeto(response);
    console.log('membros ->', response)
  }

  const handleDuplicarProjeto = async (projetoID) => { 
    setModal(true);
  }

  //create a function to import the data from excel file  and save it in the database 
  const importarAlvos = async (file) => {
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
        console.log("1 => ", element.NomeAlvo);
        console.log("2 => ", element.projetoID);
        const response =  await  await projetoServices.salvarAlvo(element.NomeAlvo, element.projetoID);
        console.log('response => ',response)

      });
    };
    reader.readAsBinaryString(file);
  }

  const importarTurnos = async (file) => {
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
        const response =  await  await projetoServices.salvarTurno(element.NomeTurno, element.Codigo, element.Inicio, element.Termino, element.projetoID);
        console.log('response => ',response)

      });
    };
    reader.readAsBinaryString(file);
  }

  const importarEquipe = async (file) => {
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
        const response = await projetoServices.salvarEquipeProjetoUnico(element.equipeID, element.projetoID);

        console.log('response => ',response)
      });
    };
    reader.readAsBinaryString(file);
  }

  return (
    <div>
        <div className='title'>
            <h1>Projeto: {data.NomeProjeto} / {data.Cliente.NomeCliente}</h1>
            <Button type="primary" 
                icon={<CopyOutlined />} 
                onClick={() => {
                    handleDuplicarProjeto(data.id)
                }}
            >
                Duplicar Projeto
            </Button>
            {/* <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                importarEquipe(file);
              }}
            /> */}
        </div>
        <ModalDuplicar 
          projetoId={data.id} 
          modal={modal} 
          setmodal={setModal}
        />

        <TabsProjeto 
            projeto={data}  
            alvos={alvos}
            turnos={turnos}
            membrosProjeto={membrosProjeto}
        />
    </div>
  )
}

export default DetalheProjetoPage