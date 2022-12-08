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

interface ITableHeaderData {
  date: string;
  client: string;
  project: string;
  target: string;
  probe: string;
  inclination: number;
  azimuth: number;
  turn: string;
  turnID: string;
  startHour: number;
  endHour: number;
}

interface IListActivities {
  id: string;
  code?: number;
  start?: string;
  end?: string;
  interval?: string;
  from?: number;
  until?: number;
  recovery?: number;
  recoveryPercentage?: number;
  box?: string;
  furo?: string;
  consistence?: string;
  orientation?: string;
  observation?: string;
  // selectedActivity?: Atividade;
  // selectedOrientation?: Orientacao;
  // selectedConsistency?: Consistencia;
}

interface IElectronicBulletinDetailsParams {
  bulletinID: string;
  client: string;
  targetID:string;
  projectID: string;
  project: string;
}

interface IBulletinActivities {
  id: string;
  Inicio?: string | null;
  Termino?: string | null;
  Intervalo?: string | null;
  Furo?: string | null;
  De?: number | null;
  Ate?: number | null;
  TotalPerfurado?: number | null;
  Recuperacao?: number | null;
  PercentualRecuperacao?: string | null;
  Caixa?: string | null;
  Diametro?: string | null;
  CodigoOrientacao?: string | null;
  Observacao?: string | null;
  CodigoAtividade?: number | null;
  TipoAtividade?: string | null;
}

export type {ModelResult, ITableHeaderData, IListActivities, IElectronicBulletinDetailsParams, IBulletinActivities }