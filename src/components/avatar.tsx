import "../assets/profile.jpg"

const styles = {
    root: {
        margin: '5vw'
    },
    avatar: {
        width: 100,
        borderRadius: '50%',
        padding: 5,
        boxShadow: '0px 5px 25px 0px rgba(0,0,0,0.5)'
    }
}

export default function Avatar() {
    return (
        <div style={styles.root}>
            <img
                src="./src/assets/profile.jpg"
                alt="Avatar"
                style={styles.avatar}
            />
        </div>
    );
}