import { Avatar, Button, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

import "./App.css"
import ProjectActivity from './components/ProjectActivity';



const items = [
  {
    key:1,
    tag : 'upload',
    author : 'Ricardo Santos',
    tagColor : "black",
    tagBgColor : 'green',
    title : 'Teste dentro do layout',
    time : "18:37",
    onMouseOver : ()=>'',
    item: ''
  },
  {
    key:2,
    tag : 'Task',
    author : 'Alguem Qualquer',
    tagColor : "black",
    tagBgColor : 'yellow',
    title : 'Teste dentro do layout',
    time : "18:42",
    onMouseOver : ()=>'',
    item: ''
  },
  {
    key:1,
    tag : 'upload',
    author : 'Ricardo Santos',
    tagColor : "black",
    tagBgColor : 'green',
    title : 'Teste dentro do layout',
    time : "18:37",
    onMouseOver : ()=>'',
    item: ''
  },
  {
    key:2,
    tag : 'Task',
    author : 'Alguem Qualquer',
    tagColor : "black",
    tagBgColor : 'yellow',
    title : 'Teste dentro do layout',
    time : "18:42",
    onMouseOver : ()=>'',
    item: ''
  },
  {
    key:1,
    tag : 'upload',
    author : 'Ricardo Santos',
    tagColor : "black",
    tagBgColor : 'green',
    title : 'Teste dentro do layout',
    time : "18:37",
    onMouseOver : ()=>'',
    item: ''
  },
  {
    key:2,
    tag : 'Task',
    author : 'Alguem Qualquer',
    tagColor : "black",
    tagBgColor : 'yellow',
    title : 'Teste dentro do layout',
    time : "18:42",
    onMouseOver : ()=>'',
    item: ''
  },
]

function App() {

  return (
    <div className="app-container">
      <aside>
        <div className="user-info"></div>
        <menu></menu>
        <div className="percent"></div>
      </aside>
      <main>
        <header></header>
        <div className="content">
          <div className="user-menu">

          </div>
          <div className="project-activity">
            <ProjectActivity title='Project Activity' items = {items}/>
          </div>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}

export default App;
