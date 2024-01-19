import { Suspense } from "react";
import AllProducts from "../../components/AllProducts/page";

export default function Home() {
  return (
    <Suspense fallback={<>cargando</>}>
      <AllProducts></AllProducts>
    </Suspense>
  );
}
