"use client";
import { useEffect, useState } from "react";
import { SpaceType } from "@/app/utils/typeDeclarations";
import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider";
import { TextSpinnerLoader } from "../loader/Loader";
import styles from "./space.module.css";
import SpaceProfileForAdmin from "./SpaceProfileForAdmin";
import SpaceProfileForVisitor from "./SpaceProfileForVisitor";
import { Tabs } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
export default function SpaceShow({ id }: { id: number }) {
  const client = useAmplifyClient();
  const router = useRouter();
  const [space, setSpace] = useState<SpaceType>();
  const userRole: "admin" | "visitor" = "admin";
  function onDelete() {
    router.push('/spaces')
  }
  async function updateSpace(space: SpaceType) {
    await client.models.spaces.update(space);
  }
  useEffect(() => {
    async function fetchSpace() {
      try {
        console.log("Attempting to fetch space...");
        const response = await client.models.spaces.get({ id });
        if (response.data) {
          setSpace(response.data as SpaceType);
        }
        console.log("Response:", response);
      } catch (error) {
        console.error("Error details:", error);
      }
    }

    fetchSpace();
  }, [client]);

  // let spaceTabs;
  // if (space && space.spaces && space.spaces.length > 0) {
  //   spaceTabs = space.spaces.map((space) => (
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
  if (!space) {
    return <TextSpinnerLoader text="Loading space" />
  }
  return (
    <div className={styles.profile}>
      {userRole === "admin" ? (
        <SpaceProfileForAdmin onDelete={onDelete} space={space} updateSpace={updateSpace} />
      ) : (
        <SpaceProfileForVisitor space={space} />
      )}
      {!space.fake && (
        <div>
          <h2>Theaters</h2>
          {/* {userRole === "admin" && (
            <SpaceAgreementFormForSpaces
              space={space}
              onFormSubmit={updateSpace}
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
