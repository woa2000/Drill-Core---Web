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
    EquipeProjeto, x => x.projetoID.eq(projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const supervisors = await response as EquipeProjeto[];

  const filteredSupervisors = supervisors
    .filter(x => x.Equipe.then(x => x?.Funcao === 'Supervisor'));

  return filteredSupervisors;
}

export async function getSupervisorProject(boletimID: string): Promise<SupervisorBoletim[]> {
  const response =  await DataStore.query(
    SupervisorBoletim, x => x.boletimID.eq(boletimID), {
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  )

  const supervisor = await Promise.all(
    response.map(async supervisorboletim => {
      let equipe = await DataStore.query(Equipe, supervisorboletim.equipeID);
      return {
        ...supervisorboletim,
        Equipe: equipe
      };
    })
  );

  return supervisor as any;
}

export async function saveSupervisors(supervisors: Equipe[], bulletinID: string): Promise<SupervisorBoletim> {
  return new Promise(resolve => {
    supervisors.map(async item => {
      DataStore.save(new SupervisorBoletim({
        boletimID: bulletinID,
        equipeID: item.id,
        Equipe: new Equipe({
          Nome: item.Nome,
          Funcao: item.Funcao,
          Ativo: item.Ativo,          
        })
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
    EquipeProjeto, x => x.projetoID.eq(projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const operators = response as EquipeProjeto[];

  const filteredOperators = operators
    .filter(x => x.Equipe?.then(x => x?.Funcao === 'Operador'));

  return filteredOperators;
}

export async function getOperatorProject(boletimID: string): Promise<OperadorBoletim[]> {
  const response =  await DataStore.query(
    OperadorBoletim, x => x.boletimID.eq(boletimID), {
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  )

  const operador = await Promise.all(
    response.map(async operadorboletim => {
      let equipe = await DataStore.query(Equipe, operadorboletim.equipeID);
      return {
        ...operadorboletim,
        Equipe: equipe
      };
    })
  );

  return operador as any;
}

export async function saveOperators(operators: Equipe[], bulletinID: string): Promise<OperadorBoletim> {
  return new Promise(resolve => {
    operators.map(async (item) => {
      var equipe = await DataStore.query(Equipe, x => x.id.eq(item.id));

      DataStore.save(new OperadorBoletim({
        boletimID: bulletinID,
        equipeID : equipe[0].id,
        Equipe: equipe[0]
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
    EquipeProjeto, x => x.projetoID.eq(projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const assistants = response as EquipeProjeto[];

  const filteredAssistants = assistants
    .filter(x => x.Equipe?.then(x => x?.Funcao === 'Auxiliar' ));

  return filteredAssistants;
}

export async function getAssistantProject(boletimID: string): Promise<AuxiliarBoletim[]> {
  const response =  await DataStore.query(
    AuxiliarBoletim, x => x.boletimID.eq(boletimID), {
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  )

  const auxiliar = await Promise.all(
    response.map(async auxiliarboletim => {
      let equipe = await DataStore.query(Equipe, auxiliarboletim.equipeID);
      return {
        ...auxiliarboletim,
        Equipe: equipe
      };
    })
  );

  return auxiliar as any;
  
  
  return await DataStore.query(
    AuxiliarBoletim, x => x.boletimID.eq(boletimID), {
      sort: s => s.createdAt(SortDirection.DESCENDING)
    }
  )
}

export async function saveAssistants(assistants: Equipe[], bulletinID: string): Promise<AuxiliarBoletim> {
  return new Promise(resolve => {
    assistants.map(async (item) => {
      var equipe = await DataStore.query(Equipe, x => x.id.eq(item.id));

      DataStore.save(new AuxiliarBoletim({
        boletimID: bulletinID,
        equipeID: equipe[0].id,
        Equipe: equipe[0]
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
    EquipeProjeto, x => x.projetoID.eq(projectId), {
    sort: s => s.createdAt(SortDirection.ASCENDING)
  });

  const inspectors = response as EquipeProjeto[];

  const filteredInspectors = inspectors
    .filter(x => x.Equipe?.then(x => x?.Funcao === 'Fiscal'));

  return filteredInspectors;
}

export async function saveInspectors(inspectors: Equipe[], bulletinID: string): Promise<FiscalBoletim> {
  return new Promise(resolve => {
    inspectors.map(async (item) => {
      var equipe = await DataStore.query(Equipe, x => x.id.eq(item.id));

      DataStore.save(new FiscalBoletim({
        boletimID: bulletinID,
        equipeID: equipe[0].id,
        Equipe: equipe[0]
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