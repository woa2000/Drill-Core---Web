import React, {useEffect, useState, useRef} from 'react'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Col, Row, Table, Button, Input, message, Space, Switch, Select, Popconfirm, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import {DataStore} from 'aws-amplify';

import './styles.css';

import * as clienteServices from '../../services/clienteServices';
import { Cliente } from '../../models';

import * as XLSX from 'xlsx';

const { Option } = Select;

const ModalNovoCliente = ({modal_novo, setmodal_novo}) => {
  const [form] = Form.useForm();

  const [nomeCliente, setNomeCliente] = useState('')
  const [logoCliente, setLogoCliente] = useState('')

  const salvarCliente = async (nomeCliente, logoCliente) => {
    const response = await clienteServices.salvarCliente(nomeCliente, logoCliente);
    console.log('salvarCliente', response)    
    if(response.success === true)
    {
      message.success('Cliente adicionado com sucesso!');
    }    
  }

  function tog_novo() {
    setmodal_novo(!modal_novo)
  }

  const handleNomeChange = (e) => {
    setNomeCliente(e.target.value);
  }

  const handleLogoChange = (value) => {
    setLogoCliente(value);
  };

  function handleSubmit(e) {
    if (nomeCliente != "") 
    {
      console.log('salvarMembro', nomeCliente, logoCliente)
      salvarCliente(nomeCliente, logoCliente).then(() => {
        tog_novo()
      })
    }
  }
  return(
<Modal
        visible={modal_novo}
        title="Novo Cliente"
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
              name="NomeCliente"
              label="Nome"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Nome Completo"  onChange={handleNomeChange}/>
            </Form.Item>
            <Form.Item 
              name="LogoCliente"
              label="Url Logo"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input placeholder="Nome Completo"  onChange={handleLogoChange}/>
            </Form.Item>
          </Form>
      </Modal>
  )
}

const ModalAtualizaCliente = ({modal_edicao, setmodal_edicao, cliente}) => {
  const [form] = Form.useForm();

  const atualizarCliente = async (clienteAtualizado, cliente) => {
    const response = await clienteServices.atualizarCliente(clienteAtualizado, cliente);
    console.log('atualizarCliente', response)    
    if(response.success === true)
    {
      message.success('Cliente atualizado com sucesso!');
    }    
  }

  const loadInformacoes = () => {	
    form.setFieldsValue({
      NomeCliente: cliente.NomeCliente,
      LogoCliente: cliente.LogoCliente,
      Ativo: cliente.Ativo,
    });
    console.log('setting field value', form.getFieldValue('NomeCliente'))
	}

  useEffect(() => {
		loadInformacoes();
	}, [cliente]);

  const tog_edicao = () => {
    setmodal_edicao(!modal_edicao);
  }

  const handleSubmit = () => {
      console.log('cliente para edição ->', cliente)
      console.log('cliente atualizado ->', form.getFieldValue());
      atualizarCliente(form.getFieldValue() , cliente).then(() => {
        tog_edicao()
      });
  }

  return(
    <Modal
        visible={modal_edicao}
        title="Editar Cliente"
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
          name="NomeCliente"
          label="Nome"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item               
          name="LogoCliente"
          label="Url Logo"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input/>
        </Form.Item>
      </Form> 
      </Modal>
      
  )
}

const ListaClientes = ({clientes, setmodal_edicao, setCliente}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const alterarStatus = async (status, cliente) => {
    const response = await clienteServices.setAtivo(status, cliente);
    if(response.success === true)
    {
      // message.success('Status alterado com sucesso!');
      //getEquipes()
    }    
  }

  const deletarCliente = async (cliente) => {
    const response = await clienteServices.deleteCliente(cliente);
    if(response.success === true)
    {
      message.success('Cliente excluído com sucesso!');
      //getEquipes()
    }    
  }

  function handleEditar(cliente) {
    setCliente(cliente);
    console.log('cliente selecionado', cliente)
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
      title: 'Nome',
      dataIndex: 'NomeCliente',
      key: 'NomeCliente',
      sorter: (a, b) => a.NomeCliente.localeCompare(b.NomeCliente),
      defaultSortOrder: 'ascend',
      ...getColumnSearchProps('NomeCliente'),
    },
    {
      title: 'Logo Cliente',
      dataIndex: 'LogoCliente',
      key: 'LogoCliente',      
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
          onClick={() => alterarStatus(!record.Ativo, record)}
        />
        </Space>
      )
    },
    {
      title: 'Ação',
      key: 'action',
      render: (_, record) =>
        clientes.length >= 1 ? (
          
          <Space size="middle">
            <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => deletarCliente(record)}>
                <a>Excluír</a>
            </Popconfirm>
            <a onClick={() => handleEditar(record)}>Editar</a> 
          </Space>
          
        ) : null,
    },
  ];
  
  useEffect(() => {
    console.log('clientes componente', clientes)
  }, [])

  return(
    <Table columns={columns} dataSource={clientes} onChange={onChange} key='id'/>
  )

}

function ClientePage() {
  const [form] = Form.useForm();

  const [clientes, setClientes] = useState([]);
  const [modal_novo, setmodal_novo] = useState(false)
  const [modal_edicao, setmodal_edicao] = useState(false)

  const [cliente, setCliente] = useState({});
  
  //create a function to import the data from excel file  and save it in the database 
  const importarCliente = async (file) => {
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
        console.log('linha => ',element.Nome, 'Cargo => ', element.Cargo)
        const response =  await clienteServices.salvarCliente(element.NomeCliente, element.LogoCliente);
        console.log('response => ',response)

      });
    };
    reader.readAsBinaryString(file);
  }

  useEffect(() => {
    const subscription = DataStore.observeQuery(Cliente).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;    
      getClientes();
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }
  }, [])

  const getClientes = async () => {
    const response = await clienteServices.getClientes();
    setClientes(response);
    console.log('clientes', response)
  }
    
  

  return (
    <div>
      <div className='title'>
        <h1>Clientes</h1>
        <Button type="primary" 
          icon={<UserAddOutlined />} 
          onClick={() => {
              setmodal_novo(true)
            }}
        >Novo Cliente</Button>
        {/* <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            importarCliente(file);
          }}
        /> */}
      </div>

      <ListaClientes
        clientes={clientes}  
        setmodal_edicao={setmodal_edicao}
        setCliente={setCliente}
      />

      <ModalNovoCliente
        modal_novo = {modal_novo}
        setmodal_novo = {setmodal_novo}
      />  

      <ModalAtualizaCliente
        modal_edicao = {modal_edicao} 
        setmodal_edicao = {setmodal_edicao} 
        cliente = {cliente}
      />        
      
    </div>
  )
}

export default ClientePage