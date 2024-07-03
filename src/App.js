import Home from "./pages/Home.jsx";
import {BrowserRouter , Route,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Home></Home>
    </div>
    </BrowserRouter>
  );
}

export default App;
