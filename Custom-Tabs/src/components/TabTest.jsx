import React from "react";
import Tabs from "./Tabs";

function Contact() {
  return <div>This is the Contact tab.</div>;
}

function TabTest() {
  const tabs = [
    {
      label: "Home",
      content: <div>This is the Home tab.</div>,
    },
    {
      label: "About",
      content: <div>This is the About tab.</div>,
    },
    {
      label: "Contact",
      content: <Contact />,
    },
  ];

  return (
    <div>
      <Tabs tabsContent={tabs} />
    </div>
  );
}

export default TabTest;
