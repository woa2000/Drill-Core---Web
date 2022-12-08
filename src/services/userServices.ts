import { UsuarioDG } from "../models";
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

export async function getUsuario(id: string): Promise<UsuarioDG> {
    const usuario =  await DataStore.query(UsuarioDG, id) as UsuarioDG;
  
    return usuario;
  }
  
  export async function getUsuarios(): Promise<UsuarioDG[]> {
  const usuarios =  await DataStore
      .query(UsuarioDG, Predicates.ALL, { sort: s => s.createdAt(SortDirection.DESCENDING)});
  
      return usuarios;
  }

  export async function createUser(userId:string, nome: string, email: string, username: string, status: string) : Promise<ModelResult> {
    console.log("createUser ->", userId, nome, email, username, status);
    
    const saved =  await DataStore.save(new UsuarioDG({ userID: userId, Nome: nome, Email: email, UserName: username, Status: status }))
    .then(() => { return { success: true} as ModelResult; })
    .catch(() => { return {success : false} as ModelResult; });

    return saved;
}

export async function updateUser(userId : string, Status : string) {
    //update the todo item with updateValue
    const user = await getUsuario(userId);

    const saved = await DataStore.save(
        UsuarioDG.copyOf(user, updated => {
          updated.Status = Status;
        })
      )
      .then(() => { return { success: true} as ModelResult; })
      .catch(() => { return {success : false} as ModelResult; });
  
    return saved;
  }