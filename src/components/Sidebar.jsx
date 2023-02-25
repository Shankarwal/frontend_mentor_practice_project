import { FaBars, FaTimes } from "react-icons/fa";
import { socials, links } from "../data";
import logo from "../assets/logo.svg";
import { useState } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <main>
        <button className="toggle" onClick={() => setToggle(!toggle)}>
          <FaBars />
        </button>
      </main>
      <aside className={`${toggle ? "sidebar sidebar-show" : "sidebar"}`}>
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <button className="toggle">
            <FaTimes
              style={{ color: "#f03e3e" }}
              onClick={() => setToggle(!toggle)}
            />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>
                  <span>{<link.icon />}</span>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="social-container">
          <ul className="social-links">
            {socials.map((handle) => {
              return (
                <li key={handle.id}>
                  <a href={handle.url}>{<handle.icon />}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
