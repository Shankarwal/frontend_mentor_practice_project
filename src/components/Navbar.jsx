import { FaBars, FaTimes } from "react-icons/fa";
import { links, socials } from "../data";
import logo from "../assets/logo.svg";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const shadow = `${toggle ? "none" : "0 1px 8px rgba(0, 0, 0, 0.1)"}`;

  useEffect(() => {
    if (window.innerWidth >= 692) {
      document.querySelector(".links-container").style.height = "auto";
    }
  }, []);

  return (
    <motion.nav className="nav" style={{ boxShadow: shadow }}>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <button className="toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaTimes style={{ color: "#f03e3e" }} /> : <FaBars />}
        </button>
      </div>
      <motion.div
        className="links-container"
        data-toggle={toggle}
        // animate={{
        //   maxHeight: `${toggle ? "auto" : 0}`,
        // }}
        // transition={{ duration: 0.4 }}
      >
        <motion.ul
          className="links"
          layout
          transition={{ type: "spring", duration: 1 }}
        >
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
      <ul className="social-links">
        {socials.map((handle) => {
          return (
            <li key={handle.id}>
              <a href={handle.url}>{<handle.icon />}</a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
