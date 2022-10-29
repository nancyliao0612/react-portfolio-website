import { useState } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItems = [
    { link: "#", icon: <AiOutlineHome />, id: "#" },
    { link: "#about", icon: <AiOutlineUser />, id: "#about" },
    { link: "#experience", icon: <AiOutlineBook />, id: "#experience" },
    { link: "#services", icon: <RiServiceLine />, id: "#services" },
    { link: "#contact", icon: <AiOutlineMessage />, id: "#contact" },
  ];

  const handleClick = (id) => {
    setActiveNav(id);
  };

  return (
    <nav>
      {navItems.map(({ link, icon, id }) => {
        return (
          <a
            href={link}
            key={id}
            className={activeNav === id ? "active" : null}
            onClick={() => handleClick(id)}
          >
            {icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
