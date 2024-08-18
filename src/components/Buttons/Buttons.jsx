import './Buttons.css';

const Buttons = ({ textResults, textReset, handleShowResults, handleResetVotes }) => {
    return (
        <div className="buttons__wrapper">
            <button className='button-results' onClick={handleShowResults}>{textResults}</button>
            <button className='button-reset' onClick={handleResetVotes}>{textReset}</button>
        </div>
    );
}

export default Buttons;