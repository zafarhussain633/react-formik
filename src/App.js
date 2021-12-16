import './App.css';
import {BrowserRouter} from "react-router-dom"
import PageRoutes from "./routes/routes"
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <PageRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
