"use client";

import outputs from "@/amplify_outputs.json";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import styles from "./app.module.css";
import { AmplifyClientProvider } from "@/app/providers/AmplifyClientProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
            <div className={styles.container}>
              <Header />
              <div className={styles.pageContent}>{children}</div>
              <Footer />
            </div>
          </Authenticator>
        </AmplifyClientProvider>
      </body>
    </html>
  );
}
