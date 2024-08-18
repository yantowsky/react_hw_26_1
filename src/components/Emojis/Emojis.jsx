import './Emojis.css';

const Emojis = ({ emojis, handleVoteEmoji }) => {
    return (
        <div className="emojis__wrapper">
            {emojis.map(({ id, vote }) => (
                <div key={id} className="emojis__item">
                    <div onClick={() => handleVoteEmoji(id)} className="emojis__img">
                        {String.fromCodePoint(id)}
                    </div>
                    <div className="emojis__vote" style={{ opacity: vote ? 1 : 0 }}>
                        {vote}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Emojis;