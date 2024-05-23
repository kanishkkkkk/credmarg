import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import AddEmployee from './Components/AddEmployee';
import AddVendor from './Components/AddVendor';
import ViewEmployees from './Components/ViewEmployees';
import ViewVendors from './Components/ViewVendors';
import ViewEmails from './Components/ViewEmails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addEmployee" exact element={<AddEmployee />} />
          <Route path="/addVendor" exact element={<AddVendor />} />
          <Route path="/viewEmails" exact element={<ViewEmails />} />
          <Route path="/viewVendor" exact element={<ViewVendors />} />
          <Route path="/viewEmployee" exact element={<ViewEmployees />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
