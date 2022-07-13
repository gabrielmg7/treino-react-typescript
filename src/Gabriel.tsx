import { Avatar, Button, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemProject from './components/ItemProject';
import RestoreIcon from '@mui/icons-material/Restore'
import UserIcon from '@mui/icons-material/AccountCircle'
import ProjectActivity from './components/ProjectActivity';

import api from './Api';
import UserList from './components/userList';


const getDadosFromApi = async (params: string) => {
  const result = await api.get(params)

  return result.data
}


function App() {

  const [itensState, setItensState] = React.useState<any>()
  return (
    <UserList itens = {[{avatar:"nomedoavatar", firstname:'primeiro nome', lastname:'ultimo nome', naiconalidade:'brasil'}] }/>
  );
}

export default App;
