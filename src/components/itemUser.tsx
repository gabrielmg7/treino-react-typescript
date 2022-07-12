
import '../css/itemUser.css';
import React from 'react';
import Avatar from './Avatar';
import { UserItemProps } from './userList';


const ItemUser = (props: any) => {
    const [state, setState] = React.useState<UserItemProps>({
        results: [
            {
                gender: "",
                name: {
                    title: "",
                    first: "",
                    last: ""
                },
                location: {
                    street: {
                        number: 0,
                        name: "",
                    },
                    city: "",
                    state: "",
                    country: "",
                    postcode: "",
                    coordinates: {
                        latitude: "",
                        longitude: ""
                    },
                    timezone: {
                        offset: "",
                        description: ""
                    }
                },
                email: "",
                login: {
                    uuid: "",
                    username: "",
                    password: "",
                    salt: "",
                    md5: "",
                    sha1: "",
                    sha256: ""
                },
                dob: {
                    date: "",
                    age: 0
                },
                registered: {
                    date: "",
                    age: 0
                },
                phone: "",
                cell: "",
                id: {
                    name: "",
                    value: ""
                },
                picture: {
                    large: "",
                    medium: "",
                    thumbnail: ""
                },
                nat: ""
            }
        ],
        info: {
            seed: "",
            results: 0,
            page: 0,
            version: ""
        }
    });

    return (
        <div className='user-item-container'>
            <Avatar />
            <div className='user-name-content'>
                <div className='Nome'>{state.results[0].name.first + " " + state.results[0].name.last}</div>
                <div className='Nacionalidade'>{state.results[0].location.state}</div>
            </div>
        </div>
    );
}
export default ItemUser;