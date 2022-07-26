import { Atividade, Cliente, Equipe } from "../models";
import { DataStore, Predicates, SortDirection } from 'aws-amplify';

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

export async function getAtividade(id: string): Promise<Atividade> {
  const atividade =  await DataStore.query(Atividade, id) as Atividade;

  return atividade;
}

export async function getAtividades(): Promise<Atividade[]> {
const atividades =  await DataStore
    .query(Atividade, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});

    return atividades;
}

export async function salvarAtividade(nomeAtividade: string, codigo: number, tipo: string) : Promise<ModelResult> {
    console.log(codigo);
    const saved =  await DataStore.save(new Atividade({ NomeAtividade: nomeAtividade, Codigo: codigo, Tipo: tipo, Ativo: true }))
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

    return saved;
}

export async function atualizarAtividade(updateAtividade : Atividade, original : Atividade) {
//update the todo item with updateValue
const saved = await DataStore.save(
    Atividade.copyOf(original, updated => {
        updated.NomeAtividade = updateAtividade.NomeAtividade;
        updated.Codigo = updateAtividade.Codigo;
        updated.Tipo = updateAtividade.Tipo;
    })
    )
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

return saved;
}

export async function setAtivo(updateValue : any, atividade : Atividade) {
    //update the todo item with updateValue
    const saved = await DataStore.save(
        Atividade.copyOf(atividade, updated => {
          updated.Ativo = updateValue
        })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
    return saved;
  }

export async function deleteAtividade(atividade: Atividade): Promise<ModelResult> {
    const deleted =  await DataStore.delete(atividade)
    .then(() => { return {success : true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

    return deleted;
}