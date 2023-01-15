import React from "react";
import ReactDOM from "react-dom/client";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div>
      <h1 className="title">Dismord</h1>
      <div className="ui comments">
        <UserCard>
          <SingleComment
            name="Carl Adams"
            date="Today at 5:00PM"
            comment="i heard he died from ligma?"
            pic="https://randomuser.me/api/portraits/men/15.jpg"
          />
        </UserCard>
        <UserCard>
          <SingleComment
            name="Catherine Fernandez"
            date="Today at 6:00PM"
            comment="what is ligma"
            pic="https://randomuser.me/api/portraits/women/15.jpg"
          />
        </UserCard>
        <UserCard>
          <SingleComment
            name="Benjamin Garaham"
            date="Today at 7:00PM"
            comment="joe mama"
            pic="https://randomuser.me/api/portraits/men/51.jpg"
          />
        </UserCard>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
