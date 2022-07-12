
import '../css/itemUser.css';
import '../css/avatar.css';
import React from 'react';

const ItemUser = (props: any) => {
    return (
        <div>
            <div className='root'>
                <img src={props.avatar} alt={"User Avatar"} />
            </div>
            <div className='user-name-content'>
                <div className='Nome'>{props.firstname + " " + props.lastname}</div>
                <div className='Nacionalidade'>{props.nacionalidade}</div>
            </div>
        </div>
    );
}

export default ItemUser;