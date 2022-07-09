import React, { useLayoutEffect } from 'react'
import Avatar from './avatar'
import img from './avatar'
import { userInfo } from 'os'

interface UserItemProps {
    user: {
        nome: string,
        profissao: string,
        avatarUrl: any
    }
}

const styles = {
  nome: {

  },  

  profissao: {

  }
}

export default function ItemUser(props: UserItemProps) {

    const [state, setState] = React.useState<any>(
        props.user = {
            nome: '',
            profissao: '',
            avatarUrl: {img}
        }
    );

    
    return (
        <div className='box'>
                <ul>
                <Avatar />
                    <a className='nome'>{props.user.nome}</a>
                    <a className='profissao'>{props.user.profissao}</a>
                </ul>
        </div>
    );
}

