import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH_CONSTANTS } from "../../../shared/routePath";
import { Header } from "../../components/header/Header";
import styles from "./home.module.css";

 const Home: React.FC = () => {
  const navigate = useNavigate();
  const SECTION = [
    "Leveraged Cost Forecast",
    "Workforce Utilization",
    "Customer Excellence",
    "PPMC",
    "Revenue",
  ];
  const ROUTE = [
    PATH_CONSTANTS.HOME.LCF_DASHBOARD,
    PATH_CONSTANTS.HOME.WU_DASHBOARD,
    PATH_CONSTANTS.HOME.CE_DASHBOARD,
    PATH_CONSTANTS.HOME.PPMC_DASHBOARD,
    PATH_CONSTANTS.HOME.RE_DASHBOARD,
  ];
  return (
    <>
      <Header />
      <div className={styles.container}>
        {SECTION.map((item, index) => {
            return <button onClick={()=>{navigate(ROUTE[index])}} className={styles.containerButton}>{item}</button>;
        })}
      </div>
    </>
  );
};
export default Home;