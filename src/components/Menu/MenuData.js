import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const MenuData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Equipe',
    path: '/equipe',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Projetos',
    path: '/projetos',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Atividades',
    path: '/atividades',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Sondas',
    path: '/sonda',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Boletins',
    path: '/boletim',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Tabelas Auxiliares',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    type: 'sub',
    subMenu: [
      {
        title: 'Materiais',
        path: '/material',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
      },
      {
        title: 'Orientação',
        path: '/orientacao',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
      },
      {
        title: 'Configuração',
        path: '/configuracao',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
      },
    ]
  },
  
];
