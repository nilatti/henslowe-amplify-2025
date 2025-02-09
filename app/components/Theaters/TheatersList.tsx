'use client'
import { useEffect, useState } from "react";

import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider"; 
import TheaterLI from "@/app/components/Theaters/TheaterLI";
import { TheaterType } from "@/app/utils/typeDeclarations";
import { TextSpinnerLoader } from "../loader/Loader";
export default function TheatersList() {
  const client = useAmplifyClient();
  const [theaters, setTheaters] = useState<TheaterType[]>([]);

  useEffect(() => {
    async function fetchTheaters() {
      try {
        console.log('Attempting to fetch theaters...');
        const response = await client.models.theaters.list({
          selectionSet: ['id', 'name']
        });
        console.log('Response:', response);
        setTheaters(response.data as TheaterType[]);
      } catch (error) {
        console.error('Error details:', error);
      }
    }

    fetchTheaters();
  }, [client]);

  let otherTheatersList = theaters.map((theater) => (
    <TheaterLI key={theater.id} theater={theater} />))
    if (!theaters.length) {
      return <TextSpinnerLoader text="Loading theaters" />
    }
   return (
    <div>
      <h3>Your theaters</h3>
      <ul></ul>
      <h3>Other theaters</h3>
      <ul>{otherTheatersList}</ul>
      {/* {me.subscription_status == "active" && (
        <Link to="/theaters/new">
          <Button>Add New</Button>
        </Link>
      )} */}
    </div>
  );
}
