import Table from "./components/Table";
import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      name: "Jimin",
      age: 30,
    },
    {
      id: 2,
      name: "Jungkook",
      age: 29,
    },
    {
      id: 3,
      name: "Taehyung",
      age: 30,
    },
    {
      id: 4,
      name: "Namjoon",
      age: 32,
    },
    {
      id: 5,
      name: "Jin",
      age: 34,
    },
    {
      id: 6,
      name: "Hobi",
      age: 32,
    },
    {
      id: 7,
      name: "Yoongi",
      age: 33,
    },
    {
      id: 8,
      name: "Bob",
      age: 40,
    },
    {
      id: 9,
      name: "Alice",
      age: 35,
    },
    {
      id: 10,
      name: "Jinie",
      age: 30,
    },
  ];

  return (
    <>
      <Table data={data} />
    </>
  );
}

export default App;
