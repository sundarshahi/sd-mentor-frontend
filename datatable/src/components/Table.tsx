import type { TableHeader, TableBody } from "../App";
import styles from "./Table.module.css";
import { useState } from "react";
interface TableProps {
  tableHeaders: TableHeader[];
  tableBody: TableBody[];
}
const Table = ({ tableHeaders, tableBody }: TableProps) => {
  const [rows, setRows] = useState(5);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(tableBody.length / rows);

  const startIndex = (page - 1) * rows;
  const endIndex = startIndex + rows;
  const currentPageData = tableBody.slice(startIndex, endIndex);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.tableDiv}>
          <h1>Data Table</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th className={styles.th} key={header.key}>
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((val, colIndex) => (
                    <td key={colIndex} className={styles.td}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pages}>
          <div>
            <button
              className={styles.btn}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>{" "}
            Pages {page} of {totalPages}{" "}
            <button
              className={styles.btn}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          </div>

          <div style={{ width: "10%" }}></div>
          <div style={{ display: "flex" }}>
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
