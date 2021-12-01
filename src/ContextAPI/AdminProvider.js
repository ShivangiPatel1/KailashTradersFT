import React, { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [isAdmin,setAdmin] = useState(false);

  const value = [isAdmin,setAdmin];

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default AdminProvider;