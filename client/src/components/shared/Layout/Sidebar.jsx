import React from "react";
import { userMenu } from "./Menus/userMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-[94vh] w-1/5 text-center py-auto bg-gray-900 text-white">
      {userMenu.map((item) => {
        return (
          <div key={item.label} className="py-4">
            <Link to={item.path}>
              <i className={`w-16 h-12 ${item.icon}`} />
              <h3 className="text-2xl">{item.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
