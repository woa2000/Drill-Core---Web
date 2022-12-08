import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UsuarioDGMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsuarioClienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjetoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TurnoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AlvoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FuroMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FuroBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AtividadeBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AtividadeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SondaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SupervisorBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EquipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuxiliarBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OperadorBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FiscalBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EquipeProjetoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MaterialBoletimMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MaterialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConsistenciaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrientacaoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UsuarioDG {
  readonly id: string;
  readonly userID?: string | null;
  readonly Nome?: string | null;
  readonly UserName?: string | null;
  readonly Email?: string | null;
  readonly Status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UsuarioDG, UsuarioDGMetaData>);
  static copyOf(source: UsuarioDG, mutator: (draft: MutableModel<UsuarioDG, UsuarioDGMetaData>) => MutableModel<UsuarioDG, UsuarioDGMetaData> | void): UsuarioDG;
}

export declare class UsuarioCliente {
  readonly id: string;
  readonly userID?: string | null;
  readonly Cliente?: Cliente | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UsuarioCliente, UsuarioClienteMetaData>);
  static copyOf(source: UsuarioCliente, mutator: (draft: MutableModel<UsuarioCliente, UsuarioClienteMetaData>) => MutableModel<UsuarioCliente, UsuarioClienteMetaData> | void): UsuarioCliente;
}

export declare class Cliente {
  readonly id: string;
  readonly NomeCliente: string;
  readonly Projetos?: (Projeto | null)[] | null;
  readonly LogoClient?: string | null;
  readonly Ativo: boolean;
  readonly UsuarioCliente?: (UsuarioCliente | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cliente, ClienteMetaData>);
  static copyOf(source: Cliente, mutator: (draft: MutableModel<Cliente, ClienteMetaData>) => MutableModel<Cliente, ClienteMetaData> | void): Cliente;
}

export declare class Projeto {
  readonly id: string;
  readonly NomeProjeto: string;
  readonly Turnos?: (Turno | null)[] | null;
  readonly Alvos?: (Alvo | null)[] | null;
  readonly clienteID: string;
  readonly Cliente?: Cliente | null;
  readonly EquipeProjetos?: (EquipeProjeto | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Projeto, ProjetoMetaData>);
  static copyOf(source: Projeto, mutator: (draft: MutableModel<Projeto, ProjetoMetaData>) => MutableModel<Projeto, ProjetoMetaData> | void): Projeto;
}

export declare class Turno {
  readonly id: string;
  readonly NomeTurno: string;
  readonly Codigo: string;
  readonly Inicio: string;
  readonly Termino: string;
  readonly projetoID: string;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Turno, TurnoMetaData>);
  static copyOf(source: Turno, mutator: (draft: MutableModel<Turno, TurnoMetaData>) => MutableModel<Turno, TurnoMetaData> | void): Turno;
}

export declare class Boletim {
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
  constructor(init: ModelInit<Boletim, BoletimMetaData>);
  static copyOf(source: Boletim, mutator: (draft: MutableModel<Boletim, BoletimMetaData>) => MutableModel<Boletim, BoletimMetaData> | void): Boletim;
}

export declare class Alvo {
  readonly id: string;
  readonly NomeAlvo: string;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly Furos?: (Furo | null)[] | null;
  readonly projetoID: string;
  readonly Projeto?: Projeto | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Alvo, AlvoMetaData>);
  static copyOf(source: Alvo, mutator: (draft: MutableModel<Alvo, AlvoMetaData>) => MutableModel<Alvo, AlvoMetaData> | void): Alvo;
}

export declare class Furo {
  readonly id: string;
  readonly NomeFuro: string;
  readonly Status?: string | null;
  readonly FuroBoletims?: (FuroBoletim | null)[] | null;
  readonly FuroOrientado: boolean;
  readonly alvoID: string;
  readonly AtividadeBoletims?: (AtividadeBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Furo, FuroMetaData>);
  static copyOf(source: Furo, mutator: (draft: MutableModel<Furo, FuroMetaData>) => MutableModel<Furo, FuroMetaData> | void): Furo;
}

export declare class FuroBoletim {
  readonly id: string;
  readonly boletimID: string;
  readonly Furo?: Furo | null;
  readonly Ativo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<FuroBoletim, FuroBoletimMetaData>);
  static copyOf(source: FuroBoletim, mutator: (draft: MutableModel<FuroBoletim, FuroBoletimMetaData>) => MutableModel<FuroBoletim, FuroBoletimMetaData> | void): FuroBoletim;
}

export declare class AtividadeBoletim {
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
  constructor(init: ModelInit<AtividadeBoletim, AtividadeBoletimMetaData>);
  static copyOf(source: AtividadeBoletim, mutator: (draft: MutableModel<AtividadeBoletim, AtividadeBoletimMetaData>) => MutableModel<AtividadeBoletim, AtividadeBoletimMetaData> | void): AtividadeBoletim;
}

export declare class Atividade {
  readonly id: string;
  readonly NomeAtividade: string;
  readonly Codigo: number;
  readonly Tipo: string;
  readonly Ativo: boolean;
  readonly AtividadeBoletims?: (AtividadeBoletim | null)[] | null;
  readonly InfoPerfuracao?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Atividade, AtividadeMetaData>);
  static copyOf(source: Atividade, mutator: (draft: MutableModel<Atividade, AtividadeMetaData>) => MutableModel<Atividade, AtividadeMetaData> | void): Atividade;
}

export declare class Sonda {
  readonly id: string;
  readonly NomeSonda: string;
  readonly Ativo: boolean;
  readonly Boletims?: (Boletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Sonda, SondaMetaData>);
  static copyOf(source: Sonda, mutator: (draft: MutableModel<Sonda, SondaMetaData>) => MutableModel<Sonda, SondaMetaData> | void): Sonda;
}

export declare class SupervisorBoletim {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SupervisorBoletim, SupervisorBoletimMetaData>);
  static copyOf(source: SupervisorBoletim, mutator: (draft: MutableModel<SupervisorBoletim, SupervisorBoletimMetaData>) => MutableModel<SupervisorBoletim, SupervisorBoletimMetaData> | void): SupervisorBoletim;
}

export declare class Equipe {
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
  constructor(init: ModelInit<Equipe, EquipeMetaData>);
  static copyOf(source: Equipe, mutator: (draft: MutableModel<Equipe, EquipeMetaData>) => MutableModel<Equipe, EquipeMetaData> | void): Equipe;
}

export declare class AuxiliarBoletim {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AuxiliarBoletim, AuxiliarBoletimMetaData>);
  static copyOf(source: AuxiliarBoletim, mutator: (draft: MutableModel<AuxiliarBoletim, AuxiliarBoletimMetaData>) => MutableModel<AuxiliarBoletim, AuxiliarBoletimMetaData> | void): AuxiliarBoletim;
}

export declare class OperadorBoletim {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OperadorBoletim, OperadorBoletimMetaData>);
  static copyOf(source: OperadorBoletim, mutator: (draft: MutableModel<OperadorBoletim, OperadorBoletimMetaData>) => MutableModel<OperadorBoletim, OperadorBoletimMetaData> | void): OperadorBoletim;
}

export declare class FiscalBoletim {
  readonly id: string;
  readonly boletimID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<FiscalBoletim, FiscalBoletimMetaData>);
  static copyOf(source: FiscalBoletim, mutator: (draft: MutableModel<FiscalBoletim, FiscalBoletimMetaData>) => MutableModel<FiscalBoletim, FiscalBoletimMetaData> | void): FiscalBoletim;
}

export declare class FuroBoletim {
  readonly id: string;
  readonly boletimID: string;
  readonly Furo?: Furo | null;
  readonly Ativo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<FuroBoletim, FuroBoletimMetaData>);
  static copyOf(source: FuroBoletim, mutator: (draft: MutableModel<FuroBoletim, FuroBoletimMetaData>) => MutableModel<FuroBoletim, FuroBoletimMetaData> | void): FuroBoletim;
}

export declare class EquipeProjeto {
  readonly id: string;
  readonly Ativo: boolean;
  readonly projetoID: string;
  readonly equipeID: string;
  readonly Equipe?: Equipe | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EquipeProjeto, EquipeProjetoMetaData>);
  static copyOf(source: EquipeProjeto, mutator: (draft: MutableModel<EquipeProjeto, EquipeProjetoMetaData>) => MutableModel<EquipeProjeto, EquipeProjetoMetaData> | void): EquipeProjeto;
}

export declare class MaterialBoletim {
  readonly id: string;
  readonly boletimID: string;
  readonly Quantidade?: number | null;
  readonly Material?: Material | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MaterialBoletim, MaterialBoletimMetaData>);
  static copyOf(source: MaterialBoletim, mutator: (draft: MutableModel<MaterialBoletim, MaterialBoletimMetaData>) => MutableModel<MaterialBoletim, MaterialBoletimMetaData> | void): MaterialBoletim;
}

export declare class Material {
  readonly id: string;
  readonly NomeMaterial: string;
  readonly Unidade: string;
  readonly MateriaisBoletim?: (MaterialBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Material, MaterialMetaData>);
  static copyOf(source: Material, mutator: (draft: MutableModel<Material, MaterialMetaData>) => MutableModel<Material, MaterialMetaData> | void): Material;
}

export declare class Consistencia {
  readonly id: string;
  readonly TipoSolo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Consistencia, ConsistenciaMetaData>);
  static copyOf(source: Consistencia, mutator: (draft: MutableModel<Consistencia, ConsistenciaMetaData>) => MutableModel<Consistencia, ConsistenciaMetaData> | void): Consistencia;
}

export declare class Orientacao {
  readonly id: string;
  readonly Codigo: number;
  readonly Sigla: string;
  readonly Descricao?: string | null;
  readonly Ativo: boolean;
  readonly AtividadeBoletims?: (AtividadeBoletim | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Orientacao, OrientacaoMetaData>);
  static copyOf(source: Orientacao, mutator: (draft: MutableModel<Orientacao, OrientacaoMetaData>) => MutableModel<Orientacao, OrientacaoMetaData> | void): Orientacao;
}