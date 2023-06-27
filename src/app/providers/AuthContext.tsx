"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            border: "1px solid green",
            padding: "16px",
          },
        }}
      />
      {children}
    </SessionProvider>
  );
}
