import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_MENU = [
  { title: "영화관리", url: "admin/movie" },
  { title: "예매관리", url: "admin/reserve" },
  { title: "매출관리", url: "admin/sales" },
  { title: "회원관리", url: "admin/member" },
];

export default function AdminSidebar() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav className="h-[600px] w-fit rounded border-none bg-tertiary">
      <menu className="m-10 flex flex-col gap-7 text-lg">
        {NAV_MENU.map((item) => (
          <li key={crypto.randomUUID()}>
            <NavLink
              to={`/${item.url}`}
              className={({ isActive }) => {
                return isActive
                  ? `text-xl font-bold text-red-200`
                  : `text-white`;
              }}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
        <li>
          <div
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
          >
            고객센터관리
            <ul
              className={`mt-2 overflow-hidden text-[15px] transition-all duration-300 ease-in-out ${
                isHovering ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li
                className={`mb-1 transition-opacity duration-500 ${
                  isHovering ? "opacity-100 delay-100" : "opacity-0 delay-0"
                }`}
              >
                공지사항 관리
              </li>
              <li
                className={`mb-1 transition-opacity duration-500 ${
                  isHovering ? "opacity-100 delay-300" : "opacity-0 delay-0"
                }`}
              >
                1:1 문의 관리
              </li>
            </ul>
          </div>
        </li>
      </menu>
    </nav>
  );
}
