// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Consistencia, AtividadeBoletim, Atividade, Furo, FuroBoletim, EquipeProjeto, Equipe, AuxiliarBoletim, OperadorBoletim, SupervisorBoletim, FiscalBoletim, MaterialBoletim, Material, Boletim, Alvo, Projeto, Turno, Cliente, Sonda, Orientacao } = initSchema(schema);

export {
  Consistencia,
  AtividadeBoletim,
  Atividade,
  Furo,
  FuroBoletim,
  EquipeProjeto,
  Equipe,
  AuxiliarBoletim,
  OperadorBoletim,
  SupervisorBoletim,
  FiscalBoletim,
  MaterialBoletim,
  Material,
  Boletim,
  Alvo,
  Projeto,
  Turno,
  Cliente,
  Sonda,
  Orientacao
};