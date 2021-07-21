import React, { useState } from "react";
import Tabs from "./Tabs";
import "./AppHeader.css";

const AppHeader = () => {
  // hardcoding navigation tab metadata. should be fetched on app load. Available in store through the app
  const [tabData] = useState([
    {
      label: "Gravity",
      route: "/gravity"
    },
    {
      label: "Martian",
      route: "/martian"
    },
    {
      label: "Interstellar",
      route: "/interstellar"
    }
  ]);

  return (
    <div>
      <h1>Movies</h1>
      <div className="tabs">
        {tabData.map(ele => (
          <Tabs label={ele.label} link={ele.route} />
        ))}
      </div>
    </div>
  );
};

export default AppHeader;
