// this was created as compromise to avoid loading the whole react-icons/si module but still make the display of Tools icons dynamic based on the json data

import {
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiMulesoft,
  SiPostman,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
  SiNpm,
  SiWebpack,
  SiJirasoftware,
  SiConfluence,
  SiGit,
  SiExpress,
  SiWoocommerce,
  SiCpanel,
  SiMaterialdesign,
} from 'react-icons/si';

import { TbBrandCSharp, TbSql, TbBrandAws, TbBrandAzure, TbBrandCss3 } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

const IconMap = {
  Csharp: { icon: TbBrandCSharp, color: '#9b4f97', name: 'C#' },
  Dotnet: { icon: SiDotnet, color: '#682a7b', name: '.Net' },
  Microsoftsqlserver: {
    icon: TbSql,
    color: '#c26166',
    name: 'MS SQL',
  },
  Html5: { icon: SiHtml5, color: '#e44d25', name: 'HTML5' },
  Css3: { icon: TbBrandCss3, color: '#315fa2', name: 'CSS3' },
  Javascript: { icon: SiJavascript, color: '#f0db4f', name: 'Javascript' },
  Typescript: { icon: SiTypescript, color: '#2d79c8', name: 'Typescript' },
  React: { icon: SiReact, color: '#01d8ff', name: 'React' },
  Angular: { icon: SiAngular, color: '#e23137 ', name: 'Angular' },
  Microsoftazure: {
    icon: TbBrandAzure,
    color: '#217cf7',
    name: 'Microsoft Azure',
  },
  Amazonaws: {
    icon: TbBrandAws,
    color: '#fe9901',
    name: 'Amazon Web Services',
  },
  Mulesoft: { icon: SiMulesoft, color: '#01a1e0', name: 'Mulesoft' },
  Postman: { icon: SiPostman, color: '#fd6c34', name: 'Postman' },
  Bootstrap: { icon: SiBootstrap, color: '#8412fa', name: 'Bootstrap' },
  Sass: { icon: SiSass, color: '#c67ba2', name: 'SASS' },
  Nodedotjs: { icon: SiNodedotjs, color: '#689f63', name: 'NodeJs' },
  Npm: { icon: SiNpm, color: '#cc0100', name: 'NPM' },
  Webpack: { icon: SiWebpack, color: '#02c1f7', name: 'Webpack' },
  Jirasoftware: { icon: SiJirasoftware, color: '#217cf7', name: 'Jira' },
  Confluence: { icon: SiConfluence, color: '#217cf7', name: 'Confluence' },
  Git: { icon: SiGit, color: '#f05133', name: 'Git' },
  Express: { icon: SiExpress, color: 'black', name: 'ExpressJs' },
  WooCommerce: { icon: SiWoocommerce, color: '#9b4f97', name: 'WooCommerce' },
  CPanel: { icon: SiCpanel, color: '#ff6c2c', name: 'CPanel' },
  AzDevops: { icon: VscAzure, color: '#3c7bbf', name: 'Azure DevOps' },
  MaterialDesign: {
    icon: SiMaterialdesign,
    color: '#757575',
    name: 'Material Design',
  },
};

export default IconMap;
