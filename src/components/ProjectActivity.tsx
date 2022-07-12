import ItemProject from "./ItemProject"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import '../css/projectActivity.css'
import { RotateLeft } from "@mui/icons-material";

const ProjectActivity = (props:any) => {
    return (
        <div className="projectActivity_container">
            <div className="project-head">
                <span>{props.title}</span>
                <AddCircleOutlineIcon sx={{paddingBottom: 2}}/>
            </div>
            <div className="activities">
                {props.items.map((item:any, index:number) => {
                    return (
                        <ItemProject 
                            key={item.key}
                            tag = {item.tag}
                            author = {item.author}
                            tagColor = {item.tagColor}
                            tagBgColor = {item.tagBgColor}
                            title = {item.title}
                            time = {item.time}
                            onMouseOver = {()=>''}
                        >
                            {item.child}
                        </ItemProject>
                    )
                })}
            </div>
        </div>
    )
}


export default ProjectActivity