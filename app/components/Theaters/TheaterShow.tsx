"use client";
import { useEffect, useState } from "react";
import { TheaterType } from "@/app/utils/typeDeclarations";
import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider";
import styles from "./theater.module.css";
import TheaterProfileForAdmin from "./TheaterProfileForAdmin";
import TheaterProfileForVisitor from "./TheaterProfileForVisitor";
export default function TheaterShow({ id }: { id: number }) {
  const client = useAmplifyClient();

  const [theater, setTheater] = useState<TheaterType>();
  const userRole = "admin";

  useEffect(() => {
    async function fetchTheater() {
      try {
        console.log("Attempting to fetch theater...");
        const response = await client.models.theaters.get({ id });
        if (response.data) {
          setTheater(response.data as TheaterType);
        }
        console.log("Response:", response);
      } catch (error) {
        console.error("Error details:", error);
      }
    }

    fetchTheater();
  }, [client]);
  if (!theater) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.profile}>
      {userRole === "admin" ? (
        <TheaterProfileForAdmin theater={theater} updateTheater={() => {}} />
      ) : (
        <TheaterProfileForVisitor theater={theater} />
      )}
    </div>
  );
}
