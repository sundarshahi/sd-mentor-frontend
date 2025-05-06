import Tab from './pages/tab'
import './App.css'

function App() {
  const tabs = [
    { label: 'First Tab', content: <p>This is First Tab Content.</p> },
    { label: 'Second Tab', content: <p>This is Second Tab Content.</p> },
    { label: 'Third Tab', content: <p>This is Third Tab Content.</p> },
    { label: 'Fourth Tab', content: <p>This is Fourth Tab Content.</p> },
  ];

  return (
    <>
      <Tab tabs={tabs} />
    </>
  )
}

export default App
