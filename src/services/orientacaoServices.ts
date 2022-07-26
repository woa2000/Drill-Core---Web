import { Orientacao} from "../models";
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

export async function get(id: string): Promise<Orientacao> {
    const result =  await DataStore.query(Orientacao, id) as Orientacao;
  
    return result;
  }
  
  export async function getAll(): Promise<Orientacao[]> {
  const result =  await DataStore
      .query(Orientacao, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});
      return result;
  }
  
  export async function save(form: Orientacao) : Promise<ModelResult> {
      console.log('form ->',form);
      const saved =  await DataStore.save(new Orientacao({ Sigla: form.Sigla, Codigo: form.Codigo, Descricao: form.Descricao, Ativo: true}))
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
      return saved;
  }
  
  export async function update(updateObject : Orientacao, original : Orientacao) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
      Orientacao.copyOf(original, updated => {
            updated.Sigla = updateObject.Sigla;
            updated.Codigo = updateObject.Codigo;
            updated.Descricao = updateObject.Descricao;
      })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
  return saved;
  }

  export async function setActive(updateValue : any, object : Orientacao) {
    //update the todo item with updateValue
    const saved = await DataStore.save(
      Orientacao.copyOf(object, updated => {
          updated.Ativo = updateValue
        })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
    return saved;
  }
  
  
  export async function deleteObject(object: Orientacao): Promise<ModelResult> {
      const deleted =  await DataStore.delete(object)
      .then(() => { return {success : true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
      return deleted;
  }