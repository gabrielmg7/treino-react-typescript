import img from '../assets/profile.jpg'
import '../css/avatar.css'

export default function Avatar() {
    return (
        <div className='root'>
            <img
                src={img}
                alt="Avatar"
                className='avatar'
            />
        </div>
    );
}