import { Avatar, Button, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemProject from './components/ItemProject';
import RestoreIcon from '@mui/icons-material/Restore'
import UserIcon from '@mui/icons-material/AccountCircle'
import ProjectActivity from './components/ProjectActivity';

import api from './Api';
import UserList from './components/userList';


const button1 = <Button variant='contained' startIcon={<RestoreIcon />} color='error'>Restore </Button>
const button2 = <Button variant='outlined'>view</Button>
const button3 = <Button variant='contained' startIcon={<UserIcon />} color='success'>User </Button>


const getDadosFromApi = async (params: string) => {
  const result = await api.get(params)

  return result.data
}


function App() {
  const [myItems, setMyItems] = useState<any>([])
  const [results, setResults] = useState<number>(5)

  const [itensState, setItensState] = React.useState<any>()

  useEffect(() => {
    atualizarLista()


  }, [results])


  const atualizarLista = () => {

    console.log(myItems)
    getDadosFromApi(`/?results=${results}`).then(response => {
      const items = response.results.map((item: any) => {
        return ({
          key: item.email,
          tag: item.location.country,
          time: (new Date(item.registered.date).toLocaleDateString()),
          title: `${item.name.first} ${item.name.last}`,
          author: item.email,
          tagBgColor: ["black", "blue", "red", "orange", "purple"][Math.floor(Math.random() * 5)],
          tagColor: "white",
          child: [
            <Avatar alt={`${item.name.first} ${item.name.last}`} src={item.picture.medium} />,
            button1,
            button2,
            button3
          ][Math.floor(Math.random() * 4)],
        })
      })
      setMyItems([...items])
    })
  }

  return (

    <UserList itens= [{ avatar='nomedoavatar', firstname='primeiro nome', lastname='ultimo nome', nacionalidade='brasil' }] />
  );
}

export default App;
