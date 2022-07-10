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
            email: ""
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
      }

export default function ItemUser(props: any) {

    const [state, setState] = React.useState<any>();

    React.useEffect(() => {
        api
            .get("/?results=5000")
            .then((response) => setState(response.data))
            .catch((erro) => {
                console.error("ops! ocorreu um erro" + erro);
            });
    }, []);

    return (
        <div className='user-item-container'>
            <Avatar />
            <div className='Nome'
                onChange={setState}
            >{props.results[0].name.first + " " + props.results[0].name.last}
            </div>
            
            <div className='Nacionalidade'
                onChange={setState}
            >{props.results[0].nat}</div>
        </div>
    );
}