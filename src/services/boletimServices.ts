import { Atividade, Boletim } from "../models";
import { DataStore, Predicates, SortDirection, API, graphqlOperation } from 'aws-amplify';
import * as queries from '.././graphql/queries';
import { AtividadeBoletim, FuroBoletim } from "../models";
import { isNonNullExpression } from "typescript";
import * as atividadeService from './atividadeServices';

import {
    IBulletinActivities
} from '../interfaces/interfaces';

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
    Codigo: number | undefined;
    Inicio?: string | null;
    Termino?: string | null;
    Intervalo?: string | null;
    De?: number | null;
    Ate?: number | null;
    TotalPerfurado?: number | null;
    Furo?: string | null;
    Recuperacao?: number | null;
    PercentualRecuperacao?: string | null;
    Caixa?: string | null;
    Diametro?: string | null;
    CodigoOrientacao?: string | null;
    Observacao?: string | null;
    TipoAtividade?: string | null;
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
                let bulletins = items.filter((item: any) => item._deleted !== true);
                return bulletins;
            }
        )
        .catch((err) => { console.log('erro -> ', err); return []; });
    return result;
}

export async function get(id: string): Promise<any> {
    console.log('get', id);
    // const query = API.graphql({ query: queries.getBoletim, variables: { id: id } }) as Promise<any>;
    // const result = await query
    //     .then((data) => { return data.data.getBoletim; })
    //     .catch((err) => { return {}; });

    // return result;

    const bulletin = await DataStore.query(
        Boletim, id);

    return bulletin;
}

export async function getFuros(id: string): Promise<any> {
    const query = API.graphql({ query: queries.listFurosByBoletim, variables: { eq: id } }) as Promise<any>;
    const result = await query
        .then((data) => { return data.data.getBoletim; })
        .catch((err) => { return {}; });

    return result;
}

export async function getHolesBulletin(bulletinID: string): Promise<FuroBoletim[]> {
    const response = await DataStore.query(
        FuroBoletim, x => x.boletimID.eq(bulletinID), {
        sort: s => s.createdAt(SortDirection.ASCENDING)
    });

    return response;
}

function CalculaIntervalo(inicio: string, termino: string) {
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

function CalculaPercentuarRecuperacao(De: number, Ate: number, Recuperacao: number) {
    let percentual = 0;
    if (De != null && Ate != null && Recuperacao != null) {
        let total = Ate - De;
        percentual = (Recuperacao / total) * 100;
    }
    return percentual.toFixed(2) + "%";
}

export async function getAtividades(boletimID: string): Promise<any> {
    const response = await DataStore.query(
        AtividadeBoletim, x => x.boletimID.eq(boletimID), {
        sort: s => s.createdAt(SortDirection.ASCENDING)
      });

    console.log('atividade boletim -> ', response);
    const atividades = await Promise.all(
        response.map(async atividadeboletim => {
            let atividade = await DataStore.query(Atividade, atividadeboletim.atividadeID);
            return {
            ...atividadeboletim,
            Atividade: atividade
            };
        })
    );    

    const atividadesVM: AtividadeBoletimViewModel[] = []
    atividades.forEach(async atividade => {
        const Atividade = await atividade.Atividade;
        const Furo = await atividade.Furo;

        atividadesVM.push({
            Codigo: Atividade?.Codigo,
            Inicio: atividade.Inicio,
            Termino: atividade.Termino,
            Intervalo: CalculaIntervalo(atividade.Inicio as string, atividade.Termino as string),
            De: atividade.De,
            Ate: atividade.Ate,
            TotalPerfurado: atividade.De != null ? atividade.Ate as number - atividade.De as number : null,
            Furo: Furo?.NomeFuro,
            Recuperacao: atividade.Recuperacao,
            PercentualRecuperacao: atividade.De != null ? CalculaPercentuarRecuperacao(atividade.De as number, atividade.Ate as number, atividade.Recuperacao as number) : null,
            Caixa: atividade.Caixa,
            Diametro: atividade.Diametro,
            CodigoOrientacao: atividade.CodigoOrientacao,
            Observacao: atividade.Observacao,
            TipoAtividade: Atividade?.Tipo
        });
    });

    return atividadesVM;
}

export async function save(form: Boletim): Promise<ModelResult> {

    const saved = await DataStore.save(form)
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

export async function deleteObject(object: Boletim): Promise<ModelResult> {
    const deleted = await DataStore.delete(object)
        .then(() => { return { success: true } as ModelResult; })
        .catch(() => { return { success: false } as ModelResult; });

    return deleted;
}

export async function ResultadoPerfuracao(atividadesPromise: Promise<IBulletinActivities[]>): Promise<any> {
    let totalPerfurado = 0;
    let totalRecuperado = 0;

    const atividades = await atividadesPromise;

    if (atividades) {
        for (const atividade of atividades) {
            totalPerfurado += atividade.TotalPerfurado as number;
            totalRecuperado += atividade.Recuperacao as number;
        }
    }

    // Arredondando para 2 casas decimais
    totalPerfurado = parseFloat(totalPerfurado.toFixed(2));
    totalRecuperado = parseFloat(totalRecuperado.toFixed(2));

    const percentualRecuperacao = totalPerfurado > 0 
        ? (totalRecuperado / totalPerfurado) * 100 
        : 0;

    return {
        TotalPerfurado: totalPerfurado,
        TotalRecuperado: totalRecuperado,
        PercentualRecuperacao: `${Math.round(percentualRecuperacao)}%`
    };
}





export function ResultadoTimeSheet(atividades: IBulletinActivities[], tipo: string): any {
    let totalMinutos = 0;
    let atividadesFiltradas: IBulletinActivities[] = [];

    if (!Array.isArray(atividades) || atividades.length === 0) {
        return { TotalHoras: "00:00", AtividadesPorHora: atividadesFiltradas };
    }

    atividadesFiltradas = atividades.filter(item => 
        item.TipoAtividade?.toLowerCase().includes(tipo.toLowerCase())
    );

    atividadesFiltradas.forEach(atividade => {
        const intervalo = atividade.Intervalo;
        if (intervalo && /^\d{2}:\d{2}$/.test(intervalo)) { // Regex para validar o formato HH:MM
            const [horas, minutos] = intervalo.split(':').map(Number);
            totalMinutos += horas * 60 + minutos;
        }
    });

    const totalHoras = MinutosParaHoras(totalMinutos); 

    return { TotalHoras: totalHoras, AtividadesPorHora: atividadesFiltradas };
}



function MinutosParaHoras(minutos: number) {
    let intervalo = "";
    let hora = Math.floor(minutos / 60);
    let minuto = minutos % 60;
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