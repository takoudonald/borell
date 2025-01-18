import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className || ""}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="px-4 py-2 border-b">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
