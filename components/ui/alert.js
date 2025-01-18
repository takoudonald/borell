import React from "react";

export const Alert = ({ children, className }) => (
  <div className={`bg-yellow-50 border-yellow-200 p-4 rounded-md ${className || ""}`}>
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <div className="text-gray-700">{children}</div>
);
