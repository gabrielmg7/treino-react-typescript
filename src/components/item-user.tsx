import React from 'react'
import Avatar from './avatar'


export interface IUserItemProps {
    nome: string;
    profissao: string;
}

interface UserItemProps {
    nome: string;
    profissao: string;
}

export default function ItemUser(props: UserItemProps) {

    const [state, setState] = React.useState<any>(



    );

    return (

        <Avatar />

    );
}

