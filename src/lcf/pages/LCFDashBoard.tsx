import React from "react";
import { Sidebar } from "../../common/components/sidebar/Sidebar";
import { PATH_CONSTANTS } from "../../shared/routePath";

export default function LCFDashBoard() {
  return (
    <>
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
    </>
  );
}
