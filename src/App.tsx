import { Button } from '@mui/material';
import React from 'react';
import ItemProject from './components/ItemProject';
import RestoreIcon from '@mui/icons-material/Restore';
import Head from './components/Head';
import {AcUnit, Menu, Adb} from '@mui/icons-material';
import { color } from '@mui/system';
import './css/head.css';
import './css/NavbarItem.css';
import NavbarItem from './components/NavbarItem';

function App() {
  return (
    <div>
      <div className = {"head"}>
        <Head name='Title' icon={< Menu fontSize="large" />} />
        <Button startIcon={< AcUnit />}>Restore </Button>
      </div>
      
      <NavbarItem name= 'Novo' icon={<Adb fontSize="large"/>} />
     
      <ItemProject
        tag='Upload'
        time="11:40 am" 
        title="Comb - Home page.psd"
        author='Ricardo Santos'
        tagBgColor='red'
        tagColor='white'
      >
      <Button variant='contained' startIcon={<RestoreIcon />} color='error'>Restore </Button>
      </ItemProject>

      <ItemProject 
        tag='Task' 
        time="13:25 am" 
        title="Comb - Home page.psd"
        author='Ricardo Santos'
        tagBgColor='blue'
        tagColor='white'
      >
        <Button variant='outlined'>view</Button>
      </ItemProject>
    </div>
  );
}

export default App;
