'use client'

import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";
import { createContext, useContext, ReactNode } from "react";

const AmplifyClientContext = createContext<ReturnType<typeof generateClient<Schema>> | null>(null);

export function AmplifyClientProvider({ children }: { children: ReactNode }) {
  const client = generateClient<Schema>();

  return (
    <AmplifyClientContext.Provider value={client}>
      {children}
    </AmplifyClientContext.Provider>
  );
}

export function useAmplifyClient() {
  const client = useContext(AmplifyClientContext);
  if (!client) {
    throw new Error('useAmplifyClient must be used within an AmplifyClientProvider');
  }
  return client;
} 