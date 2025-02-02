'use client'
import { useEffect, useState } from "react";
import { TheaterType } from "@/app/utils/typeDeclarations";
import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider";
export default function TheaterShow({id}: {id: number}) {
  const client = useAmplifyClient();
  
    const [theater, setTheater] = useState<TheaterType>();
    
    useEffect(() => {
      async function fetchTheater() {
        try {
          console.log('Attempting to fetch theater...');
          const response = await client.models.theaters.get({id})
          if (response.data) {
          setTheater(response.data as TheaterType)
        }
          console.log('Response:', response);
        } catch (error) {
          console.error('Error details:', error);
        }
      }
  
      fetchTheater();
    }, [client]);
    if (!theater) {
      return <div>Loading...</div>
    }
    return (
        <div>
      <h2>{theater.name}</h2>
      {!!theater.mission_statement && <div>{theater.mission_statement}</div>}
      {!!theater.street_address && (
        <div>
          {theater.street_address}
          <br />
          {theater.city}, {theater.state} {theater.zip}
          <br />
        </div>
      )}
      {!!theater.phone_number && <div>{theater.phone_number}</div>}
      {!!theater.website && (
        <div>
          <a href={"http://" + theater.website} target="_blank">
            {theater.website}
          </a>
        </div>
      )}
    </div>
  );
}
