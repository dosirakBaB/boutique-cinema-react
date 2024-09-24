import React from "react";
import Nav from "./Nav";
import Search from "../common/Search";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";

const HEADER_MENU = [
  { title: "로그인", url: "/login" },
  { title: "회원가입", url: "/join" },
  { title: "고객센터", url: "/support" },
];

export default function MemberHeader() {
  return (
    <header className="relative w-full pt-3">
      <h1 className="sr-only">Boutique Cinema</h1>
      <ul className="mb-8 flex justify-end gap-4 text-sm">
        {HEADER_MENU.map((item) => (
          <li className="hover:text-secondary">
            <Link to={item.url}>
              <h2>{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-end justify-between">
        <Link to={"/"} className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <Logo />
        </Link>
        <Nav />
        <Search />
      </div>
    </header>
  );
}
