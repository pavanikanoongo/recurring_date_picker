"use client";
import React from "react";
import { RecurrProvider } from "../context/RecurrContext";

const ProvidersWrapper = ({ children }) => {
  return <RecurrProvider>{children}</RecurrProvider>;
};

export default ProvidersWrapper;

