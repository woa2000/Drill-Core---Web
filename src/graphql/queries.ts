export const listBoletins =
  `query MyQuery {
    listBoletims (limit: 100000) {
        items {
          id  
          Data
          Inclinacao
          Azimute
          Turno {
            id
            Codigo
            Inicio
            Termino
          }
          Sonda {
            id
            NomeSonda
          }
          HorimetroFinal
          HorimetroIncial
          Alvo {
            id
            NomeAlvo
            Projeto {
              id
              NomeProjeto
              Cliente {
                id
                NomeCliente
              }
            }
          }
          _deleted
        }
      }
  }`;

export const getBoletim =
`query MyQuery($id: ID!) {
    getBoletim(id: $id) {
      id
      Data
      Inclinacao
      Azimute
      HorimetroIncial
      HorimetroFinal
      Alvo {
        id
        NomeAlvo
        Projeto {
          id
          NomeProjeto
          Cliente {
            id
            NomeCliente
          }
        }
      }
      Sonda {
        id
        NomeSonda
      }
      Turno {
        Codigo
        Inicio
        Termino
      }
      AtividadesBoletim {
        items {
          id
        }
      }
      FurosBoletim {
        items {
            id
        }
      }
    }
  }`;


export const listFurosByBoletim =
`query MyQuery($eq: ID = "") {
    listFuroBoletims(filter: {boletimID: {eq: $eq}}) {
      items {
        id
        Ativo
        Furo {
          id
          NomeFuro
          FuroOrientado
          Status
        }
      }
    }
  }`; 