
import '../css/itemUser.css';
import '../css/avatar.css';
import React from 'react';


const Photo = (props: any) => {
    return (
        <div className='root'>
            <div className='Avatar'>{props.results[0].picture.medium}</div>
        </div>
    );
};

const UserData = (props: any) => {
    return (
        <div className='user-name-content'>
            <div className='Nome'>{props.results[0].name.first + " " + props.results[0].name.last}</div>
            <div className='Nacionalidade'>{props.results[0].location.state}</div>
        </div>
    );
};

const ItemUser = (props: any) => {

    return (
        <div>
            <Photo />
            <UserData />
        </div>
    );
}

export default ItemUser;