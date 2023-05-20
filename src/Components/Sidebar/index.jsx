import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Sidebar() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const SidebarItems = [
    { id: 1, name: "Ana sayfa", img: "house.svg" },
    { id: 2, name: "Shorts", img: "shorts.svg" },
    { id: 3, name: "Abonelikler", img: "subs.svg" },
    { id: 4, name: "Kitaplık", img: "book.svg" },
  ];

  return (
    <div className="sidebar">
     
     {!isOpen && (
      <div className="sidebar-closed">
        {SidebarItems.map((items) => (
          <Link to="" key={items.id} className="li">
            <img id="icons" src={items.img} />
            <h5>{items.name}</h5>
          </Link>
        ))}
      </div>)}

      {isOpen && (
          <div className="sidebar-open">
                    
          </div>
      )}
    </div>
  );
}
