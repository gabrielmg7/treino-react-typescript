import Avatar from './avatar'
import img from './avatar'
import '../css/itemUser.css'
import React from 'react'
import api from '../Api';

const axios = require('axios');
const users = require('./json/users.json')

interface UserItemProps {
    results: [
        {
            gender: any,
            name: {
                title: any,
                first: any,
                last: any
            },
            location: {
                street: {
                    number: any,
                    name: any,
                },
                city: any,
                state: any,
                country: any,
                postcode: any,
                coordinates: {
                    latitude: any,
                    longitude: any
                },
                timezone: {
                    offset: any,
                    description: any
                }
            },
            email: any
            login: {
                uuid: any,
                username: any,
                password: any,
                salt: any,
                md5: any,
                sha1: any,
                sha256: any
            },
            dob: {
                date: any,
                age: any
            },
            registered: {
                date: any,
                age: any
            },
            phone: any,
            cell: any,
            id: {
                name: any,
                value: any
            },
            picture: {
                large: any,
                medium: any,
                thumbnail: any
            },
            nat: any
        }
    ],
    info: {
        seed: any,
        results: any,
        page: any,
        version: any
    }
}

export default function ItemUser(props: any) {
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

    React.useLayoutEffect(() => {
        api.get("/?results=10")
            .then((response) => setState(response.data))
            .catch((erro) => {
                console.error("ops! ocorreu um erro" + erro);
            });
    }, []);

    return (
        <div className='user-item-container'>
            <Avatar />
            <div className='user-name-content'>
                <div className='Nome'>{state.results[0].name.first + " " + state.results[0].name.last}
                </div>
                <div className='Nacionalidade'>{state.results[0].location.state}
                </div>
            </div>
        </div>
    );
}