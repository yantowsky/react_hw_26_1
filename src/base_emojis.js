export const EMOJIS = JSON.parse(localStorage.getItem("emojis_vote")) ||
    [
        { id: 128515, vote: 0 },
        { id: 128522, vote: 0 },
        { id: 128526, vote: 0 },
        { id: 129321, vote: 0 },
        { id: 128525, vote: 0 }
    ];