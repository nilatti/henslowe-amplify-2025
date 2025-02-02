import TheaterShow from "@/app/components/Theaters/TheaterShow"

// import { useParams } from "react-router-dom";
// import {
//   createItemWithParent,
//   getItem,
//   updateServerItem,
// } from "../../api/crud";
// import { Tab, Tabs } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import { Button } from "../Button";
// import LoadingModal from "../LoadingModal";

// import TheaterProfileForAdmin from "./TheaterProfileForAdmin";
// import TheaterProfileForVisitor from "./TheaterProfileForVisitor";
// import TheaterJobsList from "../Jobs/TheaterJobsList";

// import { deleteItem } from "../../api/crud";
// import ProductionInfoTab from "../Productions/ProductionInfoTab";
// import SpaceAgreementFormForTheaters from "../SpaceAgreements/SpaceAgreementFormForTheaters";
// import SpaceInfoTab from "../Spaces/SpaceInfoTab";
// import { useTheaterAuthState } from "../Contexts";
// import { useMeState } from "../../lib/meState";
// import { Profile } from "../Styled";

export default async function Theater(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = parseInt(params.id);
  return <TheaterShow id={id} />;
}
