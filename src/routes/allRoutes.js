import React from "react";

import Home from "../pages/Home";
import EquipePage from "../pages/Equipe";
import ClientePage from "../pages/Cliente";
import ProjetoPage from "../pages/Projeto";
import DetalheProjetoPage from "../pages/DetalheProjeto";
import AtividadePage from "../pages/Atividade";
import OrientacaoPage from "../pages/Orientacao";
import SondaPage from "../pages/Sonda";
import MaterialPage from "../pages/Material";
import BoletimPage  from "../pages/Boletim";
import DetalheBoletimPage from "../pages/DetalheBoletim";
import ConfiguracaoPage from "../pages/Configuracao";


const userRoutes = [
    { path: "/", component: Home },
    { path: "/equipe", component: EquipePage },
    { path: "/clientes", component: ClientePage },
    { path: "/projetos", component: ProjetoPage },
    { path: "/detalheprojeto", component: DetalheProjetoPage },
    { path: "/atividades", component: AtividadePage },
    { path: "/orientacao", component: OrientacaoPage },
    { path: "/configuracao", component: ConfiguracaoPage },
    { path: "/sonda", component: SondaPage },
    { path: "/material", component: MaterialPage },
    { path: "/boletim", component: BoletimPage },
    { path: "/detalheboletim", component: DetalheBoletimPage },
];


const authRoutes = [];

export  {userRoutes, authRoutes};