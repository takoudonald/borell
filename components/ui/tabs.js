import React, { useState } from "react";

export const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={`tabs-container ${className || ""}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsList = ({ children, className }) => (
  <div className={`tabs-list ${className || ""}`}>{children}</div>
);

export const TabsTrigger = ({ children, value, activeTab, setActiveTab }) => (
  <button
    className={`tabs-trigger ${
      activeTab === value ? "active-tab" : ""
    }`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, value, activeTab }) => {
  if (activeTab !== value) return null;
  return <div className="tabs-content">{children}</div>;
};
