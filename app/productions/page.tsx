'use client'

import { useEffect, useState } from "react";

import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider";
import { ProductionsLI } from "@/app/components/Productions/ProductionsLI";

type Production = {
  id: number;
  name: string;
}

export default function ProductionsPage() {
  const client = useAmplifyClient();
  const [productions, setProductions] = useState<Production[]>([]);

  useEffect(() => {
    async function fetchProductions() {
      try {
        console.log('Attempting to fetch productions...');
      const response = await client.queries.listProductionNames();
        console.log('Raw SQL response:', response);
        setProductions(response.data as Production[]);
      } catch (error) {
        console.error('Error details:', error);
      }
    }

    fetchProductions();
  }, [client]);

  return (
    <div>
      <h1>Productions</h1>
      {
        productions.length > 0 ? (
          <ul>
            {productions.map(production => (
              <ProductionsLI key={production?.id} name={production.name} id={production.id} />
            ))}
          </ul>
        ) : (
          <p>No productions found</p>
        )
      }
      
    </div>
  );
}
