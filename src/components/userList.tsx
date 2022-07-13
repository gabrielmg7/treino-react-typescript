
import api from "../Api";
import React from "react";
import ItemUser from "./itemUser";

interface IUserItemProps {
    firstname: string,
    lastname: string,
    avatar: string,
    nacionalidade: string,

}

export const UserList = (props: any) => {
    console.log(props.itens)
    return (
        <div className="container-user-list">
            {props.itens.map((item: any) => {
                
                return (
                    <ItemUser
                        firstname={item.firstname}
                        lastname={item.lastname}
                        avatar={item.avatar}
                        nacionalidade={item.nacionalidade}
                    />
                )
            })}
        </div>
    );
}
export default UserList;