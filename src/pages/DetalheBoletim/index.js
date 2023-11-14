import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Pdf from "react-to-pdf";

import './styles.css';

import { Table } from 'antd';
import Moment from 'react-moment';
import 'antd/dist/antd.css';
import Logo from '../../assets/images/logo.svg';

import { DataStore } from 'aws-amplify';
import * as boletimServices from '../../services/boletimServices';
import * as teamService from '../../services/teamServices';
import { Boletim } from '../../models';

import {
  IListActivities,
  IElectronicBulletinDetailsParams,
  ITableHeaderData,
  IBulletinActivities
} from '../../interfaces/interfaces';



function HeaderBoletim({ boletim, furos, supervisor, operator, assistant }) {
  return (
    <div>
      <header className='w-full relative flex flex-row bg-slate-100 header-boletim'>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Data</div>
          <div><Moment format='DD/MM/YYYY'>{boletim?.date}</Moment></div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Cliente</div>
          <div>{boletim?.client}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Projeto</div>
          <div>{boletim?.project}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Alvo</div>
          <div>{boletim?.target}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Sonda</div>
          <div>{boletim?.probe}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold '>Inclinação</div>
          <div>{boletim?.inclination}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Azimute</div>
          <div>{boletim?.azimuth}</div>
        </div>
      </header>
      <header className='w-full relative flex flex-row bg-slate-100 header-boletim'>
        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Turno</div>
          <div>{boletim?.turn}</div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Supervisor</div>
          {
            supervisor?.map((item) => {
              return <div className='gap-1'>{item}</div>
            })
          }
        </div>

        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Operador</div>
          {
            operator?.map((item) => {
              return <div className='gap-1'>{item}</div>
            })
          }
        </div>

        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Auxiliar</div>
          {
            assistant?.map((item) => {
              return <div className='gap-1'>{item}</div>
            })
          }
        </div>

        <div className='flex flex-col flex-1'>
          <div className='font-semibold'>Furo</div>
          <div>
            {
              furos?.map((hole) => {
                return <div className='gap-1'>{hole.Furo.NomeFuro}  {hole.Ativo ? '(A)' : '(I)'}</div>
              })
            }
          </div>
        </div>
      </header>
    </div>
  )
}

function CardsBoletim({ boletim, perfurationResult, produtivas, mecanicas, naoMecanicas }) {
  return (
    <div className='space-y-4 flex flex-row cards-boletim'>
      <div className='border-2 border-slate-600 rounded-md flex flex-col relative card'>
        <div className='bg-blue-500 p-2 text-center text-white font-semibold box'>
          HORÍMETRO
        </div>
        <div className='p-2 text-center'>
          <p>INICIAL</p>
          <span>{boletim?.startHour}</span>
          <p>FINAL</p>
          <span>{boletim?.endHour}</span>
        </div>
      </div>

      <div className='border-2 border-slate-600 rounded-md flex flex-col relative card'>
        <div className='bg-blue-500 p-2 text-center text-white font-semibold box'>
          PERFURAÇÃO
        </div>
        <div className='p-2 text-center'>
          <p>TOTAL PERFURADO</p>
          <span>{perfurationResult?.TotalPerfurado}</span>
          <p>TOTAL RECUPERADO</p>
          <span>{perfurationResult?.TotalRecuperado.toFixed(2)}</span>
          <p>% RECUPERADO</p>
          <span>{perfurationResult?.PercentualRecuperacao}</span>
        </div>
      </div>

      <div className='border-2 border-slate-600 rounded-md flex flex-col relative card'>
        <div className='bg-green-600 p-2 text-center text-white font-semibold box'>
          <span>PRODUTIVAS</span>
          <div><span className='font-bold text-xl'>TOTAL: {produtivas?.TotalHoras}</span></div>
        </div>
        <div className='p-2 text-center'>
          {
            produtivas?.AtividadesPorHora != null &&
            produtivas?.AtividadesPorHora.map((atividade, index) => (
              <div key={index}>{atividade.Codigo} - {atividade.Intervalo}</div>
            ))
          }
        </div>
      </div>

      <div className='border-2 border-slate-600 rounded-md flex flex-col relative card'>
        <div className='bg-yellow-500 p-2 text-center text-white font-semibold box'>
          <span>NÃO MECÂNICAS</span>
          <div><span className='font-bold text-xl'>TOTAL: {naoMecanicas?.TotalHoras}</span></div>
        </div>
        <div className='p-2 text-center'>
          {
            naoMecanicas?.AtividadesPorHora != null &&
            naoMecanicas?.AtividadesPorHora.map((atividade, index) => (
              <div key={index}>{atividade.Codigo} - {atividade.Intervalo}</div>
            ))
          }
        </div>
      </div>

      <div className='border-2 border-slate-600 rounded-md flex flex-col relative card'>
        <div className='bg-gray-500 p-2 text-center text-white font-semibold box'>
          <span>MECÂNICAS</span>
          <div><span className='font-bold text-xl'>TOTAL: {mecanicas?.TotalHoras}</span></div>
        </div>
        <div className='p-2 text-center'>
          {
            mecanicas?.AtividadesPorHora != null &&
            mecanicas?.AtividadesPorHora.map((atividade, index) => (
              <div key={index}>{atividade.Codigo} - {atividade.Intervalo}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

function ListaAtividades({ atividades }) {
  const [size, setSize] = useState('small');
  const tableProps = {
    size
  };

  const columns = [
    {
      title: 'Código',
      dataIndex: 'Codigo',
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
      title: 'Furo',
      dataIndex: 'Furo',
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
      title: 'Recup.',
      dataIndex: 'Recuperacao',
    },
    {
      title: '% Recup.',
      dataIndex: 'PercentualRecuperacao',
    },
    {
      title: 'Caixa',
      dataIndex: 'Caixa',
    },
    {
      title: 'Orientação',
      dataIndex: 'CodigoOrientacao',
    },
  ];


  return (
    <Table 
      {...tableProps}
      columns={columns} dataSource={atividades} 
      pagination={{ position: ["none", "none"] }} 
      key="tableAtividades" />
  )
}

function DetalheBoletimPage() {
  const history = useHistory();
  const data = history.location.state.data;

  const [boletim, setBoletim] = useState();
  const [holes, setHoles] = useState();
  const [activeHole, setActiveHole] = useState();
  const [supervisor, setSupervisor] = useState([]);
  const [operator, setOperator] = useState([]);
  const [assistant, setAssistant] = useState([]);

  const [furos, setFuros] = useState();
  const [atividades, setAtividades] = useState();
  const [perfurationResult, setPerfurationResult] = useState(null);
  const [produtivas, setProdutivas] = useState(null);
  const [mecanicas, setMecanicas] = useState(null);
  const [naoMecanicas, setNaoMecanicas] = useState(null);

  const ref = React.createRef();

  const options = {
    orientation: 'portraid',
    unit: 'in',
  };

  async function loadData(id) {
    const responseFormatted = {
      date: data.Data,
      client: data.Alvo.Projeto.Cliente.NomeCliente,
      project: data.Alvo.Projeto.NomeProjeto,
      target: data.Alvo.NomeAlvo,
      probe: data.Sonda.NomeSonda,
      inclination: data.Inclinacao,
      azimuth: data.Azimute,
      turn: data.Turno.Codigo,
      startHour: data.HorimetroIncial,
      endHour: data.HorimetroFinal,
      turnID: data.Turno.id,
    }
    setBoletim(responseFormatted);

    await boletimServices.getHolesBulletin(id)
      .then(response => {
        setHoles(response);
        setActiveHole(response.filter(item => item.Ativo === true)[0]);
      });

    await teamService.getSupervisorProject(id)
      .then(response => {
        const supervisors = response.map(item => item.Equipe.Nome);
        setSupervisor(supervisors);
      });

    await teamService.getOperatorProject(id)
      .then(response => {
        const operators = response.map(item => item.Equipe.Nome);
        setOperator(operators);
      });

    await teamService.getAssistantProject(id)
      .then(response => {
        const assistant = response.map(item => item.Equipe.Nome);
        setAssistant(assistant);
      });

    await getActivities(id);

  }

  async function getActivities(id) {
    const response = await boletimServices.getAtividades(id);
    console.log('atividades  get ->', response);
    setAtividades(response);

    const response2 = await boletimServices.ResultadoPerfuracao(response);
    setPerfurationResult(response2);

    const p1 = await boletimServices.ResultadoTimeSheet(response, 'HORAS PRODUTIVAS');
    setProdutivas(p1);

    const p2 = await boletimServices.ResultadoTimeSheet(response, 'HORAS NÃO MECÂNICAS');
    setNaoMecanicas(p2);

    const p3 = await boletimServices.ResultadoTimeSheet(response, 'HORAS MECÂNICAS');
    setMecanicas(p3);

  }


  useEffect(() => {
    const subscription = DataStore.observeQuery(Boletim).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;
      loadData(data.id);
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }
  }, []);


  return (
    <div>      
      
      <Pdf targetRef={ref} filename="Boletim.pdf" options={options} x={.1} y={.1} >
        {({ toPdf }) => <button onClick={toPdf} className="ant-btn ant-btn-primary btn-pdf">Gerar PDF</button>}
      </Pdf>
      <div ref={ref} className="boletim-pdf">
        <div>
          <img src={Logo} alt="logo" className='logo' />
        </div>
        <HeaderBoletim
          boletim={boletim}
          furos={holes}
          supervisor={supervisor}
          operator={operator}
          assistant={assistant}
        />
        <div className="flex">
          <div className='flex-1'>
            <ListaAtividades
              atividades={atividades}
            />
          </div>
          {/* <div className='w-52 p-2 relative'> */}
        </div>
        <div className="flex">
          <div className='flex-1'>
            <CardsBoletim
              boletim={boletim}
              perfurationResult={perfurationResult}
              produtivas={produtivas}
              mecanicas={mecanicas}
              naoMecanicas={naoMecanicas}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalheBoletimPage