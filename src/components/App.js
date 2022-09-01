import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../styles/App.css';
import ListUser from './ListUser'
import CreateUser from './CreateUser'
import EditUser from './EditUser'

function App() {
  return (
    <div className="App">
      <h5>React CRUD operations using PHP API and MySql</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="index.php/create">create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>

          <Route index element={<ListUser />} />
          <Route path="index.php/create" element ={<CreateUser />} />
          <Route path="index.php/:id/edit" element ={<EditUser />} />

        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
