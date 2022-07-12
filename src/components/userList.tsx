
import api from "../Api";
import React from "react";
import ItemUser from "./itemUser";

export interface UserItemProps {
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
const UserList = (props: any) => {

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
        <div className="container-user-list">
            <ItemUser />     
            <ItemUser />
            <ItemUser />
            <ItemUser />
        </div>
    );
}
export default UserList;