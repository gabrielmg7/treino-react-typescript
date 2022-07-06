import { Button } from '@mui/material';
import React from 'react';
import ItemProject from './components/ItemProject';
import RestoreIcon from '@mui/icons-material/Restore'

function App() {
  return (
    <div>
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
