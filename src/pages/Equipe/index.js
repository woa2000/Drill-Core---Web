import React, {useEffect, useState, useRef} from 'react'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Col, Row, Table, Button, Input, message, Space, Switch, Select, Popconfirm, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import { DataStore, Predicates, SortDirection, Auth } from 'aws-amplify';

import './styles.css';

import * as equipeServices from '../../services/equipeServices';
import { Equipe } from '../../models';

const { Option } = Select;

const ModalNovoMembro = ({modal_novo, setmodal_novo}) => {
  const [form] = Form.useForm();

  const [nome, setNome] = useState('')
  const [funcao, setFuncao] = useState('Supervisor')

  const salvarMembro = async (nome, funcao) => {
    const response = await equipeServices.salvarMembro(nome, funcao);
    console.log('salvarMembro', response)    
    if(response.success === true)
    {
      message.success('Membro adicionado com sucesso!');
    }    
  }

  function tog_novo() {
    setmodal_novo(!modal_novo)
  }

  const handleFuncaoChange = (value) => {
    setFuncao(value);
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  }

  function handleSubmit(e) {
    if (nome != "") 
    {
      console.log('salvarMembro', nome, funcao)
      salvarMembro(nome, funcao).then(() => {
        tog_novo()
      })
    }
  }
  return(
<Modal
        visible={modal_novo}
        title="Novo Membro"
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
              name="Nome"
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
              name="Funcao"
              label="Função"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                defaultValue="Supervisor"
                style={{
                  width: '100%',
                }}
                onChange={handleFuncaoChange}
                name="funcao"
                id='funcao'
              >
                <Option value="Supervisor">Supervisor</Option>
                <Option value="Operador">Operador</Option>
                <Option value="Auxiliar">Auxiliar</Option>
                <Option value="Fiscal">Fiscal</Option>
              </Select>
            </Form.Item>
          </Form>
      </Modal>
  )
}

const ModalAtualizaMembro = ({modal_edicao, setmodal_edicao, membro}) => {
  const [form] = Form.useForm();

  const atualizarMembro = async (membroAtualizado, membro) => {
    const response = await equipeServices.atualizarMembro(membroAtualizado, membro);
    console.log('atualizarMembro', response)    
    if(response.success === true)
    {
      message.success('Membro atualizado com sucesso!');
    }    
  }

  const loadInformacoes = () => {	
    form.setFieldsValue({
      Nome: membro.Nome,
      Funcao: membro.Funcao,
      Ativo: membro.Ativo,
    });
	}

  useEffect(() => {
		loadInformacoes();
	}, [membro]);

  const tog_edicao = () => {
    setmodal_edicao(!modal_edicao);
  }

  const handleSubmit = () => {
      console.log('membro para edição ->', membro)
      console.log('membro atualizado ->', form.getFieldValue());
      atualizarMembro(form.getFieldValue() , membro).then(() => {
        tog_edicao()
      });
  }

  return(
    <Modal
        visible={modal_edicao}
        title="Editar Membro"
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
          name="Nome"
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
          name="Funcao"
          label="Função"
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
            name="funcao"
            id='funcao'
          >
            <Option value="Supervisor">Supervisor</Option>
            <Option value="Operador">Operador</Option>
            <Option value="Auxiliar">Auxiliar</Option>
            <Option value="Fiscal">Fiscal</Option>
          </Select>
        </Form.Item>
      </Form> 
      </Modal>
      
  )
}

const ListaMembros = ({equipe, setmodal_edicao, setMembro}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const alterarStatus = async (status, membro) => {
    const response = await equipeServices.setAtivo(status, membro);
    if(response.success === true)
    {
      // message.success('Status alterado com sucesso!');
      //getEquipes()
    }    
  }

  const deletarMembro = async (membro) => {
    const response = await equipeServices.deleteColaborador(membro);
    if(response.success === true)
    {
      message.success('Membro excluído com sucesso!');
      //getEquipes()
    }    
  }

  function handleEditar(membro) {
    setMembro(membro);
    console.log('membro selecionado', membro)
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
      dataIndex: 'Nome',
      key: 'Nome',
      sorter: (a, b) => a.Nome.localeCompare(b.Nome),
      defaultSortOrder: 'ascend',
      ...getColumnSearchProps('Nome'),
    },
    {
      title: 'Função',
      dataIndex: 'Funcao',
      key: 'Funcao',
      sorter: (a, b) => a.Funcao.localeCompare(b.Funcao),
      filters: [
        {
          text: 'Auxiliar',
          value: 'Auxiliar',
        },
        {
          text: 'Fiscal',
          value: 'Fiscal',
        },
        {
          text: 'Operador',
          value: 'Operador',
        },
        {
          text: 'Supervisor',
          value: 'Supervisor',
        }
      ],
      onFilter: (value, record) => record.Funcao.toLowerCase().search(value.toLowerCase()) !== -1,
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
        equipe.length >= 1 ? (
          
          <Space size="middle">
            <Popconfirm title="Realmente deseja excluír o registro?" onConfirm={() => deletarMembro(record)}>
                <a>Excluír</a>
            </Popconfirm>
            <a onClick={() => handleEditar(record)}>Editar</a> 
          </Space>
          
        ) : null,
    },
  ];
  
  useEffect(() => {
    
  }, [])

  return(
    <Table columns={columns} dataSource={equipe} onChange={onChange} key='TableEquipe' rowKey='id'/>
  )

}

function EquipePage() {
  const [form] = Form.useForm();

  const [equipe, setEquipe] = useState([]);
  const [modal_novo, setmodal_novo] = useState(false)
  const [modal_edicao, setmodal_edicao] = useState(false)

  const [membro, setMembro] = useState({});
  

  useEffect(() => {
    const subscription = DataStore.observeQuery(Equipe).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;    
      getEquipes();
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }
  }, [])

  const getEquipes = async () => {
     const response = await equipeServices.getMembros();
    setEquipe(response);
  }

  return (
    <div>
      <div className='title'>
        <h1>Equipe</h1>
        <Button type="primary" 
          icon={<UserAddOutlined />} 
          onClick={() => {
              setmodal_novo(true)
            }}
        >Novo Membro</Button>
      </div>

      <ListaMembros 
        equipe={equipe}  
        setmodal_edicao={setmodal_edicao}
        setMembro={setMembro}
      />

      <ModalNovoMembro
        modal_novo = {modal_novo}
        setmodal_novo = {setmodal_novo}
      />  

      <ModalAtualizaMembro
        modal_edicao = {modal_edicao} 
        setmodal_edicao = {setmodal_edicao} 
        membro = {membro}
      />        
      
    </div>
  )
}

export default EquipePage