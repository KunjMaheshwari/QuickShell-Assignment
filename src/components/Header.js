// Header.js
import React from "react";
import DisplayDropdown from "./DisplayDropdown";

const Header = ({ groupBy, sortBy, onGroupChange, onSortChange }) => {
  return (
    <header className="header">
      <DisplayDropdown
        groupBy={groupBy}
        sortBy={sortBy}
        onGroupChange={onGroupChange}
        onSortChange={onSortChange}
      />
      {/* <h1>Kanban Board</h1> */}

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: purple;
          padding: 20px;
          background-color: #fff;
        }
      `}</style>
    </header>
  );
};

export default Header;
