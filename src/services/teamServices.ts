import { DataStore, Predicates, SortDirection } from 'aws-amplify';

import { 
  AuxiliarBoletim, 
  Equipe, 
  EquipeProjeto, 
  FiscalBoletim, 
  OperadorBoletim, 
  SupervisorBoletim 
} from "../models";

export async function getTeams(): Promise<Equipe[]> {
  return await DataStore.query(
    Equipe, Predicates.ALL, { 
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  );
}


export async function getSupervisors(projectId: string): Promise<EquipeProjeto[]> {
  const response = await DataStore.query(
    EquipeProjeto, x => x.projetoID('eq', projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const supervisors = response as EquipeProjeto[];

  const filteredSupervisors = supervisors
    .filter(x => x.Equipe?.Funcao === 'Supervisor');

  return filteredSupervisors;
}

export async function getSupervisorProject(boletimID: string): Promise<SupervisorBoletim[]> {
  return await DataStore.query(
    SupervisorBoletim, x => x.boletimID('eq', boletimID), {
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  )
}

export async function saveSupervisors(supervisors: Equipe[], bulletinID: string): Promise<SupervisorBoletim> {
  return new Promise(resolve => {
    supervisors.map(item => {
      DataStore.save(new SupervisorBoletim({
        boletimID: bulletinID,
        Equipe: {
          id: item.id,
          Nome: item.Nome,
          Funcao: item.Funcao,
          Ativo: item.Ativo,
        }
      }))
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(error);
      });
    })
  });
}

export async function getOperators(projectId: string): Promise<EquipeProjeto[]> {
  const response = await DataStore.query(
    EquipeProjeto, x => x.projetoID('eq', projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const operators = response as EquipeProjeto[];

  const filteredOperators = operators
    .filter(x => x.Equipe?.Funcao === 'Operador');

  return filteredOperators;
}

export async function getOperatorProject(boletimID: string): Promise<OperadorBoletim[]> {
  return await DataStore.query(
    OperadorBoletim, x => x.boletimID('eq', boletimID), {
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  )
}

export async function saveOperators(operators: Equipe[], bulletinID: string): Promise<OperadorBoletim> {
  return new Promise(resolve => {
    operators.map(item => {
      DataStore.save(new OperadorBoletim({
        boletimID: bulletinID,
        Equipe: {
          id: item.id,
          Nome: item.Nome,
          Funcao: item.Funcao,
          Ativo: item.Ativo,
        }
      }))
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(error);
      });
    });
  })
}

export async function getAssistants(projectId: string): Promise<EquipeProjeto[]> {
  const response = await DataStore.query(
    EquipeProjeto, x => x.projetoID('eq', projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const assistants = response as EquipeProjeto[];

  const filteredAssistants = assistants
    .filter(x => x.Equipe?.Funcao === 'Auxiliar');

  return filteredAssistants;
}

export async function getAssistantProject(boletimID: string): Promise<AuxiliarBoletim[]> {
  return await DataStore.query(
    AuxiliarBoletim, x => x.boletimID('eq', boletimID), {
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  )
}

export async function saveAssistants(assistants: Equipe[], bulletinID: string): Promise<AuxiliarBoletim> {
  return new Promise(resolve => {
    assistants.map(item => {
      DataStore.save(new AuxiliarBoletim({
        boletimID: bulletinID,
        Equipe: {
          id: item.id,
          Nome: item.Nome,
          Funcao: item.Funcao,
          Ativo: item.Ativo,
        }
      }))
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(error);
      });
    })
  });
}

export async function getInspectors(projectId: string): Promise<EquipeProjeto[]> {
  const response = await DataStore.query(
    EquipeProjeto, x => x.projetoID('eq', projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const inspectors = response as EquipeProjeto[];

  const filteredInspectors = inspectors
    .filter(x => x.Equipe?.Funcao === 'Fiscal');

  return filteredInspectors;
}

export async function saveInspectors(inspectors: Equipe[], bulletinID: string): Promise<FiscalBoletim> {
  return new Promise(resolve => {
    inspectors.map(item => {
      DataStore.save(new FiscalBoletim({
        boletimID: bulletinID,
        Equipe: {
          id: item.id,
          Nome: item.Nome,
          Funcao: item.Funcao,
          Ativo: item.Ativo,
        }
      }))
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(error);
      });
    })
  });
}