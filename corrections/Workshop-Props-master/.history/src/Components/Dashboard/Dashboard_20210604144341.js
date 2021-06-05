import React from "react";
import Membercrd from "../MemberCard/MemberCard";
import "./dashboard.css";
const Dashboard = ({ team, children }) => {
  const handelName = (myname) => {
    alert(`Hello I am ${myname}`);
  };

  return (
    <>
      <div className="team">
        {team.map((member, i) => (
          <Membercrd member={member} key={i} handelName={handelName} />
        ))}
      </div>

      <div>
        <span>Children</span>
        {children}
      </div>
    </>
  );
};

export default Dashboard;
