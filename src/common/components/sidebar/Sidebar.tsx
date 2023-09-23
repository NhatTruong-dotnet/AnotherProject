import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { PATH_CONSTANTS } from "../../../shared/routePath";
import { IPropsSideBar } from "../IPropsSideBar";
import styles from "./sidebar.module.css";
export const Sidebar: React.FC<IPropsSideBar> = (props) => {
  const { accounts } = useMsal();

  const MAINTAINCE_SECTION = [
    "Company",
    "BusinessArea",
    "BusinessGroup",
    "CostCenter",
    "Country",
    "Users",
    "UserAccess",
    "UtilizationGroup",
    "CostStack",
    "Customer",
    "Fiscal Year",
    "Project",
  ];
  const ROUTE = [
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.COMPANY,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.BUSSINESSAREA,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.BUSSINESSGROUP,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.COSTCENTER,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.COUNTRY,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.USERS,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.USERACCESS,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.UTITLIZATIONGROUP,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.COSTSTACK,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.CUSTOMER,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.FISCALYEAR,
    PATH_CONSTANTS.SIDEBAR.MAINTAINCE.PROJECT,
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <img
          src="data:image/png;base64,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"
          alt="Logo"
          width="100%"
          height="45"
          className="d-inline-block align-text-top"
        />
        <span>{accounts[0]?.username}</span>
        <span>
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
            </svg>
          </div>
          Admin
        </span>
      </div>
      <hr></hr>
      <div className={styles.sidebarContent}>
        {/* Home */}
        <>
          <a href="/" className={styles.sidebarTitleSection}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" color="#0d6efd" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
            <span className={styles.sidebarTitleSection}>Home</span>

          </a>
        </>
        
        {/* Dynamic selected section */}
        <>
        <p className={styles.sidebarTitleSection}>{props.sectionSelectedName}</p>
        <ul>
          {props.itemSection.map((item, index) => {
            return (
              <li className={styles.sidebarItem}>
                <a href={props.itemRouteSection[index]} >
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z"></path></svg>
                  <span>{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
        </>

        {/* Maintaince section */}
        <>
        <p className={styles.sidebarTitleSection}>Maintaince</p>
        <ul>
          {MAINTAINCE_SECTION.map((item, index) => {
            return (
              <li className={styles.sidebarItem}>
                <a href={ROUTE[index]} >
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg> 
                  <span>{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
        </>
        
      </div>
      <hr></hr>
      <div className={styles.sidebarBottom}>
        <a href="" className={styles.sidebarItem}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#0d6efd" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg><span>Logout</span>
        </a>
      </div>
    </div>
  );
};
