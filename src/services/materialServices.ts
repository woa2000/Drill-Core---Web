import { Material} from "../models";
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

export async function get(id: string): Promise<Material> {
    const result =  await DataStore.query(Material, id) as Material;
  
    return result;
  }
  
  export async function getAll(): Promise<Material[]> {
  const result =  await DataStore
      .query(Material, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});
      return result;
  }
  
  export async function save(form: Material) : Promise<ModelResult> {
      console.log('form ->',form);
      const saved =  await DataStore.save(new Material({ NomeMaterial: form.NomeMaterial, Unidade:form.Unidade}))
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
      return saved;
  }
  
  export async function update(updateObject : Material, original : Material) {
  //update the todo item with updateValue
  const saved = await DataStore.save(
      Material.copyOf(original, updated => {
            updated.NomeMaterial = updateObject.NomeMaterial;
            updated.Unidade = updateObject.Unidade;
      })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
  return saved;
  }

//   export async function setActive(updateValue : any, object : Material) {
//     //update the todo item with updateValue
//     const saved = await DataStore.save(
//       Material.copyOf(object, updated => {
//           updated.Ativo = updateValue
//         })
//       )
//       .then(() => { return { success: true} as ModelResult; })
//       .catch(() => { return {success : false} as ModelResult; });
  
//     return saved;
//   }
  
  
  export async function deleteObject(object: Material): Promise<ModelResult> {
      const deleted =  await DataStore.delete(object)
      .then(() => { return {success : true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
      return deleted;
  }