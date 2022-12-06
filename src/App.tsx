import { Form } from './components'
import { initFormArgs } from "./tsTypes/formTypes";
import data from './data/frontend-data.json'

function App() {
  
  return (
    <div className="App">
      <Form {...data.forms.newWord}/>
    </div>
  )
};

export default App
