import React, { useState, useEffect } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [mostVotes, setMostVotes] = useState(null);

  useEffect(() => {
    const mostVotesHandler = () => {
      const max = Math.max(...votes);
      const res = [];
      [...votes].forEach((item, index) =>
        item === max ? res.push(index) : null
      );
      setMostVotes(res[0]);
    };
    mostVotesHandler();
  }, [votes]);

  const addVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div style={{ marginLeft: "100px", marginTop: "100px" }}>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        next anecdote
      </button>
      <h1>Anecdote with the most votes</h1>

      {`${anecdotes[mostVotes]} has ${Math.max(...votes)} votes`}
    </div>
  );
};

export default App;
