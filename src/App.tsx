import { Form } from './components'
import data from './data/frontend-data.json'

function App() {
  
  return (
    <div className="App">
      <Form {...data.forms.newWord}/>
      {/* How to handle no args? */}
      {/* <Form/> */}
    </div>
  )
};

export default App
