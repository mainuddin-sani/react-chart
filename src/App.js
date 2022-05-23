import './App.css';
import Axios from './components/Axios';
import Mychart from './components/Mychart';

function App() {
 
  return (
    <div className="App">
      <Mychart></Mychart>
      <Axios></Axios>
    </div>
  );
}

export default App;
