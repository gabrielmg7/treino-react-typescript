
import '../css/ItemProjectStyles.css'

interface ItemProjectProps {
    tag: string,
    time: string,
    title: string,
    author: string,
    tagBgColor: string,
    tagColor: string,
    children: React.ReactNode,
    onMouseOver?: () => any;
}

const ItemProject = (props:ItemProjectProps) => {
    return (
        <div className="itemProject_container" onMouseOver={props.onMouseOver}>
            <div className='tag_time_container'>
                <div className="itemProject_tag" style = {{backgroundColor:props.tagBgColor, color:props.tagColor,}}>
                    <span className={"tag_circle"} style= {{ backgroundColor:props.tagBgColor}}></span>
                    {props.tag}
                </div>
                <div className="itemProject_time">{props.time}</div>
            </div>
            <div className='description_container'>
                <div className='itemProject_title'>{props.title}</div>
                <div className='itemProject_author'>{props.author ? 'by ' + props.author: ''}</div>
            </div>
            <div className='itemProject_children'>
                {props.children}
            </div>
        </div>
    )
}

export default ItemProject