import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { Table} from 'antd';
import 'antd/dist/antd.css';

import { DataStore } from 'aws-amplify';
import * as boletimServices from '../../services/boletimServices';
import { Boletim } from '../../models';


function HeaderBoletim({ boletim, furos }) {
  return (
    <div>
      <header className='w-full relative flex flex-row bg-slate-100 p-4'>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Data</div>
          <div>{boletim?.Data}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Cliente</div>
          <div>{boletim?.Alvo.Projeto.Cliente.NomeCliente}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Projeto</div>
          <div>{boletim?.Alvo.Projeto.NomeProjeto}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Alvo</div>
          <div>{boletim?.Alvo.NomeAlvo}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Sonda</div>
          <div>{boletim?.Sonda.NomeSonda}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Furo</div>
          <div>
            {
              furos?.map((furo) => {
                return (<div className='gap-1'>{furo}</div>)
              })
            }
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Inclinação</div>
          <div>{boletim?.Alvo.Projeto.NomeProjeto}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Azimute</div>
          <div>{boletim?.Alvo.NomeAlvo}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Turno</div>
          <div>{boletim?.Alvo.NomeAlvo}</div>
        </div>
      </header>
    </div>
  )
}

function CardsBoletim({ boletim }) {
  return (
    <div className='space-y-4'>
      <div className='border-2 border-slate-600 rounded-md flex flex-col relative'>
        <div className='flex-1 bg-blue-500 p-2 text-center text-white font-semibold'>
          HORÍMETRO
        </div>
        <div className='p-2 text-center'>
          <p>INICIAL</p>
          <span>{boletim?.HorimetroInicial}</span>
          <p>FINAL</p>
          <span>{boletim?.HorimetroFinal}</span>
        </div>
      </div>


      <div className='border-2 border-slate-600 rounded-md flex flex-col relative'>
        <div className='flex-1 bg-blue-500 p-2 text-center text-white font-semibold'>
          PERFURAÇÃO
        </div>
        <div className='p-2 text-center'>
          <p>TOTAL PERFURADO</p>
          <span>{boletim?.HorimetroInicial}</span>
          <p>TOTAL RECUPERADO</p>
          <span>{boletim?.HorimetroFinal}</span>
          <p>% RECUPERADO</p>
          <span>{boletim?.HorimetroFinal}</span>
        </div>
      </div>

      <div className='border-2 border-slate-600 rounded-md flex flex-col relative'>
        <div className='flex-1 bg-green-600 p-2 text-center text-white font-semibold'>
          <span>PRODUTIVAS</span>
          <div><span className='font-bold text-xl'>TOTAL: 05:00</span></div>
        </div>
        <div className='p-2 text-center'>
          <div>17 - 04:30</div>
          <div>19 - 00:30</div>
        </div>
      </div>

      <div className='border-2 border-slate-600 rounded-md flex flex-col relative'>
        <div className='flex-1 bg-blue-500 p-2 text-center text-white font-semibold'>
          <span>NÃO MECÂNICAS</span>
          <div><span className='font-bold text-xl'>TOTAL: 05:00</span></div>
        </div>
        <div className='p-2 text-center'>
          <div>17 - 04:30</div>
          <div>19 - 00:30</div>
        </div>
      </div>

      <div className='border-2 border-slate-600 rounded-md flex flex-col relative'>
        <div className='flex-1 bg-green-500 p-2 text-center text-white font-semibold'>
          <span>MECÂNICAS</span>
          <div><span className='font-bold text-xl'>TOTAL: 05:00</span></div>
        </div>
        <div className='p-2 text-center'>
          <div>17 - 04:30</div>
          <div>19 - 00:30</div>
        </div>
      </div>
    </div>
  )
}

function ListaAtividades({ atividades }) {
  console.log("componente atividades =>", atividades)
  
  const columns = [   
    { 
      title: 'Código',
      dataIndex: 'Atividade',
      render: (item) => {
        return <div>{item != null ? (item.Codigo) : (null)}</div>
      },   
  }, 
    { 
        title: 'Inicio',
        dataIndex: 'Inicio',
    }, 
    { 
      title: 'Termino',
      dataIndex: 'Termino',
    }, 
    { 
      title: 'Intervalo',
      dataIndex: 'Intervalo',
    }, 
    { 
      title: 'De',
      dataIndex: 'De',
    }, 
    { 
      title: 'Até',
      dataIndex: 'Ate',
    }, 
    { 
      title: 'Recuperação',
      dataIndex: 'Recuperacao',
    }, 
    { 
      title: '% Recuperação',
      dataIndex: 'PercentualRecuperacao',
    }, 
    { 
      title: 'Caixa',
      dataIndex: 'Caixa',
    }, 
    { 
      title: 'Orientação',
      dataIndex: 'Ate',
    }, 
];


  return (
    <Table columns={columns} dataSource={atividades} pagination={{ position: ["none", "none"] }} key="tableAtividades" />
  )
}

function DetalheBoletimPage() {
  const history = useHistory();
  const data = history.location.state.data;

  const [boletim, setBoletim] = useState();
  const [furos, setFuros] = useState();
  const [atividades, setAtividades] = useState();

  useEffect(() => {
    const subscription = DataStore.observeQuery(Boletim).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;
      getBoletim(data.id);
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }
  }, []);

  const getBoletim = async (id) => {
    const response = await boletimServices.get(id);
    setBoletim(response);

    const response2 = await boletimServices.getFuros(id);
    setFuros(response2);

    const response3 = await boletimServices.getAtividades(id);
    setAtividades(response3);
    console.log('atividades ->', response3);
  }

  return (
    <div>
      <HeaderBoletim
        boletim={boletim}
        furos={furos}
      />
      {/* <div className="flex">
        <div className='flex-1 p-2'>
          <ListaAtividades
            atividades={atividades}
          />
        </div>
        <div className='w-52 p-2 relative'>
          <CardsBoletim
            boletim={boletim}
          />
        </div>
      </div> */}
      <div className='flex flex-col flex-1 bg-red-500'>
        Footer
      </div>
    </div>
  )
}

export default DetalheBoletimPage