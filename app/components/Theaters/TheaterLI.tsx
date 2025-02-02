import Link from 'next/link'
import { TheaterType } from "@/app/utils/typeDeclarations";
export default function TheaterLI({ theater}: {theater: TheaterType }) {
  return (
    <li key={theater.id}>
      <Link href={{
          pathname: `/theaters/${theater.id}`,
        }}
      >
        {theater.name}
      </Link>
    </li>
  );
}
