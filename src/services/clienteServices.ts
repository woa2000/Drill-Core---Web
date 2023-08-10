import { Cliente, Equipe } from "../models";
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

export async function getCliente(id: string): Promise<Cliente> {
  const cliente =  await DataStore.query(Cliente, id) as Cliente;

  return cliente;
}


export async function getClientes(): Promise<Cliente[]> {
  const clientes =  await DataStore
    .query(Cliente, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});

   return clientes;
}

export async function getClientesAtivos(): Promise<Cliente[]> {
  const clientes =  await DataStore
    .query(Cliente, x => x.Ativo.eq(true), { sort: s => s.NomeCliente(SortDirection.ASCENDING)});

   return clientes;
}

export async function salvarCliente(nomeCliente: string , logoCliente: string) : Promise<ModelResult> {
  const saved =  await DataStore.save(new Cliente({ NomeCliente: nomeCliente, LogoClient: logoCliente, Ativo: true }))
  .then(() => { return { success: true} as ModelResult; })
  .catch(() => { return {success : false} as ModelResult; });

  return saved;
}

export async function atualizarCliente(updateCliente : Cliente, original : Cliente) {
  //update the todo item with updateValue
  console.log( 'servico updateCliente ->', updateCliente)
  console.log( 'cliente original ->', original)
  const saved = await DataStore.save(
      Cliente.copyOf(original, updated => {
        updated.Ativo = updateCliente.Ativo;
        updated.LogoClient = updateCliente.LogoClient;
        updated.NomeCliente = updateCliente.NomeCliente;
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}


export async function setAtivo(updateValue : any, cliente : Cliente) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
      Cliente.copyOf(cliente, updated => {
        updated.Ativo = updateValue
      })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

  return saved;
}

export async function deleteCliente(cliente: Cliente): Promise<ModelResult> {
    const deleted =  await DataStore.delete(cliente)
    .then(() => { return {success : true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

    return deleted;
}