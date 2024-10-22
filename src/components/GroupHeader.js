import React from "react";
import AddIcon from "../assets/add.svg";
import MenuIcon from "../assets/3dotmenu.svg";
import UserAvatar from "../components/UserAvatar";

const GroupHeader = ({
  group,
  tickets,
  groupBy,
  getUser,
  getPriorityLabelAndIcon,
  getStatusLabelAndIcon,
}) => {
  const renderContent = () => {
    if (groupBy === "user") {
      const userName = getUser(group);
      return (
        <div className="group-details">
          <UserAvatar name={userName} />
          <span>{userName}</span>
          <span>{tickets.length}</span>
        </div>
      );
    }
    if (groupBy === "priority") {
      const { label, icon } = getPriorityLabelAndIcon(group);
      return (
        <div className="group-details">
          <img
            src={icon}
            alt="Priority Icon"
            className="priority-icon"
            style={{ marginRight: "10px" }}
          />
          <span>{label}</span>
          <span>{tickets.length}</span>
        </div>
      );
    }
    if (groupBy === "status") {
      const { label, icon } = getStatusLabelAndIcon(group);
      return (
        <div className="group-details">
          <img src={icon} alt="Status Icon" className="status-icon" />
          <span>{label}</span>
          <span>{tickets.length}</span>
        </div>
      );
    }
  };

  return (
    <div className="group-header">
      {renderContent()}
      <div className="menuIcons">
        <img src={AddIcon} alt="Add Icon" className="icon" />
        <img src={MenuIcon} alt="Menu Icon" className="icon" />
      </div>

      <style jsx>{`
        .group-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 8px;
        }

        .group-details {
          display: flex;
          align-items: center;
        }

        .group-details span:not(:last-child) {
          margin-right: 6px;
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
          margin-right: 10px;
        }

        .priority-icon,
        .status-icon {
          width: 16px;
          height: auto;
          margin-right: 10px;
        }

        .icon {
          width: 20px;
          height: auto;
          margin-left: auto;
          margin-right: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default GroupHeader;
