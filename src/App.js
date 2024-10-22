import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const [groupBy, setGroupBy] = useState(() => {
    return localStorage.getItem("groupBy") || "status";
  });

  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem("sortBy") || "priority";
  });

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  const handleGroupChange = (groupOption) => {
    setGroupBy(groupOption);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  return (
    <div className="app-container">
      <Header
        onGroupChange={handleGroupChange}
        onSortChange={handleSortChange}
        groupBy={groupBy}
        sortBy={sortBy}
      />
      <MainContent
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
};

export default App;
