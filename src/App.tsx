<<<<<<< HEAD
import { Button } from '@mui/material';
import React from 'react';
import ItemProject from './components/ItemProject';
import RestoreIcon from '@mui/icons-material/Restore'
=======
import Head from './components/Head'
import './css/head.css'
>>>>>>> fe66c4b6b9dd8f2f80f31fb1717c08e60f512f70

function App() {
  return (
    <div>
<<<<<<< HEAD
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
=======
        <div>
          <Head name='Project Honeycomb' />
        </div>
>>>>>>> fe66c4b6b9dd8f2f80f31fb1717c08e60f512f70
    </div>
  );
}

export default App;
