'use client'

import { PropsWithChildren } from 'react';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '@/amplify/data/resource';
import { Amplify } from 'aws-amplify';

// Export the client for use in components
export const client = generateClient<Schema>();

export function AmplifyProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
} 