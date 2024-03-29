import Index from './components';
import Table from './components/table';
import Header from './components/header'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <div className='body'>
      <Index />
      <Table />
    </div>
    </>
  )
}

export default App
