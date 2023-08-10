import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerUsuarioDG = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsuarioDG, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly Nome?: string | null;
  readonly UserName?: string | null;
  readonly Email?: string | null;
  readonly Status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuarioDG = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsuarioDG, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly Nome?: string | null;
  readonly UserName?: string | null;
  readonly Email?: string | null;
  readonly Status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsuarioDG = LazyLoading extends LazyLoadingDisabled ? EagerUsuarioDG : LazyUsuarioDG

export declare const UsuarioDG: (new (init: ModelInit<UsuarioDG>) => UsuarioDG) & {
  copyOf(source: UsuarioDG, mutator: (draft: MutableModel<UsuarioDG>) => MutableModel<UsuarioDG> | void): UsuarioDG;
}

type EagerUsuarioCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsuarioCliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly clienteID?: string | null;
  readonly Cliente?: Cliente | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuarioCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsuarioCliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly clienteID?: string | null;
  readonly Cliente: AsyncItem<Cliente | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsuarioCliente = LazyLoading extends LazyLoadingDisabled ? EagerUsuarioCliente : LazyUsuarioCliente

export declare const UsuarioCliente: (new (init: ModelInit<UsuarioCliente>) => UsuarioCliente) & {
  copyOf(source: UsuarioCliente, mutator: (draft: MutableModel<UsuarioCliente>) => MutableModel<UsuarioCliente> | void): UsuarioCliente;
}

type EagerConsistencia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Consistencia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TipoSolo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsistencia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Consistencia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TipoSolo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Consistencia = LazyLoading extends LazyLoadingDisabled ? EagerConsistencia : LazyConsistencia

export declare const Consistencia: (new (init: ModelInit<Consistencia>) => Consistencia) & {
  copyOf(source: Consistencia, mutator: (draft: MutableModel<Consistencia>) => MutableModel<Consistencia> | void): Consistencia;
}

type EagerAtividadeBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AtividadeBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Inicio?: string | null;
  readonly Termino?: string | null;
  readonly De?: number | null;
  readonly Ate?: number | null;
  readonly Recuperacao?: number | null;
  readonly Caixa?: string | null;
  readonly Diametro?: string | null;
  readonly CodigoOrientacao?: string | null;
  readonly Observacao?: string | null;
  readonly atividadeID: string;
  readonly Atividade?: Atividade | null;
  readonly boletimID: string;
  readonly orientacaoID?: string | null;
  readonly Consistencia?: string | null;
  readonly furoID?: string | null;
  readonly Furo?: Furo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAtividadeBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AtividadeBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Inicio?: string | null;
  readonly Termino?: string | null;
  readonly De?: number | null;
  readonly Ate?: number | null;
  readonly Recuperacao?: number | null;
  readonly Caixa?: string | null;
  readonly Diametro?: string | null;
  readonly CodigoOrientacao?: string | null;
  readonly Observacao?: string | null;
  readonly atividadeID: string;
  readonly Atividade: AsyncItem<Atividade | undefined>;
  readonly boletimID: string;
  readonly orientacaoID?: string | null;
  readonly Consistencia?: string | null;
  readonly furoID?: string | null;
  readonly Furo: AsyncItem<Furo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AtividadeBoletim = LazyLoading extends LazyLoadingDisabled ? EagerAtividadeBoletim : LazyAtividadeBoletim

export declare const AtividadeBoletim: (new (init: ModelInit<AtividadeBoletim>) => AtividadeBoletim) & {
  copyOf(source: AtividadeBoletim, mutator: (draft: MutableModel<AtividadeBoletim>) => MutableModel<AtividadeBoletim> | void): AtividadeBoletim;
}

type EagerEquipeProjeto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipeProjeto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Ativo: boolean;
  readonly equipeID: string;
  readonly projetoID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipeProjeto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipeProjeto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Ativo: boolean;
  readonly equipeID: string;
  readonly projetoID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipeProjeto = LazyLoading extends LazyLoadingDisabled ? EagerEquipeProjeto : LazyEquipeProjeto

export declare const EquipeProjeto: (new (init: ModelInit<EquipeProjeto>) => EquipeProjeto) & {
  copyOf(source: EquipeProjeto, mutator: (draft: MutableModel<EquipeProjeto>) => MutableModel<EquipeProjeto> | void): EquipeProjeto;
}

type EagerMaterialBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MaterialBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly materialID: string;
  readonly Quantidade?: number | null;
  readonly Material?: Material | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMaterialBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MaterialBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly materialID: string;
  readonly Quantidade?: number | null;
  readonly Material: AsyncItem<Material | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MaterialBoletim = LazyLoading extends LazyLoadingDisabled ? EagerMaterialBoletim : LazyMaterialBoletim

export declare const MaterialBoletim: (new (init: ModelInit<MaterialBoletim>) => MaterialBoletim) & {
  copyOf(source: MaterialBoletim, mutator: (draft: MutableModel<MaterialBoletim>) => MutableModel<MaterialBoletim> | void): MaterialBoletim;
}

type EagerFiscalBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FiscalBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFiscalBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FiscalBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FiscalBoletim = LazyLoading extends LazyLoadingDisabled ? EagerFiscalBoletim : LazyFiscalBoletim

export declare const FiscalBoletim: (new (init: ModelInit<FiscalBoletim>) => FiscalBoletim) & {
  copyOf(source: FiscalBoletim, mutator: (draft: MutableModel<FiscalBoletim>) => MutableModel<FiscalBoletim> | void): FiscalBoletim;
}

type EagerAuxiliarBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuxiliarBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuxiliarBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuxiliarBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuxiliarBoletim = LazyLoading extends LazyLoadingDisabled ? EagerAuxiliarBoletim : LazyAuxiliarBoletim

export declare const AuxiliarBoletim: (new (init: ModelInit<AuxiliarBoletim>) => AuxiliarBoletim) & {
  copyOf(source: AuxiliarBoletim, mutator: (draft: MutableModel<AuxiliarBoletim>) => MutableModel<AuxiliarBoletim> | void): AuxiliarBoletim;
}

type EagerOperadorBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OperadorBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOperadorBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OperadorBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OperadorBoletim = LazyLoading extends LazyLoadingDisabled ? EagerOperadorBoletim : LazyOperadorBoletim

export declare const OperadorBoletim: (new (init: ModelInit<OperadorBoletim>) => OperadorBoletim) & {
  copyOf(source: OperadorBoletim, mutator: (draft: MutableModel<OperadorBoletim>) => MutableModel<OperadorBoletim> | void): OperadorBoletim;
}

type EagerSupervisorBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SupervisorBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySupervisorBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SupervisorBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly equipeID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SupervisorBoletim = LazyLoading extends LazyLoadingDisabled ? EagerSupervisorBoletim : LazySupervisorBoletim

export declare const SupervisorBoletim: (new (init: ModelInit<SupervisorBoletim>) => SupervisorBoletim) & {
  copyOf(source: SupervisorBoletim, mutator: (draft: MutableModel<SupervisorBoletim>) => MutableModel<SupervisorBoletim> | void): SupervisorBoletim;
}

type EagerFuroBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FuroBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly furoID: string;
  readonly Furo?: Furo | null;
  readonly Ativo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFuroBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FuroBoletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boletimID: string;
  readonly furoID: string;
  readonly Furo: AsyncItem<Furo | undefined>;
  readonly Ativo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FuroBoletim = LazyLoading extends LazyLoadingDisabled ? EagerFuroBoletim : LazyFuroBoletim

export declare const FuroBoletim: (new (init: ModelInit<FuroBoletim>) => FuroBoletim) & {
  copyOf(source: FuroBoletim, mutator: (draft: MutableModel<FuroBoletim>) => MutableModel<FuroBoletim> | void): FuroBoletim;
}

type EagerBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Boletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Data?: string | null;
  readonly alvoID: string;
  readonly Alvo?: Alvo | null;
  readonly sondaID: string;
  readonly Sonda?: Sonda | null;
  readonly FurosBoletim?: (FuroBoletim | null)[] | null;
  readonly Inclinacao?: number | null;
  readonly Azimute?: number | null;
  readonly turnoID: string;
  readonly Turno?: Turno | null;
  readonly HorimetroIncial?: number | null;
  readonly HorimetroFinal?: number | null;
  readonly SupervisoresBoletim?: (SupervisorBoletim | null)[] | null;
  readonly OperadoresBoletim?: (OperadorBoletim | null)[] | null;
  readonly AuxiliaresBoletim?: (AuxiliarBoletim | null)[] | null;
  readonly FiscaisBoletim?: (FiscalBoletim | null)[] | null;
  readonly MateriaisBoletim?: (MaterialBoletim | null)[] | null;
  readonly AtividadeBoletims?: (AtividadeBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBoletim = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Boletim, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Data?: string | null;
  readonly alvoID: string;
  readonly Alvo: AsyncItem<Alvo | undefined>;
  readonly sondaID: string;
  readonly Sonda: AsyncItem<Sonda | undefined>;
  readonly FurosBoletim: AsyncCollection<FuroBoletim>;
  readonly Inclinacao?: number | null;
  readonly Azimute?: number | null;
  readonly turnoID: string;
  readonly Turno: AsyncItem<Turno | undefined>;
  readonly HorimetroIncial?: number | null;
  readonly HorimetroFinal?: number | null;
  readonly SupervisoresBoletim: AsyncCollection<SupervisorBoletim>;
  readonly OperadoresBoletim: AsyncCollection<OperadorBoletim>;
  readonly AuxiliaresBoletim: AsyncCollection<AuxiliarBoletim>;
  readonly FiscaisBoletim: AsyncCollection<FiscalBoletim>;
  readonly MateriaisBoletim: AsyncCollection<MaterialBoletim>;
  readonly AtividadeBoletims: AsyncCollection<AtividadeBoletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Boletim = LazyLoading extends LazyLoadingDisabled ? EagerBoletim : LazyBoletim

export declare const Boletim: (new (init: ModelInit<Boletim>) => Boletim) & {
  copyOf(source: Boletim, mutator: (draft: MutableModel<Boletim>) => MutableModel<Boletim> | void): Boletim;
}

type EagerSonda = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sonda, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeSonda: string;
  readonly Ativo: boolean;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySonda = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sonda, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeSonda: string;
  readonly Ativo: boolean;
  readonly Boletims: AsyncCollection<Boletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sonda = LazyLoading extends LazyLoadingDisabled ? EagerSonda : LazySonda

export declare const Sonda: (new (init: ModelInit<Sonda>) => Sonda) & {
  copyOf(source: Sonda, mutator: (draft: MutableModel<Sonda>) => MutableModel<Sonda> | void): Sonda;
}

type EagerMaterial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Material, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeMaterial: string;
  readonly Unidade: string;
  readonly MateriaisBoletim?: (MaterialBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMaterial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Material, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeMaterial: string;
  readonly Unidade: string;
  readonly MateriaisBoletim: AsyncCollection<MaterialBoletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Material = LazyLoading extends LazyLoadingDisabled ? EagerMaterial : LazyMaterial

export declare const Material: (new (init: ModelInit<Material>) => Material) & {
  copyOf(source: Material, mutator: (draft: MutableModel<Material>) => MutableModel<Material> | void): Material;
}

type EagerTurno = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Turno, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeTurno: string;
  readonly Codigo: string;
  readonly Inicio: string;
  readonly Termino: string;
  readonly projetoID: string;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTurno = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Turno, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeTurno: string;
  readonly Codigo: string;
  readonly Inicio: string;
  readonly Termino: string;
  readonly projetoID: string;
  readonly Boletims: AsyncCollection<Boletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Turno = LazyLoading extends LazyLoadingDisabled ? EagerTurno : LazyTurno

export declare const Turno: (new (init: ModelInit<Turno>) => Turno) & {
  copyOf(source: Turno, mutator: (draft: MutableModel<Turno>) => MutableModel<Turno> | void): Turno;
}

type EagerFuro = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Furo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeFuro: string;
  readonly Status?: string | null;
  readonly FuroBoletims?: (FuroBoletim | null)[] | null;
  readonly FuroOrientado: boolean;
  readonly alvoID: string;
  readonly AtividadeBoletims?: (AtividadeBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFuro = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Furo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeFuro: string;
  readonly Status?: string | null;
  readonly FuroBoletims: AsyncCollection<FuroBoletim>;
  readonly FuroOrientado: boolean;
  readonly alvoID: string;
  readonly AtividadeBoletims: AsyncCollection<AtividadeBoletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Furo = LazyLoading extends LazyLoadingDisabled ? EagerFuro : LazyFuro

export declare const Furo: (new (init: ModelInit<Furo>) => Furo) & {
  copyOf(source: Furo, mutator: (draft: MutableModel<Furo>) => MutableModel<Furo> | void): Furo;
}

type EagerOrientacao = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orientacao, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Codigo: number;
  readonly Sigla: string;
  readonly Descricao?: string | null;
  readonly Ativo: boolean;
  readonly AtividadeBoletims?: (AtividadeBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrientacao = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orientacao, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Codigo: number;
  readonly Sigla: string;
  readonly Descricao?: string | null;
  readonly Ativo: boolean;
  readonly AtividadeBoletims: AsyncCollection<AtividadeBoletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Orientacao = LazyLoading extends LazyLoadingDisabled ? EagerOrientacao : LazyOrientacao

export declare const Orientacao: (new (init: ModelInit<Orientacao>) => Orientacao) & {
  copyOf(source: Orientacao, mutator: (draft: MutableModel<Orientacao>) => MutableModel<Orientacao> | void): Orientacao;
}

type EagerAtividade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Atividade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeAtividade: string;
  readonly Codigo: number;
  readonly Tipo: string;
  readonly Ativo: boolean;
  readonly AtividadeBoletims?: (AtividadeBoletim | null)[] | null;
  readonly InfoPerfuracao?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAtividade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Atividade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeAtividade: string;
  readonly Codigo: number;
  readonly Tipo: string;
  readonly Ativo: boolean;
  readonly AtividadeBoletims: AsyncCollection<AtividadeBoletim>;
  readonly InfoPerfuracao?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Atividade = LazyLoading extends LazyLoadingDisabled ? EagerAtividade : LazyAtividade

export declare const Atividade: (new (init: ModelInit<Atividade>) => Atividade) & {
  copyOf(source: Atividade, mutator: (draft: MutableModel<Atividade>) => MutableModel<Atividade> | void): Atividade;
}

type EagerAlvo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alvo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeAlvo: string;
  readonly projetoID: string;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly Furos?: (Furo | null)[] | null;
  readonly Projeto?: Projeto | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAlvo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alvo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeAlvo: string;
  readonly projetoID: string;
  readonly Boletims: AsyncCollection<Boletim>;
  readonly Furos: AsyncCollection<Furo>;
  readonly Projeto: AsyncItem<Projeto | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Alvo = LazyLoading extends LazyLoadingDisabled ? EagerAlvo : LazyAlvo

export declare const Alvo: (new (init: ModelInit<Alvo>) => Alvo) & {
  copyOf(source: Alvo, mutator: (draft: MutableModel<Alvo>) => MutableModel<Alvo> | void): Alvo;
}

type EagerProjeto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projeto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeProjeto: string;
  readonly clienteID: string;
  readonly Turnos?: (Turno | null)[] | null;
  readonly Alvos?: (Alvo | null)[] | null;
  readonly Cliente?: Cliente | null;
  readonly EquipeProjetos?: (EquipeProjeto | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjeto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projeto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeProjeto: string;
  readonly clienteID: string;
  readonly Turnos: AsyncCollection<Turno>;
  readonly Alvos: AsyncCollection<Alvo>;
  readonly Cliente: AsyncItem<Cliente | undefined>;
  readonly EquipeProjetos: AsyncCollection<EquipeProjeto>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Projeto = LazyLoading extends LazyLoadingDisabled ? EagerProjeto : LazyProjeto

export declare const Projeto: (new (init: ModelInit<Projeto>) => Projeto) & {
  copyOf(source: Projeto, mutator: (draft: MutableModel<Projeto>) => MutableModel<Projeto> | void): Projeto;
}

type EagerCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeCliente: string;
  readonly Projetos?: (Projeto | null)[] | null;
  readonly LogoClient?: string | null;
  readonly Ativo: boolean;
  readonly UsuarioCliente?: (UsuarioCliente | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NomeCliente: string;
  readonly Projetos: AsyncCollection<Projeto>;
  readonly LogoClient?: string | null;
  readonly Ativo: boolean;
  readonly UsuarioCliente: AsyncCollection<UsuarioCliente>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cliente = LazyLoading extends LazyLoadingDisabled ? EagerCliente : LazyCliente

export declare const Cliente: (new (init: ModelInit<Cliente>) => Cliente) & {
  copyOf(source: Cliente, mutator: (draft: MutableModel<Cliente>) => MutableModel<Cliente> | void): Cliente;
}

type EagerEquipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nome: string;
  readonly Funcao: string;
  readonly Ativo: boolean;
  readonly AuxiliarBoletims?: (AuxiliarBoletim | null)[] | null;
  readonly OperadorBoletis?: (OperadorBoletim | null)[] | null;
  readonly SupervisorBoletim?: (SupervisorBoletim | null)[] | null;
  readonly FiscalBoletims?: (FiscalBoletim | null)[] | null;
  readonly EquipeProjetos?: (EquipeProjeto | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nome: string;
  readonly Funcao: string;
  readonly Ativo: boolean;
  readonly AuxiliarBoletims: AsyncCollection<AuxiliarBoletim>;
  readonly OperadorBoletis: AsyncCollection<OperadorBoletim>;
  readonly SupervisorBoletim: AsyncCollection<SupervisorBoletim>;
  readonly FiscalBoletims: AsyncCollection<FiscalBoletim>;
  readonly EquipeProjetos: AsyncCollection<EquipeProjeto>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equipe = LazyLoading extends LazyLoadingDisabled ? EagerEquipe : LazyEquipe

export declare const Equipe: (new (init: ModelInit<Equipe>) => Equipe) & {
  copyOf(source: Equipe, mutator: (draft: MutableModel<Equipe>) => MutableModel<Equipe> | void): Equipe;
}