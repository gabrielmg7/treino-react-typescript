
import api from "../Api";
import React from "react";
import ItemUser from "./itemUser";

interface IUserItemProps {
    firstname: string,
    lastname: string,
    avatar: string,
    nacionalidade: string,

}

export const UserList = (itens: IUserItemProps[]) => {


    return (
        <div className="container-user-list">
            {itens.map(item => {
                return (
                    <ItemUser
                        itens={itens}
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