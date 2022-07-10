import { Button } from '@mui/material';
import React from 'react';
import ItemProject from './components/ItemProject';
import RestoreIcon from '@mui/icons-material/Restore'
import ProjectActivity from './components/ProjectActivity';

const button1 = <Button variant='contained' startIcon={<RestoreIcon />} color='error'>Restore </Button>
const button2 = <Button variant='outlined'>view</Button>

const myItems = [
  {
    tag: "upload",
    time: "14:30",
    title: "comprar comida",
    author: "Ricardo Santos",
    tagBgColor: "black",
    tagColor: "white",
    button: button1,
  },
  {
    tag: "task",
    time: "14:30",
    title: "comprar roupa",
    author: "Gabriel Moura",
    tagBgColor: "red",
    tagColor: "white",
    button: button2,
  },
  {
    tag: "buy",
    time: "14:30",
    title: "comprar carro",
    author: "Keven",
    tagBgColor: "yellow",
    tagColor: "black",
    button: button2,
  }
]

function App() {
  return (
    <div>
      <ProjectActivity 
        items = {myItems}
        title="PROJECT ACTIVITY"
      />
    </div>
  );
}

export default App;
