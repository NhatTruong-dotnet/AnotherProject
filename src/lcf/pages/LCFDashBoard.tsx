import { Sidebar } from "../../common/components/sidebar/Sidebar";
import { PATH_CONSTANTS } from "../../shared/routePath";
import { Table } from "../../common/components/table/Table";
import styles from "./lcfDashboard.module.css";
import Button from "../../common/components/button/Button";
import Modal from "../../common/components/modal/Modal";
import { useModal } from "../../common/hooks/useModal";
export default function LCFDashBoard() {
  const [modalState, openModal,closeModal] = useModal(false);
  return (
    <>
      <div className={`col-12 ${styles.wrapper}`}>
        <Sidebar
          sectionSelectedName="Leveraged Cost Forecast"
          itemSection={["Summary", "Payroll", "Subcontract", "Non-Labour"]}
          itemRouteSection={[
            PATH_CONSTANTS.LCF.SUMMARY,
            PATH_CONSTANTS.LCF.PAYROLL,
            PATH_CONSTANTS.LCF.SUBCONTRACT,
            PATH_CONSTANTS.LCF.NONLABOUR,
          ]}
        />
        <div >
        <Modal show={modalState.show} closeModal={closeModal}>
          <p>Modal</p>
        </Modal>  
          <div>
            <Button label="New" />
            <Button label="Filter"  onSelectChange={openModal}/>
            <Button label="Update" />
          </div>
          <Table
            headerNames={[
              "Apr (US$M)",
              "May (US$M)",
              "Jun (US$M)",
              "Jul (US$M)",
              "Aug (US$M)",
              "Sep (US$M)",
              "Oct (US$M)",
              "Nov (US$M)",
              "Dec (US$M)",
              "Jan (US$M)",
              "Feb (US$M)",
              "Mar (US$M)",
              "Total ",
            ]}
            data={[
              "Business Group 1",
              "Great Britian",
              "CUB0A47478",
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]}
            stickyColumns={["Business Area", "Country", "Cost Center"]}
          />
        </div>
      </div>
    </>
  );
}
