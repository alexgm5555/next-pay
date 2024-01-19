import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";
import AllProducts from "./components/AllProducts/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<>cargando</>}>
        <AllProducts></AllProducts>
      </Suspense>
    </main>
  );
}
