import { Input } from "../input/Input";
import { IPropsTable } from "../IPropsTable";
import styles from "./table.module.css";
export const Table: React.FC<IPropsTable> = (props) => {
  return (
    <>
      <table className={`col-sm-6 col-md-12`}>
        <thead>
          <tr>
            {[...props.stickyColumns].map((item) => {
              return <th className={styles.headerItem}>{item}</th>;
            })}
            {props.headerNames.map((item) => {
              return <th className={styles.headerItem}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              props.data.map((item:any)=>{
                return <td className={styles.bodyItemStickyColumns}>{item}</td>
              })
            }
          </tr>
          <tr>
            {
              props.data.map((item:any)=>{
                return <td className={styles.bodyItemStickyColumns}>{item}</td>
              })
            }
          </tr>
          <tr>
            {
              props.data.map((item:any)=>{
                return <td className={styles.bodyItemStickyColumns}>{item}</td>
              })
            }
          </tr>
          <tr>
            {
              props.data.map((item:any)=>{
                return <td className={styles.bodyItemStickyColumns}>{item}</td>
              })
            }
          </tr>
          <tr>
            {
              props.data.map((item:any)=>{
                return <td className={styles.bodyItemStickyColumns}>{item}</td>
              })
            }
          </tr>
        </tbody>
      </table>
    </>
  );
};
