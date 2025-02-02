"use client"

import outputs from "@/amplify_outputs.json";


import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { AmplifyClientProvider } from "@/app/providers/AmplifyClientProvider";
Amplify.configure(outputs);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>

    <AmplifyClientProvider>
      <Authenticator>
        {children}
      </Authenticator>
    </AmplifyClientProvider>
        </body>
    </html>
  );
}
