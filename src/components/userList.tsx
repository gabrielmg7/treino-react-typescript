
import api from "../Api";
import React from "react";
import ItemUser from "./itemUser";



export const UserList = (props: any) => {
    const [itemState, setItemState] = React.useState<any>()

    React.useLayoutEffect(() => {
        api.get("/?results=10")
            .then((response) => setItemState(response.data))
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