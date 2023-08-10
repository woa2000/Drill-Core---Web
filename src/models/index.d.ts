import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type UsuarioDGMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsuarioClienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConsistenciaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AtividadeBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EquipeProjetoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MaterialBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FiscalBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuxiliarBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OperadorBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SupervisorBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FuroBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SondaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MaterialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TurnoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FuroMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrientacaoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AtividadeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AlvoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjetoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EquipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUsuarioDG = {
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

export declare const UsuarioDG: (new (init: ModelInit<UsuarioDG, UsuarioDGMetaData>) => UsuarioDG) & {
  copyOf(source: UsuarioDG, mutator: (draft: MutableModel<UsuarioDG, UsuarioDGMetaData>) => MutableModel<UsuarioDG, UsuarioDGMetaData> | void): UsuarioDG;
}

type EagerUsuarioCliente = {
  readonly id: string;
  readonly userID?: string | null;
  readonly Cliente?: Cliente | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuarioCliente = {
  readonly id: string;
  readonly userID?: string | null;
  readonly Cliente: AsyncItem<Cliente | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsuarioCliente = LazyLoading extends LazyLoadingDisabled ? EagerUsuarioCliente : LazyUsuarioCliente

export declare const UsuarioCliente: (new (init: ModelInit<UsuarioCliente, UsuarioClienteMetaData>) => UsuarioCliente) & {
  copyOf(source: UsuarioCliente, mutator: (draft: MutableModel<UsuarioCliente, UsuarioClienteMetaData>) => MutableModel<UsuarioCliente, UsuarioClienteMetaData> | void): UsuarioCliente;
}

type EagerConsistencia = {
  readonly id: string;
  readonly TipoSolo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsistencia = {
  readonly id: string;
  readonly TipoSolo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Consistencia = LazyLoading extends LazyLoadingDisabled ? EagerConsistencia : LazyConsistencia

export declare const Consistencia: (new (init: ModelInit<Consistencia, ConsistenciaMetaData>) => Consistencia) & {
  copyOf(source: Consistencia, mutator: (draft: MutableModel<Consistencia, ConsistenciaMetaData>) => MutableModel<Consistencia, ConsistenciaMetaData> | void): Consistencia;
}

type EagerAtividadeBoletim = {
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
  readonly Atividade?: Atividade | null;
  readonly boletimID: string;
  readonly orientacaoID?: string | null;
  readonly Consistencia?: string | null;
  readonly Furo?: Furo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAtividadeBoletim = {
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
  readonly Atividade: AsyncItem<Atividade | undefined>;
  readonly boletimID: string;
  readonly orientacaoID?: string | null;
  readonly Consistencia?: string | null;
  readonly Furo: AsyncItem<Furo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AtividadeBoletim = LazyLoading extends LazyLoadingDisabled ? EagerAtividadeBoletim : LazyAtividadeBoletim

export declare const AtividadeBoletim: (new (init: ModelInit<AtividadeBoletim, AtividadeBoletimMetaData>) => AtividadeBoletim) & {
  copyOf(source: AtividadeBoletim, mutator: (draft: MutableModel<AtividadeBoletim, AtividadeBoletimMetaData>) => MutableModel<AtividadeBoletim, AtividadeBoletimMetaData> | void): AtividadeBoletim;
}

type EagerEquipeProjeto = {
  readonly id: string;
  readonly Ativo: boolean;
  readonly projetoID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipeProjeto = {
  readonly id: string;
  readonly Ativo: boolean;
  readonly projetoID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipeProjeto = LazyLoading extends LazyLoadingDisabled ? EagerEquipeProjeto : LazyEquipeProjeto

export declare const EquipeProjeto: (new (init: ModelInit<EquipeProjeto, EquipeProjetoMetaData>) => EquipeProjeto) & {
  copyOf(source: EquipeProjeto, mutator: (draft: MutableModel<EquipeProjeto, EquipeProjetoMetaData>) => MutableModel<EquipeProjeto, EquipeProjetoMetaData> | void): EquipeProjeto;
}

type EagerMaterialBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Quantidade?: number | null;
  readonly Material?: Material | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMaterialBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Quantidade?: number | null;
  readonly Material: AsyncItem<Material | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MaterialBoletim = LazyLoading extends LazyLoadingDisabled ? EagerMaterialBoletim : LazyMaterialBoletim

export declare const MaterialBoletim: (new (init: ModelInit<MaterialBoletim, MaterialBoletimMetaData>) => MaterialBoletim) & {
  copyOf(source: MaterialBoletim, mutator: (draft: MutableModel<MaterialBoletim, MaterialBoletimMetaData>) => MutableModel<MaterialBoletim, MaterialBoletimMetaData> | void): MaterialBoletim;
}

type EagerFiscalBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFiscalBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FiscalBoletim = LazyLoading extends LazyLoadingDisabled ? EagerFiscalBoletim : LazyFiscalBoletim

export declare const FiscalBoletim: (new (init: ModelInit<FiscalBoletim, FiscalBoletimMetaData>) => FiscalBoletim) & {
  copyOf(source: FiscalBoletim, mutator: (draft: MutableModel<FiscalBoletim, FiscalBoletimMetaData>) => MutableModel<FiscalBoletim, FiscalBoletimMetaData> | void): FiscalBoletim;
}

type EagerAuxiliarBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuxiliarBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuxiliarBoletim = LazyLoading extends LazyLoadingDisabled ? EagerAuxiliarBoletim : LazyAuxiliarBoletim

export declare const AuxiliarBoletim: (new (init: ModelInit<AuxiliarBoletim, AuxiliarBoletimMetaData>) => AuxiliarBoletim) & {
  copyOf(source: AuxiliarBoletim, mutator: (draft: MutableModel<AuxiliarBoletim, AuxiliarBoletimMetaData>) => MutableModel<AuxiliarBoletim, AuxiliarBoletimMetaData> | void): AuxiliarBoletim;
}

type EagerOperadorBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOperadorBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OperadorBoletim = LazyLoading extends LazyLoadingDisabled ? EagerOperadorBoletim : LazyOperadorBoletim

export declare const OperadorBoletim: (new (init: ModelInit<OperadorBoletim, OperadorBoletimMetaData>) => OperadorBoletim) & {
  copyOf(source: OperadorBoletim, mutator: (draft: MutableModel<OperadorBoletim, OperadorBoletimMetaData>) => MutableModel<OperadorBoletim, OperadorBoletimMetaData> | void): OperadorBoletim;
}

type EagerSupervisorBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySupervisorBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe: AsyncItem<Equipe | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SupervisorBoletim = LazyLoading extends LazyLoadingDisabled ? EagerSupervisorBoletim : LazySupervisorBoletim

export declare const SupervisorBoletim: (new (init: ModelInit<SupervisorBoletim, SupervisorBoletimMetaData>) => SupervisorBoletim) & {
  copyOf(source: SupervisorBoletim, mutator: (draft: MutableModel<SupervisorBoletim, SupervisorBoletimMetaData>) => MutableModel<SupervisorBoletim, SupervisorBoletimMetaData> | void): SupervisorBoletim;
}

type EagerFuroBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Furo?: Furo | null;
  readonly Ativo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFuroBoletim = {
  readonly id: string;
  readonly boletimID: string;
  readonly Furo: AsyncItem<Furo | undefined>;
  readonly Ativo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FuroBoletim = LazyLoading extends LazyLoadingDisabled ? EagerFuroBoletim : LazyFuroBoletim

export declare const FuroBoletim: (new (init: ModelInit<FuroBoletim, FuroBoletimMetaData>) => FuroBoletim) & {
  copyOf(source: FuroBoletim, mutator: (draft: MutableModel<FuroBoletim, FuroBoletimMetaData>) => MutableModel<FuroBoletim, FuroBoletimMetaData> | void): FuroBoletim;
}

type EagerBoletim = {
  readonly id: string;
  readonly Data?: string | null;
  readonly Alvo?: Alvo | null;
  readonly Sonda?: Sonda | null;
  readonly FurosBoletim?: (FuroBoletim | null)[] | null;
  readonly Inclinacao?: number | null;
  readonly Azimute?: number | null;
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
  readonly id: string;
  readonly Data?: string | null;
  readonly Alvo: AsyncItem<Alvo | undefined>;
  readonly Sonda: AsyncItem<Sonda | undefined>;
  readonly FurosBoletim: AsyncCollection<FuroBoletim>;
  readonly Inclinacao?: number | null;
  readonly Azimute?: number | null;
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

export declare const Boletim: (new (init: ModelInit<Boletim, BoletimMetaData>) => Boletim) & {
  copyOf(source: Boletim, mutator: (draft: MutableModel<Boletim, BoletimMetaData>) => MutableModel<Boletim, BoletimMetaData> | void): Boletim;
}

type EagerSonda = {
  readonly id: string;
  readonly NomeSonda: string;
  readonly Ativo: boolean;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySonda = {
  readonly id: string;
  readonly NomeSonda: string;
  readonly Ativo: boolean;
  readonly Boletims: AsyncCollection<Boletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sonda = LazyLoading extends LazyLoadingDisabled ? EagerSonda : LazySonda

export declare const Sonda: (new (init: ModelInit<Sonda, SondaMetaData>) => Sonda) & {
  copyOf(source: Sonda, mutator: (draft: MutableModel<Sonda, SondaMetaData>) => MutableModel<Sonda, SondaMetaData> | void): Sonda;
}

type EagerMaterial = {
  readonly id: string;
  readonly NomeMaterial: string;
  readonly Unidade: string;
  readonly MateriaisBoletim?: (MaterialBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMaterial = {
  readonly id: string;
  readonly NomeMaterial: string;
  readonly Unidade: string;
  readonly MateriaisBoletim: AsyncCollection<MaterialBoletim>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Material = LazyLoading extends LazyLoadingDisabled ? EagerMaterial : LazyMaterial

export declare const Material: (new (init: ModelInit<Material, MaterialMetaData>) => Material) & {
  copyOf(source: Material, mutator: (draft: MutableModel<Material, MaterialMetaData>) => MutableModel<Material, MaterialMetaData> | void): Material;
}

type EagerTurno = {
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

export declare const Turno: (new (init: ModelInit<Turno, TurnoMetaData>) => Turno) & {
  copyOf(source: Turno, mutator: (draft: MutableModel<Turno, TurnoMetaData>) => MutableModel<Turno, TurnoMetaData> | void): Turno;
}

type EagerFuro = {
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

export declare const Furo: (new (init: ModelInit<Furo, FuroMetaData>) => Furo) & {
  copyOf(source: Furo, mutator: (draft: MutableModel<Furo, FuroMetaData>) => MutableModel<Furo, FuroMetaData> | void): Furo;
}

type EagerOrientacao = {
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

export declare const Orientacao: (new (init: ModelInit<Orientacao, OrientacaoMetaData>) => Orientacao) & {
  copyOf(source: Orientacao, mutator: (draft: MutableModel<Orientacao, OrientacaoMetaData>) => MutableModel<Orientacao, OrientacaoMetaData> | void): Orientacao;
}

type EagerAtividade = {
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

export declare const Atividade: (new (init: ModelInit<Atividade, AtividadeMetaData>) => Atividade) & {
  copyOf(source: Atividade, mutator: (draft: MutableModel<Atividade, AtividadeMetaData>) => MutableModel<Atividade, AtividadeMetaData> | void): Atividade;
}

type EagerAlvo = {
  readonly id: string;
  readonly NomeAlvo: string;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly Furos?: (Furo | null)[] | null;
  readonly projetoID?: string | null;
  readonly Projeto?: Projeto | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAlvo = {
  readonly id: string;
  readonly NomeAlvo: string;
  readonly Boletims: AsyncCollection<Boletim>;
  readonly Furos: AsyncCollection<Furo>;
  readonly projetoID?: string | null;
  readonly Projeto: AsyncItem<Projeto | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Alvo = LazyLoading extends LazyLoadingDisabled ? EagerAlvo : LazyAlvo

export declare const Alvo: (new (init: ModelInit<Alvo, AlvoMetaData>) => Alvo) & {
  copyOf(source: Alvo, mutator: (draft: MutableModel<Alvo, AlvoMetaData>) => MutableModel<Alvo, AlvoMetaData> | void): Alvo;
}

type EagerProjeto = {
  readonly id: string;
  readonly NomeProjeto: string;
  readonly Turnos?: (Turno | null)[] | null;
  readonly Alvos?: (Alvo | null)[] | null;
  readonly Cliente?: Cliente | null;
  readonly EquipeProjetos?: (EquipeProjeto | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjeto = {
  readonly id: string;
  readonly NomeProjeto: string;
  readonly Turnos: AsyncCollection<Turno>;
  readonly Alvos: AsyncCollection<Alvo>;
  readonly Cliente: AsyncItem<Cliente | undefined>;
  readonly EquipeProjetos: AsyncCollection<EquipeProjeto>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Projeto = LazyLoading extends LazyLoadingDisabled ? EagerProjeto : LazyProjeto

export declare const Projeto: (new (init: ModelInit<Projeto, ProjetoMetaData>) => Projeto) & {
  copyOf(source: Projeto, mutator: (draft: MutableModel<Projeto, ProjetoMetaData>) => MutableModel<Projeto, ProjetoMetaData> | void): Projeto;
}

type EagerCliente = {
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

export declare const Cliente: (new (init: ModelInit<Cliente, ClienteMetaData>) => Cliente) & {
  copyOf(source: Cliente, mutator: (draft: MutableModel<Cliente, ClienteMetaData>) => MutableModel<Cliente, ClienteMetaData> | void): Cliente;
}

type EagerEquipe = {
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

export declare const Equipe: (new (init: ModelInit<Equipe, EquipeMetaData>) => Equipe) & {
  copyOf(source: Equipe, mutator: (draft: MutableModel<Equipe, EquipeMetaData>) => MutableModel<Equipe, EquipeMetaData> | void): Equipe;
}