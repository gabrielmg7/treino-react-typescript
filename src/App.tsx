import { Avatar, Button, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemProject from './components/ItemProject';
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
  const [myItems, setMyItems] = useState<any>([])
  const [results, setResults ]= useState<number>(5)

  useEffect( ()=>{
    atualizarLista()

  },[results])

  const atualizarLista = () => {
    
    console.log(myItems)
    getDadosFromApi(`/?results=${results}`).then(response=>{
      const items = response.results.map((item:any)=>{
        return ({
          key: item.email,
          tag: item.location.country,
          time: (new Date(item.registered.date).toLocaleDateString()),
          title: `${item.name.first} ${item.name.last}`,
          author: item.email,
          tagBgColor: ["black","blue","red","orange","purple"][Math.floor(Math.random() * 5)],
          tagColor: "white",
          child: <Avatar alt={`${item.name.first} ${item.name.last}`} src={item.picture.medium} />,
        })
      })
      setMyItems([...items])
    })
  }

  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', padding: '20px'}}>
        <Button variant='outlined' onClick={()=>{atualizarLista()}}>
          Atualizar List
        </Button>

        <Slider
          aria-label="Default"
          defaultValue={results}
          valueLabelDisplay="auto"
          min={1}
          max={100}
          onChangeCommitted={(e,v)=>setResults(Number(v))}
        />
      </div>
      <ProjectActivity 
        items = {myItems}
        title="PROJECT ACTIVITY"
      />
    </div>
  );
}

export default App;
