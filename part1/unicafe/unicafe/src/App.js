import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positive = (good / total) * 100;
  if (total) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />
            <StatisticLine text="average" value={total / 3} />
            <StatisticLine
              text="positive"
              value={positive ? positive + `%` : 0}
            />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback Given</p>
      </div>
    );
  }
};

const Button = ({ onClick, text, value }) => {
  return <button onClick={() => onClick(value + 1)}>{text}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button onClick={setGood} text="good" value={good} />
      <Button onClick={setNeutral} text="neutral" value={neutral} />
      <Button onClick={setBad} text="bad" value={bad} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
