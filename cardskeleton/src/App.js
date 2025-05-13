import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if(loading)
  {
    return(<SkeletonElement/>)
  }

  return (
    <div className="App">
      <div className="card">
      <div className="title"><b>Skeleton Card</b></div>
      <div className="content">Content after loading skeleton card.</div>
      </div>
    </div>
  );
}

const SkeletonElement = () => {
  return (
    <div className="App">
      <div className="card">
      <div className="title skeleton"></div>
      <div className="content skeleton"></div>
      </div>
    </div>
  );
};


export default App;
