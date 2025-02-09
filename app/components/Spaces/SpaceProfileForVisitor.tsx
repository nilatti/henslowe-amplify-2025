import { SpaceType } from "@/app/utils/typeDeclarations";

export default function SpaceProfileForVisitor({
  space,
}: {
  space: SpaceType;
}) {
  return (
    <div>
      <h2>{space.name}</h2>
      {!!space.mission_statement && <div>{space.mission_statement}</div>}
      {!!space.street_address && (
        <div>
          {space.street_address}
          <br />
          {space.city}, {space.state} {space.zip}
          <br />
        </div>
      )}
      {!!space.phone_number && <div>{space.phone_number}</div>}
      {!!space.website && (
        <div>
          <a href={"http://" + space.website} target="_blank">
            {space.website}
          </a>
        </div>
      )}
    </div>
  );
}
