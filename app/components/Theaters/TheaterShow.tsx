"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TheaterType } from "@/app/utils/typeDeclarations";
import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider";
import { TextSpinnerLoader } from "../loader/Loader";
import styles from "./theater.module.css";
import TheaterProfileForAdmin from "./TheaterProfileForAdmin";
import TheaterProfileForVisitor from "./TheaterProfileForVisitor";
import { Tabs } from "@aws-amplify/ui-react";
export default function TheaterShow({ id }: { id: number }) {
  const client = useAmplifyClient();
  const router = useRouter()
  const [theater, setTheater] = useState<TheaterType>();
  const userRole: "admin" | "visitor" = "admin";
  function onDelete() {
    router.push('/theaters')
  }
  async function updateTheater(theater: TheaterType) {
    await client.models.theaters.update(theater);
  }
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

  // let spaceTabs;
  // if (theater && theater.spaces && theater.spaces.length > 0) {
  //   spaceTabs = theater.spaces.map((space) => (
  //     <Tab
  //       eventKey={`space-${space.id}`}
  //       title={space.name}
  //       key={`space-${space.id}`}
  //     >
  //       <SpaceInfoTab space={space} />
  //     </Tab>
  //   ));
  // } else {
  //   spaceTabs = <div>No spaces found</div>;
  // }
  if (!theater) {
    return <TextSpinnerLoader text="Loading theater" />
  }
  return (
    <div className={styles.profile}>
      {userRole === "admin" ? (
        <TheaterProfileForAdmin onDelete={onDelete} theater={theater} updateTheater={updateTheater} />
      ) : (
        <TheaterProfileForVisitor theater={theater} />
      )}
      {!theater.fake && (
        <div>
          <h2>Spaces</h2>
          {/* {userRole === "admin" && (
            <SpaceAgreementFormForTheaters
              theater={theater}
              onFormSubmit={updateTheater}
            />
          )} */}
          {/* <Tabs isLazy>
            {spaceTabs}
          </Tabs> */}
          <hr />
        </div>
      )}
    </div>
  );
}
