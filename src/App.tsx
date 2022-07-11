import { Avatar, Button, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemProject from './components/ItemProject';
import Head from './components/Head';
import {AcUnit, Menu, Adb} from '@mui/icons-material';
import { color } from '@mui/system';
import './css/head.css';
import './css/NavbarItem.css';
import NavbarItem from './components/NavbarItem';
import RestoreIcon from '@mui/icons-material/Restore'
import UserIcon from '@mui/icons-material/AccountCircle'
import ProjectActivity from './components/ProjectActivity';

import api from './Api';


const button1 = <Button variant='contained' startIcon={<RestoreIcon />} color='error'>Restore </Button>
const button2 = <Button variant='outlined'>view</Button>
const button3 = <Button variant='contained' startIcon={<UserIcon />} color='success'>User </Button>


const getDadosFromApi = async (params:string) => {
  const result = await api.get(params)
  
  return result.data
}

function App() {
  return (
   <span>ddd</span>
  );
}

export default App;
