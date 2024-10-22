import React from "react";

// Importing components
import TicketCard from "./TicketCard";
import GroupHeader from "./GroupHeader";

// Import SVGs for priorities
import LowPriorityIcon from "../assets/low-priority.svg";
import MediumPriorityIcon from "../assets/medium-priority.svg";
import HighPriorityIcon from "../assets/high-priority.svg";
import UrgentPriorityIcon from "../assets/urgent-priority_orange.svg";
import NoPriorityIcon from "../assets/no-priority.svg";

// Import SVGs for statuses
import TodoIcon from "../assets/todo.svg";
import InProgressIcon from "../assets/in-progress.svg";
import BacklogIcon from "../assets/backlog.svg";
import Cancelled from "../assets/Cancelled.svg";
import Done from "../assets/Done.svg";

// Main Function
const MainContent = ({ tickets, users, groupBy, sortBy }) => {
  const groupTickets = () => {
    switch (groupBy) {
      case "status":
        return groupByCategory(tickets, "status");
      case "user":
        return groupByCategory(tickets, "userId", true);
      case "priority":
        return groupByCategory(tickets, "priority");
      default:
        return tickets;
    }
  };

  const groupByCategory = (items, key, isUser = false) => {
    return items.reduce((acc, ticket) => {
      let groupValue = isUser ? ticket[key] : ticket[key];
      if (!acc[groupValue]) {
        acc[groupValue] = [];
      }
      acc[groupValue].push(ticket);
      return acc;
    }, {});
  };

  const getUser = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  const sortTickets = (tickets) => {
    if (sortBy === "priority") {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === "title") {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const getPriorityLabelAndIcon = (priority) => {
    switch (priority) {
      case "1":
        return { label: "Low", icon: LowPriorityIcon };
      case "2":
        return { label: "Medium", icon: MediumPriorityIcon };
      case "3":
        return { label: "High", icon: HighPriorityIcon };
      case "4":
        return { label: "Urgent", icon: UrgentPriorityIcon };
      case "0":
        return { label: "No Priority", icon: NoPriorityIcon };
      default:
        return { label: "", icon: null };
    }
  };

  const getStatusLabelAndIcon = (status) => {
    switch (status) {
      case "Cancelled":
        return { label: "Cancelled", icon: Cancelled };
      case "Done":
        return { label: "Done", icon: Done };
      case "Todo":
        return { label: "Todo", icon: TodoIcon };
      case "In progress":
        return { label: "In Progress", icon: InProgressIcon };
      case "Backlog":
        return { label: "Backlog", icon: BacklogIcon };
      default:
        return { label: "", icon: null };
    }
  };

  const groupedTickets = groupTickets();

  return (
    <main className="main-content">
      <div className="kanban-board">
        {Object.entries(groupedTickets).map(([group, tickets]) => (
          <div key={group} className="group-section">
            <GroupHeader
              group={group}
              tickets={tickets}
              groupBy={groupBy}
              getUser={getUser}
              getPriorityLabelAndIcon={getPriorityLabelAndIcon}
              getStatusLabelAndIcon={getStatusLabelAndIcon}
            />
            {sortTickets(tickets).map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                getUser={getUser}
                groupBy={groupBy}
              />
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .main-content {
          /* flex: 1; */
          padding: 20px;
          background-color: #f4f5f7;
        }

        .kanban-board {
          display: flex;
          overflow-x: auto;
          padding-bottom: 20px;
        }

        .group-section {
          min-width: 280px;
          max-width: 320px;
          margin-right: 20px;
        }
      `}</style>
    </main>
  );
};

export default MainContent;
