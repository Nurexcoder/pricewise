"use client";
import { CircularProgress } from "@mui/joy";
import React from "react";

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <div onClick={() => setLoading(!loading)}>
      {children}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 h-screen w-screen flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default LoadingProvider;
