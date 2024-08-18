import './App.css';
import Title from "./components/Title/Title";
import Emojis from './components/Emojis/Emojis';
import Buttons from './components/Buttons/Buttons';
import Results from './components/Results/Results';
import { EMOJIS } from './base_emojis';
import { useState } from 'react';

function App() {
    const [emojis, setEmojis] = useState(EMOJIS);
    const [showResults, setShowResults] = useState(false);

    const presenceVote = emojis.some((emoji) => emoji.vote > 0);

    const setItemLocalStorage = (data) => {
        localStorage.setItem('emojis_vote', JSON.stringify(data));
    }

    const handleVoteEmoji = (id) => {
        const voteEmoji = emojis.map((emoji) => emoji.id === id ? { ...emoji, vote: emoji.vote + 1 } : emoji);
        setEmojis(voteEmoji);
        setItemLocalStorage(voteEmoji);
        setShowResults(false);
    }

    const handleResetVotes = () => {
        const resetVoteEmoji = emojis.map((emoji) => ({ ...emoji, vote: emoji.vote = 0 }));
        setEmojis(resetVoteEmoji);
        setItemLocalStorage(resetVoteEmoji);
        setShowResults(false);
    }

    const handleShowResults = () => {
        setShowResults(true);
    }

    return (
        <>
            <div className='emojis-vote'>
                <Title type='primary' text='Голосування за найкращий смайлик' />
                <Emojis emojis={emojis} handleVoteEmoji={handleVoteEmoji} />
            </div>
            {presenceVote && <Buttons textResults='Show Results' textReset='Reset Votes'
                handleResetVotes={handleResetVotes} handleShowResults={handleShowResults} />}
            {showResults && (
                <div className='emojis-vote-results'>
                    <Title type='secondary' text='Результати голосування:' />
                    <Results emojis={emojis} />
                </div>
            )}
        </>
    );
}

export default App;