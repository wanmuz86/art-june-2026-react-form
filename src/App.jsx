
import './App.css'
import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'
import ReactFormHookDemo from './ReactFormHookDemo'

function App() {


  return (
    <>
    <h1>Controlled form</h1>
     <ControlledForm/>
     <hr />
        <h1>Uncontrolled form</h1>
     <UncontrolledForm/>
     <hr />
     <ReactFormHookDemo/>
    </>
  )
}

export default App
