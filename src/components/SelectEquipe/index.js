import React, {useState, useEffect} from 'react'

import {DataStore} from 'aws-amplify';

import { Select, Form } from 'antd'

import * as equipeServices from '../../services/equipeServices';
import { Equipe } from '../../models';

const { Option } = Select;

function SelectEquipe({name, label}) {

    const [membros, setMembros] = useState([])

    useEffect(() => {
        console.log('Componente Select Equipe renderizado')
        const subscription = DataStore.observeQuery(Equipe).subscribe((snapshot) => {
            //isSynced can be used to show a loading spinner when the list is being loaded. 
            getMembrosAtivos();
          });
      
          //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
          return function cleanup() {
            subscription.unsubscribe();
          }
    },[]);

    const getMembrosAtivos = async () => {
        const response = await equipeServices.getMembrosAtivos();
        setMembros(response);
        console.log('membros ativos ->',response);
    }

    const renderOptions = (membros) => {
        const groups = membros;
        return membros.map(item => (
            <Option value={item.id}>{item.Nome}</Option>
        ))
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
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Selecione os membros da equipe"
            // onChange={handleChange}
        >
             {renderOptions(membros)}
        </Select>
    </Form.Item>
  )
}

export default SelectEquipe

