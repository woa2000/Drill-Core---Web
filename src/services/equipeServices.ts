import { Equipe } from "../models";
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { EqualityOperator } from "typescript";
// import {ModelResult} from '../interfaces/interfaces';

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

export async function getMembros(): Promise<Equipe[]> {
  const equipe =  await DataStore
    .query(Equipe, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});

   return equipe;
}

export async function getMembrosAtivos(): Promise<Equipe[]> {
  const equipe =  await DataStore
    .query(Equipe, x => x.Ativo('eq', true), { sort: s => s.createdAt(SortDirection.DESCENDING)});

   return equipe;
}

export async function salvarMembro(nome: string , funcao: string) : Promise<ModelResult> {
  const saved =  await DataStore.save(new Equipe({ Nome: nome, Funcao: funcao, Ativo: true }))
  .then(() => { return { success: true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });

  return saved;
}

export async function atualizarMembro(updateColaborador : Equipe, original : Equipe) {
  //update the todo item with updateValue
  console.log( 'servico updateColaborador ->', updateColaborador)
  console.log( 'colaborador original ->', original)
  const saved = await DataStore.save(
      Equipe.copyOf(original, updated => {
        updated.Ativo = updateColaborador.Ativo;
        updated.Funcao = updateColaborador.Funcao;
        updated.Nome = updateColaborador.Nome;
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}


export async function setAtivo(updateValue : any, colaborador : Equipe) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
      Equipe.copyOf(colaborador, updated => {
        updated.Ativo = updateValue
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}

export async function deleteColaborador(colaborador: Equipe): Promise<ModelResult> {
    const deleted =  await DataStore.delete(colaborador)
    .then(() => { return {success : true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

    return deleted;
}