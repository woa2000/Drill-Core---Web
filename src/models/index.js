// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UsuarioDG, UsuarioCliente, Cliente, Projeto, Turno, Boletim, Alvo, Furo, FuroBoletim, AtividadeBoletim, Atividade, Sonda, SupervisorBoletim, Equipe, AuxiliarBoletim, OperadorBoletim, FiscalBoletim, EquipeProjeto, MaterialBoletim, Material, Consistencia, Orientacao } = initSchema(schema);

export {
  UsuarioDG,
  UsuarioCliente,
  Cliente,
  Projeto,
  Turno,
  Boletim,
  Alvo,
  Furo,
  FuroBoletim,
  AtividadeBoletim,
  Atividade,
  Sonda,
  SupervisorBoletim,
  Equipe,
  AuxiliarBoletim,
  OperadorBoletim,
  FiscalBoletim,
  EquipeProjeto,
  MaterialBoletim,
  Material,
  Consistencia,
  Orientacao
};