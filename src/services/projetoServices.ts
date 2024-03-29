import { Projeto, Cliente, Alvo, Turno, EquipeProjeto, Equipe, Furo } from "../models";
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { EqualityOperator } from "typescript";
import * as clienteServices from './clienteServices';
import moment from 'moment';

interface ModelResult {
    success: boolean;
    errors: [
      {
        property: string,
        message: string
      },
      {
        property: string,
        message: string
      }
    ]
}

interface AlvoViewModel{
  key:string;
  id: string;
  NomeAlvo: string;
  projetoID: string;
}

interface FormEquipe {
  Equipe: Array<string>;
}

export async function getProjetos(): Promise<Projeto[]> {
  const projetos =  await DataStore
    .query(Projeto, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});
    return projetos;
}

export async function getProjetosCliente(clienteID: string): Promise<Projeto[]> {
  const projetos =  await DataStore
    .query(Projeto, x => x.Cliente.id.eq(clienteID) , { sort: s => s.createdAt(SortDirection.DESCENDING)});
    return projetos;
}

export async function salvarProjeto(nomeProjeto: string , clienteId: string) : Promise<ModelResult> {
  console.log('nomeProjeto ->', nomeProjeto);
  console.log('clienteID ->', clienteId);
  
  const client = await DataStore.query(Cliente, x => x.id.eq(clienteId));
  console.log('cliente => ', client[0]);

  var saved = {success : false} as ModelResult; 
  if (client[0] != undefined)
  {
     saved =  await DataStore.save(new Projeto({ NomeProjeto: nomeProjeto, clienteID: client[0].id, Cliente: client[0] }))
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });
  }

  return saved;
}

export async function atualizarProjeto(updateProjeto : Projeto, original : Projeto) {
  //update the todo item with updateValue

  const saved = await DataStore.save(
      Projeto.copyOf(original, updated => {
        updateProjeto.Cliente.then(x => updated.Cliente = x);
        updated.NomeProjeto = updateProjeto.NomeProjeto;
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}

export async function deleteProjeto(projeto: Projeto): Promise<ModelResult> {
    const deleted =  await DataStore.delete(projeto)
    .then(() => { return {success : true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

    return deleted;
}


export async function duplicarProjeto(id: string, turno: boolean, equipe: boolean): Promise<ModelResult> {
  const projeto = await DataStore.query(Projeto, id) as Projeto;
  var cliente = null;
  projeto.Cliente.then(x => cliente = x);

  const novoProjeto = await DataStore.save(new Projeto({ NomeProjeto: 'Cópia_' + projeto.NomeProjeto , clienteID: '', Cliente: cliente }))
  .then(async (data) => { 
    if(turno){
      const turnos = await DataStore.query(Turno, x => x.projetoID.eq(projeto.id))
      .then(async (turnos) => {
          console.log('turnos função ->', turnos);
          turnos.map(async (turno) => {
            await DataStore.save(new Turno({NomeTurno: turno.NomeTurno, Codigo: turno.Codigo, Inicio: turno.Inicio, Termino: turno.Termino, projetoID: data.id}))
          })
      })
    }
    if(equipe){
      const membros = await DataStore.query(EquipeProjeto, x => x.projetoID.eq(projeto.id))
      .then(async (membros) => {
          console.log('membros função ->', membros);
          membros.map(async (membro) => {
            var equipe = null;
            membro.Equipe.then(x => equipe = x);
            var equipeID = equipe == null ? '':  equipe;
            const membersaved = await DataStore.save(new EquipeProjeto({equipeID: equipeID , Equipe: equipe , projetoID: data.id, Ativo: true }))
            .then((data) => {console.log('equipe salva', data)})
            .catch((e) => {console.log('erro ao salvar equipe', e)})

            console.log('membersaved ->', membersaved);
          })
      })
    }
  })
  .then(() => { return {success : true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });
  

  return novoProjeto;
}

// Alvos

export async function getAlvos(projetoID: string): Promise<Alvo[]> {
  const alvos =  await DataStore
    .query(Alvo,Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});
  
  console.log("alvos => ", alvos);  
  return alvos.filter(x => x.projetoID === projetoID);
}

export async function salvarAlvo(nomeAlvo: string, projetoID: string ) : Promise<ModelResult> {
  
  const projeto = await DataStore.query(Projeto, x => x.id.eq(projetoID));
  console.log("ProjetoID => ", projetoID);
  console.log("Projeto => ", projeto[0]);
  var saved =  {success : false} as ModelResult; 
  if (projeto[0] != undefined)
  {
     saved =  await DataStore.save(new Alvo({ NomeAlvo: nomeAlvo, projetoID: projeto[0].id,  Projeto: projeto[0]}))
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });
  }

  return saved;
}

export async function atualizarAlvo(updateAlvo : Alvo, original : Alvo) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
      Alvo.copyOf(original, updated => {
        updated.NomeAlvo = updateAlvo.NomeAlvo;
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}


export async function deleteAlvo(alvo: Alvo): Promise<ModelResult> {
  const deleted =  await DataStore.delete(alvo)
  .then(() => { return {success : true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });

  return deleted;
}

// Turnos

export async function getTurnos(projetoID: string): Promise<Turno[]> {
  const turnos =  await DataStore
    .query(Turno, x => x.projetoID.eq(projetoID), { sort: s => s.createdAt(SortDirection.DESCENDING)});
    return turnos;
}

export async function salvarTurno(nomeTurno: string, codigo: string, inicio:string, termino: string,  projetoID: string ) : Promise<ModelResult> {
  let ini = moment(inicio).format('HH:mm');
  let ter = moment(termino).format('HH:mm');
  console.log('ini ->', ini, ter);
  const saved =  await DataStore.save(new Turno({ NomeTurno: nomeTurno, Codigo: codigo, Inicio: ini, Termino: ter,  projetoID: projetoID }))
  .then(() => { return { success: true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });

  return saved;
}

export async function atualizarTurno(updateTurno : Turno, original : Turno) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
      Turno.copyOf(original, updated => {
        updated.NomeTurno = updateTurno.NomeTurno;
        updated.Codigo = updateTurno.Codigo;
        updated.Inicio = updateTurno.Inicio;
        updated.Termino = updateTurno.Termino;
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}


export async function deleteTurno(turno: Turno): Promise<ModelResult> {
  const deleted =  await DataStore.delete(turno)
  .then(() => { return {success : true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });

  return deleted;
}


// Furos
export async function getFuros(alvoID: string): Promise<Furo[]> {
  const furos =  await DataStore
    .query(Furo, x => x.alvoID.eq(alvoID), { sort: s => s.createdAt(SortDirection.DESCENDING)});
    return furos;
}

export async function saveFuro(form: Furo, alvoID: string) : Promise<ModelResult> {
  console.log('form ->',form);
  const FuroOrientado = form.FuroOrientado;
  console.log('form furo orientado ->',FuroOrientado);
  const saved =  await DataStore.save(new Furo({ NomeFuro: form.NomeFuro, Status: form.Status, FuroOrientado: FuroOrientado, alvoID: alvoID }))
  .then(() => { return { success: true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });

  return saved;
}

export async function updateFuro(updateObject : Furo, original : Furo) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
      Furo.copyOf(original, updated => {
            updated.NomeFuro = updateObject.NomeFuro;
            updated.Status = updateObject.Status;
        })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
  return saved;
  }

  export async function setFuroOrientado(updateValue : any, object : Furo) {
    //update the todo item with updateValue
    console.log('updateValue ->',updateValue);
    const saved = await DataStore.save(
      Furo.copyOf(object, updated => {
          updated.FuroOrientado = updateValue
        })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
    return saved;
  }
  
  
  export async function deleteFuro(object: Furo): Promise<ModelResult> {
      const deleted =  await DataStore.delete(object)
      .then(() => { return {success : true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
      return deleted;
  }

// EquipeProjeto

export async function getEquipeProjeto(projetoID: string): Promise<EquipeProjeto[]> {
  const response =  await DataStore
    .query(EquipeProjeto, x => x.projetoID.eq(projetoID), { sort: s => s.createdAt(SortDirection.DESCENDING)});
    

  const equipeProjeto = await Promise.all(
    response.map(async equipeprojeto => {
      let equipe = await DataStore.query(Equipe, equipeprojeto.equipeID);
      return {
        ...equipeprojeto,
        Equipe: equipe
      };
    })
  );

  return equipeProjeto as any;
}

export async function  salvarEquipeProjetoUnico(membroID:string , projetoID:string){ 
  console.log("membro => ", membroID);
  console.log("projeto => ", projetoID);
  const equipe = await DataStore.query(Equipe, x => x.id.eq(membroID));
  var saved =  {success : false} as ModelResult;
  if (saved != undefined)
  {
      saved = await DataStore.save(new EquipeProjeto({equipeID: equipe[0].id,  Equipe: equipe[0], projetoID: projetoID, Ativo: true }))
        .then(() => { return { success: true} as ModelResult; })
        .catch(() => { return {success : false} as ModelResult; });
  }
  
  return saved;
};

async function  loopsave(membros:Array<string> , projetoID:string){ 
  membros.map(async (membro) => {
    const equipe = await DataStore.query(Equipe, x => x.id.eq(membro));
    await DataStore.save(new EquipeProjeto({equipeID: equipe[0].id,  Equipe: equipe[0], projetoID: projetoID, Ativo: true }))
  })
};

export async function salvarEquipeProjeto(membros: FormEquipe, projetoID: string ) : Promise<ModelResult> {
  const saved = await loopsave(membros.Equipe, projetoID)
          .then(() => { return { success: true} as ModelResult; })
          .catch(() => { return {success : false} as ModelResult; });
  return saved;
}

export async function setEquipeProjetoAtivo(updateValue : any, equipeProjeto : EquipeProjeto) {
  //update the todo item with updateValue
  console.log('setEquipeProjetoAtivo ->',updateValue)
  const saved = await DataStore.save(
    EquipeProjeto.copyOf(equipeProjeto, updated => {
        updated.Ativo = updateValue
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}


export async function deleteEquipeProjeto(equipeProjeto: EquipeProjeto): Promise<ModelResult> {
  const deleted =  await DataStore.delete(equipeProjeto)
  .then(() => { return {success : true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });

  return deleted;
}
