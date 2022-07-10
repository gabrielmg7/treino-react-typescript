import { SpaceBarTwoTone } from '@mui/icons-material';
import '../css/head.css'

function Head(props:any){
    return(
        <div className = {"head-container"}>
            <div className={"head-container"}>
                <span className = {"head-icon"}>{props.icon}</span>
                <span className = {"head-name"}>{props.name}</span>
            </div>
        </div>
    )
}

export default Head;