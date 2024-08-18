import './Title.css';

const Title = ({ type, text }) => {
    return (
        <>
            {type === 'primary' ? <h1>{text}</h1> : <h2>{text}</h2>}
        </>
    );
}

export default Title;