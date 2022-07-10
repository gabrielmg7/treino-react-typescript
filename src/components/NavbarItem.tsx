import { SpaceBarTwoTone } from '@mui/icons-material';
import '../css/NavbarItem.css';

function NavbarItem(props:any){
    return(
        <div className={"item-container"}>
            <span className = {"item-icon"}>{props.icon}</span>
            <span className = {"item-name"}>{props.name}</span>
        </div>
    )
}

export default NavbarItem;