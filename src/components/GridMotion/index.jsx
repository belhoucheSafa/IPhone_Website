import GridMotionUi from "../../ui/GridMotionUi";
import "./GridMotion.css"
const items = [
  "Item 1",
  <div key="jsx-item-1">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 2",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "Item 4",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 5",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "Item 7",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  
];

import React from "react";

const GridMotion = () => {
  return (
    <div id="gridMotion">
      <GridMotionUi items={items} />
    </div>
  );
};

export default GridMotion;
