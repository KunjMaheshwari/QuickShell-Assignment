import React from "react";
import Urgent_Priority_grey from "../assets/Urgent_Priority_grey.svg";
import UserAvatar from "../components/UserAvatar";

const TicketCard = ({ ticket, getUser, groupBy }) => {
  const userName = getUser(ticket.userId);

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== "user" && <UserAvatar name={userName} />}
      </div>
      <h4>{ticket.title}</h4>
      <div className="ticket-footer">
        <div className="priority-container">
          <img
            src={Urgent_Priority_grey}
            alt="Priority Icon"
            className="priority-icon"
          />
        </div>
        <div className="tag-container">
          <span className="grey-dot"></span> Feature Request
        </div>
      </div>

      <style jsx>{`
        .ticket-card {
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 8px;
          background-color: #fff;
          margin-bottom: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .ticket-id {
          font-weight: 500;
          color: grey;
        }

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 16px;
        }

        h4 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 16px;
          color: #333;
        }

        .ticket-footer {
          display: flex;
          align-items: center;
        }

        .priority-container {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 5px;
          padding-bottom: 1px;
          margin-right: 10px;
        }

        .priority-icon {
          width: 20px;
          height: auto;
          margin: 0;
        }

        .tag-container {
          display: flex;
          align-items: center;
          color: grey;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 5px 10px;
        }

        .grey-dot {
          width: 14 px;
          height: auto;
          background-color: #ccc;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5 px;
        }
      `}</style>
    </div>
  );
};

export default TicketCard;
