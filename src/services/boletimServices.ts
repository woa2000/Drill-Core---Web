import { Boletim } from "../models";
import { DataStore, Predicates, SortDirection, API, graphqlOperation } from 'aws-amplify';
import * as queries from '.././graphql/queries';
import { AtividadeBoletim } from "../models";

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

interface AtividadeBoletimViewModel {
    Inicio?: string | null;
    Termino?: string | null;
    Intervalo?: string | null;
    De?: number | null;
    Ate?: number | null;
    Recuperacao?: number | null;
    PercentualRecuperacao?: string | null;
    Caixa?: string | null;
    Diametro?: string | null;
    CodigoOrientacao?: string | null;
    Observacao?: string | null;
}



export async function getAll(id: string): Promise<any> {
    const query = API.graphql({ query: queries.listBoletins, variables: { eq: id } }) as Promise<any>;
    
    const result = await query
        .then(
            ({
                data: {
                    listBoletims: { items }
                },
            }) => { 
                console.log('query items ->', items); 
                let bulletins = items.filter((item:any) => item._deleted !== true);
                console.log('query bulletins ->', bulletins); 
                return bulletins; 
            }
        )
        .catch((err) => { console.log('erro -> ', err); return []; });
    return result;
}

export async function get(id: string): Promise<any> {
    console.log('get', id);
    const query = API.graphql({ query: queries.getBoletim, variables: { id: id } }) as Promise<any>;
    const result = await query
        .then((data) => { return data.data.getBoletim; })
        .catch((err) => { return {}; });

    return result;
}

export async function getFuros(id: string): Promise<any> {
    const query = API.graphql({ query: queries.listFurosByBoletim, variables: { eq: id } }) as Promise<any>;
    const result = await query
        .then((data) => { return data.data.getBoletim; })
        .catch((err) => { return {}; });

    return result;
}

function CalculaIntervalo(inicio: string, termino: string)
{
    let intervalo = "";
    let inicio_hora = inicio.substring(0, 2);
    let inicio_minuto = inicio.substring(3, 5);
    let termino_hora = termino.substring(0, 2);
    let termino_minuto = termino.substring(3, 5);
    let inicio_total = parseInt(inicio_hora) * 60 + parseInt(inicio_minuto);
    let termino_total = parseInt(termino_hora) * 60 + parseInt(termino_minuto);
    let total = termino_total - inicio_total;
    let hora = Math.floor(total / 60);
    let minuto = total % 60;
    if (hora < 10)
        intervalo = "0" + hora;
    else
        intervalo = hora.toString();
    intervalo += ":";
    if (minuto < 10)
        intervalo += "0" + minuto;
    else
        intervalo += minuto.toString();
    return intervalo;
}

function CalculaPercentuarRecuperacao(De: number, Ate: number, Recuperacao: number)
{
    let percentual = 0;
    if (De != null && Ate != null && Recuperacao != null)
    {
        let total = Ate - De;
        percentual = (Recuperacao / total) * 100;
    }
    return percentual + "%";
}

export async function getAtividades(boletimID: string): Promise<any> {
    const atividades = await DataStore
        .query(AtividadeBoletim, x => x.boletimID('eq', boletimID), { sort: s => s.Inicio(SortDirection.ASCENDING) });

    const atividadesVM :  AtividadeBoletimViewModel[] = []

    atividades.forEach(atividade => {
        atividadesVM.push( {
            Inicio: atividade.Inicio,
            Termino: atividade.Termino,
            Intervalo: CalculaIntervalo(atividade.Inicio as string, atividade.Termino as string),
            De: atividade.De,
            Ate: atividade.Ate,
            Recuperacao: atividade.Recuperacao,
            PercentualRecuperacao:  atividade.De != null ? CalculaPercentuarRecuperacao(atividade.De as number, atividade.Ate as number, atividade.Recuperacao as number) : null,
            Caixa: atividade.Caixa,
            Diametro: atividade.Diametro,
            CodigoOrientacao: atividade.CodigoOrientacao,
            Observacao: atividade.Observacao,
        });
    });
    console.log('atividadesVM service -> ', atividadesVM);
    return atividadesVM;
}

export async function save(form: Boletim): Promise<ModelResult> {
    console.log('form ->', form);
    const saved = await DataStore.save(new Boletim(form))
        .then(() => { return { success: true } as ModelResult; })
        .catch(() => { return { success: false } as ModelResult; });

    return saved;
}

export async function update(updateObject: Boletim, original: Boletim) {
    //update the todo item with updateValue
    const saved = await DataStore.save(
        Boletim.copyOf(original, updated => {
            updated.Data = updateObject.Data;
        })
    )
        .then(() => { return { success: true } as ModelResult; })
        .catch(() => { return { success: false } as ModelResult; });

    return saved;
}

//   export async function setActive(updateValue : any, object : Boletim) {
//     //update the todo item with updateValue
//     const saved = await DataStore.save(
//         Sonda.copyOf(object, updated => {
//           updated.Ativo = updateValue
//         })
//       )
//       .then(() => { return { success: true} as ModelResult; })
//       .catch(() => { return {success : false} as ModelResult; });

//     return saved;
//   }


export async function deleteObject(object: Boletim): Promise<ModelResult> {
    const deleted = await DataStore.delete(object)
        .then(() => { return { success: true } as ModelResult; })
        .catch(() => { return { success: false } as ModelResult; });

    return deleted;
}
