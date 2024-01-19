import { Suspense } from "react";
import AllProducts from "../../components/AllProducts/page";
import styles from "./page.module.css";
import HomeLayout from '../../layouts/HomeLayout/page';

const Home = () =>{
  return (
    <HomeLayout>
      <Suspense fallback={<>cargando</>}>
        <AllProducts></AllProducts>
      </Suspense>
    </HomeLayout>
  );
}
export default Home;
