import React from "react";
import "./App.css";
import CollegeBasketballTeams from "./CollegeBasketballTeams.json";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  return <h1>Colleges in NCAA Basketball</h1>;
}

class College extends React.Component<Team> {
  render() {
    const oneCollege = this.props;

    return (
      <div className="card">
        <h2>School Name: {oneCollege.school}</h2>
        <h2>Mascot Name: {oneCollege.name}</h2>
        <h2>City: {oneCollege.city}</h2>
        <h2>State: {oneCollege.state}</h2>
      </div>
    );
  }
}

function CollegeList() {
  return (
    <div className="card-container">
      {CollegeBasketballTeams.teams.map((team: Team) => (
        <College key={team.school} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <CollegeList />
    </div>
  );
}

export default App;
