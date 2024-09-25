import React from 'react';
import Ract from './technology/React';
import Express from './technology/Express';
import Mysql from './technology/Mysql';
import Redux from './technology/Redux';
import Node from './technology/Node';
import Mongo from './technology/Mongo';
import Tw from './technology/Tw';
import Js from './technology/Js';
import Mssql from './technology/Mssql';
import C from './technology/C';
import Css from './technology/Css';
import Sql from './technology/Sql';
import Html from './technology/Html';
import Java from './technology/Java';
import Python from './technology/Python';
import Figma from './technology/Figma';
import Git from './technology/Git';

function Technologies() {
  return (
    <div className='mt-20 flex justify-center'>
      <div
        className='grid grid-cols-1 gap-4 justify-items-center
                      sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-10'
      >
        <Ract />
        <Node />
        <Express />
        <Mysql />
        <Redux />
        <Mongo />
        <Tw />
        <Js />
        <Mssql />
        <Sql />
        <C />
        <Css />
        <Html />
        <Java />
        <Python />
        <Figma />
        <Git />
      </div>
    </div>
  );
}

export default Technologies;
