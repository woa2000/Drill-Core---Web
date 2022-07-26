import React, {useEffect, useState, useRef} from 'react'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Col, Row, Table, Button, Input, message, Space, Switch, Select, Popconfirm, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import { useHistory } from 'react-router-dom';

import {DataStore} from 'aws-amplify';

import './styles.css';

import * as projetoServices from '../../services/projetoServices';
import { Projeto } from '../../models';
import SelectCliente from '../../components/SelectCliente';
import internal from 'stream';

const { Option } = Select;

const ModalNovoProjeto = ({modal_novo, setmodal_novo}) => {
  const [form] = Form.useForm();

  const [nomeProjeto, setNomeProjeto] = useState('')
  const [clienteId, setClienteId] = useState('')

  const salvarProjeto = async (nomeProjeto, clienteId) => {
    const response = await projetoServices.salvarProjeto(nomeProjeto, clienteId);
    console.log('salvarProjeto', response)    
    if(response.success === true)
    {
      message.success('Projeto adicionado com sucesso!');
    }    
  }

  function tog_novo() {
    setmodal_novo(!modal_novo)
  }

  const handleNomeChange = (e) => {
    setNomeProjeto(e.target.value);
  }

  function handleSubmit(e) {
    console.log('handleSubmit ->', form.getFieldsValue());
    if (nomeProjeto != "") 
    {
      salvarProjeto(form.getFieldValue('NomeProjeto'), form.getFieldValue('clienteID')).then(() => {
        tog_novo()
      })
    }

    setNomeProjeto('');
    setClienteId('');
  }
  return(
<Modal
        visible={modal_novo}
        title="Novo Projeto"
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
              name="NomeProjeto"
              label="Nome do Projeto"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Nome do Projeto"  onChange={handleNomeChange}/>
            </Form.Item>            
            <SelectCliente name='clienteID' label='Cliente'/>
          </Form>
      </Modal>
  )
}

const ModalAtualizaCliente = ({modal_edicao, setmodal_edicao, projeto}) => {
  const [form] = Form.useForm();

  const atualizarProjeto = async (projetoAtualizado, projeto) => {
    const response = await projetoServices.atualizarProjeto(projetoAtualizado, projeto);
    if(response.success === true)
    {
      message.success('Projeto atualizado com sucesso!');
    }    
  }

  const loadInformacoes = () => {	
    form.setFieldsValue({
      NomeProjeto: projeto.NomeProjeto,
      clienteID: projeto.clienteID,
    });

    console.log('setting field value', form.getFieldValue('NomeProjeto'))
  }

  useEffect(() => {
		loadInformacoes();
	}, [projeto]);

  const tog_edicao = () => {
    setmodal_edicao(!modal_edicao);
  }

  const handleSubmit = () => {
      atualizarProjeto(form.getFieldValue() , projeto).then(() => {
        tog_edicao()
      });
  }

  return(
    <Modal
        visible={modal_edicao}
        title="Editar Projeto"
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
          name="NomeProjeto"
          label="Nome do Projeto"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <SelectCliente name='clienteID' label='Cliente'/>
      </Form> 
      </Modal>
      
  )
}

const ListaClientes = ({projetos, filtroClientes, setmodal_edicao, setProjeto}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const history = useHistory();

  const deletarProjeto = async (projeto) => {
    const response = await projetoServices.deleteProjeto(projeto);
    if(response.success === true)
    {
      message.success('Projeto excluído com sucesso!');
      //getEquipes()
    }    
  }

  const handleDuplicarProjeto = async (projetoID) => { 
    const response = await projetoServices.duplicarProjeto(projetoID);
    if(response.success === true)
    {
        message.success('Projeto duplicado com sucesso!');
    }    
  }

  function handleEditar(projeto) {
    setProjeto(projeto);
    setmodal_edicao(true);
  }

  function handleDetalhes(projeto){
    console.log('handleDetales', projeto)
    history.push('/detalheprojeto',{data: projeto})
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
      title: 'Nome do Projeto',
      dataIndex: 'NomeProjeto',
      // key: 'NomeProjeto',
      sorter: (a, b) => a.NomeProjeto.localeCompare(b.NomeProjeto),
      defaultSortOrder: 'ascend',
      ...getColumnSearchProps('NomeProjeto'),
    },
    {
      title: 'Cliente',
      dataIndex: 'Cliente',
      // key: 'clienteID',
      render: (item) => item != null ? (Object.values(item)[1]) : (null),   
      onFilter: (value, record) => record.Cliente.NomeCliente.toString().search(value) !== -1,
    },  
    {
      title: 'Ação',
      key: 'action',
      render: (_, record) =>
        projetos.length >= 1 ? (
          
          <Space size="middle">
            <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => deletarProjeto(record)}>
                <a>Excluír</a>
            </Popconfirm>
            <a onClick={() => handleEditar(record)}>Editar</a> 
            <a onClick={() => handleDetalhes(record)}>Detalhes</a> 
          </Space>
          
        ) : null,
    },
  ];
  
  useEffect(() => {
    console.log('clientes componente', projetos)
  }, [])

  return(
    <Table columns={columns} dataSource={projetos} onChange={onChange} key='id'/>
  )

}

function ProjetoPage() {
  const [form] = Form.useForm();

  const [projetos, setProjetos] = useState([]);
  const [clientes, setClientes] = useState(false);
  const [modal_novo, setmodal_novo] = useState(false)
  const [modal_edicao, setmodal_edicao] = useState(false)

  const [projeto, setProjeto] = useState({});
  

  useEffect(() => {
    const subscription = DataStore.observeQuery(Projeto).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;    
      getProjetos();
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }
  }, [])

  const getProjetos = async () => {
    const response = await projetoServices.getProjetos();
    setProjetos(response);
    console.log('projetos ->', response)
    const lstclientes = response.map(item => {
      return {
        value: item.Cliente.NomeCliente,
      }
    })
    
    const result = [];
    const map = new Map();
    for (const item of lstclientes) {
        if(!map.has(item.value)){
            map.set(item.value, true);    // set any value to Map
            result.push({
                value: item.value,
                text: item.value
            });
        }
    }

    setClientes(result)

    console.log('clientes -> ', clientes )
  }

  return (
    <div>
      <div className='title'>
        <h1>Projetos</h1>
        <Button type="primary" 
          icon={<UserAddOutlined />} 
          onClick={() => {
              setmodal_novo(true)
            }}
        >Novo Projeto</Button>
      </div>

      <ListaClientes
        projetos={projetos}  
        filtroClientes={clientes} 
        setmodal_edicao={setmodal_edicao}
        setProjeto={setProjeto}
      />

      <ModalNovoProjeto
        modal_novo = {modal_novo}
        setmodal_novo = {setmodal_novo}
      />  

      <ModalAtualizaCliente
        modal_edicao = {modal_edicao} 
        setmodal_edicao = {setmodal_edicao} 
        projeto = {projeto}
      />        
      
    </div>
  )
}

export default ProjetoPage