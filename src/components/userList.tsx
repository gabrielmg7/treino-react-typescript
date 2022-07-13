
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
    return (
        <div className="container-user-list">
            {props.itens.map((item: any) => {
                console.log(props.item)
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