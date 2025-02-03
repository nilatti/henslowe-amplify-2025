"use client";
import { use, useEffect } from "react";

import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider";
import { useState } from "react";

export default function ProductionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const client = useAmplifyClient();
  const { id } = use(params);
  type Production = {
    end_date: string;
    id: number;
    lines_per_minute: number;
    name?: string;
    start_date: string;
    theater_id: number;
  };
  const [production, setProduction] = useState<Production>();

  // useEffect(() => {
  //   async function fetchProduction() {
  //     try {
  //       console.log('Attempting to fetch production...');
  //       const numericId = 2;  // Hardcoded for testing
  //       console.log('Using ID:', numericId, 'Type:', typeof numericId);

  //       const response = await client.models.productions.get({
  //         id: numericId
  //       });
  //       console.log('Full response:', JSON.stringify(response, null, 2));
  //       const response2 = await client.models.productions.get({id: 2})
  //       console.log('Response2:', response2);
  //     } catch (error) {
  //       console.error('Error details:', error);
  //       // console.error('Error name:', error.name);
  //     // console.error('Error message:', error.message);
  //     // if (error.cause) {
  //     //   console.error('Error cause:', error.cause);
  //     // }
  //     }
  //   }

  //   fetchProduction();
  // }, [client]);
  return (
    <div>
      <h1>Production Page: {id} </h1>
    </div>
  );
}
