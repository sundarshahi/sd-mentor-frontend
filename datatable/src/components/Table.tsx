import styles from "./Table.module.css";
import { useState } from "react";
interface TableData {
  data: {
    id: number;
    name: string;
    age: number;
  }[];
}
const Table = ({ data }: TableData) => {
  const [rows, setRows] = useState(5);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / rows);

  const startIndex = (page - 1) * rows;
  const endIndex = startIndex + rows;
  const currentPageData = data.slice(startIndex, endIndex);
  

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.tableDiv}>
          <h1>Data Table</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Age</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((tableItem) => (
                <tr key={tableItem.id}>
                  <td className={styles.td}>{tableItem.id}</td>
                  <td className={styles.td}>{tableItem.name}</td>
                  <td className={styles.td}>{tableItem.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pages}>
          <div>
            <button className={styles.btn} onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
            {" "}Pages {page} of {totalPages}{" "}
            <button className={styles.btn} onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}>Next</button>
          </div>
          
          <div style={{ width: "10%" }}></div>
          <div style={{ display: "flex"}}>
            Rows per page:
            <select
              className={styles.dropdown}
              onChange={(e) => {
                setRows(Number(e.target.value));
                setPage(1);
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
