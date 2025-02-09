'use client'
import { useEffect, useState } from "react";

import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider"; 
import SpaceLI from "@/app/components/Spaces/SpaceLI";
import { SpaceType } from "@/app/utils/typeDeclarations";
import { TextSpinnerLoader } from "../loader/Loader";
export default function SpacesList() {
  const client = useAmplifyClient();
  const [spaces, setSpaces] = useState<SpaceType[]>([]);

  useEffect(() => {
    async function fetchSpaces() {
      try {
        console.log('Attempting to fetch spaces...');
        const response = await client.models.spaces.list({
          selectionSet: ['id', 'name']
        });
        console.log('Response:', response);
        setSpaces(response.data as SpaceType[]);
      } catch (error) {
        console.error('Error details:', error);
      }
    }

    fetchSpaces();
  }, [client]);

  let otherSpacesList = spaces.map((space) => (
    <SpaceLI key={space.id} space={space} />))
    if (!spaces.length) {
      return <TextSpinnerLoader text="Loading spaces" />
    }
   return (
    <div>
      <h3>Your spaces</h3>
      <ul></ul>
      <h3>Other spaces</h3>
      <ul>{otherSpacesList}</ul>
      {/* {me.subscription_status == "active" && (
        <Link to="/spaces/new">
          <Button>Add New</Button>
        </Link>
      )} */}
    </div>
  );
}
