import React, {useState, useEffect} from 'react'

import {DataStore} from 'aws-amplify';

import { Select, Form } from 'antd'

import * as clienteServices from '../../services/clienteServices';
import { Cliente } from '../../models';

const { Option } = Select;

function SelectCliente({name, label}) {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        console.log('Componente Select Cliente renderizado')
        const subscription = DataStore.observeQuery(Cliente).subscribe((snapshot) => {
            //isSynced can be used to show a loading spinner when the list is being loaded. 
            const { items, isSynced } = snapshot;    
            getClientesAtivos();
          });
      
          //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
          return function cleanup() {
            subscription.unsubscribe();
          }
    },[]);

    const getClientesAtivos = async () => {
        const response = await clienteServices.getClientesAtivos();
        setClientes(response);
        console.log('cliente ativos ->',response);
    }

  return (
    <Form.Item 
        name={name}
        label={label}
        rules={[
        {
            required: false,
        },
        ]}
    >
        <Select
            style={{
                width: '100%',
            }}
            name={name}
            id={name}
        >
            {clientes.map(item => (
            <Option value={item.id}>{item.NomeCliente}</Option>
        ))}
        </Select>
    </Form.Item>
  )
}

export default SelectCliente