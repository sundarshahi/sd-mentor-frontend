import Table from "./components/Table";
import "./App.css";

export type TableHeader = { key: string; label: string };
export type TableBody = {
  id: number;
  name: string;
  age: number;
  address: string;
};
function App() {
  const tableHeader: TableHeader[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "address", label: "Address" },
  ];
  const tableBody: TableBody[] = [
    { id: 1, name: "Jimin", age: 30, address: "Busan, South Korea" },
    { id: 2, name: "Jungkook", age: 29, address: "Busan, South Korea" },
    { id: 3, name: "Taehyung", age: 30, address: "Daegu, South Korea" },
    { id: 4, name: "Namjoon", age: 32, address: "Ilsan, South Korea" },
    { id: 5, name: "Jin", age: 34, address: "Seoul, South Korea" },
    { id: 6, name: "Hobi", age: 32, address: "Gwangju, South Korea" },
    { id: 7, name: "Yoongi", age: 33, address: "Daegu, South Korea" },
    { id: 8, name: "Bob", age: 40, address: "New York, USA" },
    { id: 9, name: "Alice", age: 35, address: "London, UK" },
    { id: 10, name: "Jinie", age: 30, address: "Seoul, South Korea" },
  ];

  return (
    <>
      <Table tableHeaders={tableHeader} tableBody={tableBody} />
    </>
  );
}

export default App;
