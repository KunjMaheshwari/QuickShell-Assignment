import React, { useState, useRef, useEffect } from "react";
import DisplayIcon from "../assets/Display.svg";
import DownIcon from "../assets/down.svg";

const DisplayDropdown = ({ groupBy, sortBy, onGroupChange, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="display-dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-button">
        <img src={DisplayIcon} alt="Display Icon" className="icon" />
        <strong>Display</strong>
        <img src={DownIcon} alt="Down Icon" className="icon" />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            <label>Grouping:</label>
            <select
              value={groupBy}
              onChange={(e) => onGroupChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering:</label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}

      <style jsx>{`
        .display-dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-button {
          display: flex;
          align-items: center;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 4px 8px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .icon {
          width: 16px;
          height: auto;
          margin-right: 5px;
        }

        .dropdown-content {
          display: flex;
          flex-direction: column;
          width: 20em;
          margin-top: 0.5em;
          position: absolute;
          background-color: #f4f5f7;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 8px;
          z-index: 1;
        }

        .dropdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .dropdown-item label {
          margin-right: 2em;
          font-size: 14px;
          color: #666;
        }

        .dropdown-item select {
          width: 12em;
          padding: 5px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default DisplayDropdown;
