import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-[300px]">
      <menu className="flex justify-around text-xl font-medium">
        <li className="hover:text-secondary">
          <Link to={"/move"}>영화</Link>
        </li>
        <li className="hover:text-secondary">
          <Link to={"/reservation"}>예매</Link>
        </li>
      </menu>
    </nav>
  );
}
