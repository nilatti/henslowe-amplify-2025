import Link from 'next/link'
import { SpaceType } from "@/app/utils/typeDeclarations";
export default function SpaceLI({ space}: {space: SpaceType }) {
  return (
    <li key={space.id}>
      <Link href={{
          pathname: `/spaces/${space.id}`,
        }}
      >
        {space.name}
      </Link>
    </li>
  );
}
