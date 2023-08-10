// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UsuarioDG, UsuarioCliente, Consistencia, AtividadeBoletim, EquipeProjeto, MaterialBoletim, FiscalBoletim, AuxiliarBoletim, OperadorBoletim, SupervisorBoletim, FuroBoletim, Boletim, Sonda, Material, Turno, Furo, Orientacao, Atividade, Alvo, Projeto, Cliente, Equipe } = initSchema(schema);

export {
  UsuarioDG,
  UsuarioCliente,
  Consistencia,
  AtividadeBoletim,
  EquipeProjeto,
  MaterialBoletim,
  FiscalBoletim,
  AuxiliarBoletim,
  OperadorBoletim,
  SupervisorBoletim,
  FuroBoletim,
  Boletim,
  Sonda,
  Material,
  Turno,
  Furo,
  Orientacao,
  Atividade,
  Alvo,
  Projeto,
  Cliente,
  Equipe
};