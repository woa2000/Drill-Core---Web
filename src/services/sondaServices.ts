import { Sonda} from "../models";
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

export async function get(id: string): Promise<Sonda> {
    const result =  await DataStore.query(Sonda, id) as Sonda;
  
    return result;
  }
  
  export async function getAll(): Promise<Sonda[]> {
  const result =  await DataStore
      .query(Sonda, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});
      return result;
  }
  
  export async function save(form: Sonda) : Promise<ModelResult> {
      console.log('form ->',form);
      const saved =  await DataStore.save(new Sonda({ NomeSonda: form.NomeSonda, Ativo: true}))
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
      return saved;
  }
  
  export async function update(updateObject : Sonda, original : Sonda) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
    Sonda.copyOf(original, updated => {
            updated.NomeSonda = updateObject.NomeSonda;
        })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
  return saved;
  }

  export async function setActive(updateValue : any, object : Sonda) {
    //update the todo item with updateValue
    const saved = await DataStore.save(
        Sonda.copyOf(object, updated => {
          updated.Ativo = updateValue
        })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
    return saved;
  }
  
  
  export async function deleteObject(object: Sonda): Promise<ModelResult> {
      const deleted =  await DataStore.delete(object)
      .then(() => { return {success : true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
      return deleted;
  }