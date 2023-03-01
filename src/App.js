
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/HomeScreen/Home';
import UserLayout from './Component/Layout/UserLayout';
import LogIn from './Pages/LogIn/LogIn';
import SingUp from './Pages/SingUp/SingUp';


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <UserLayout>
              <LogIn />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <UserLayout>
              <SingUp />
            </UserLayout>
          }
        ></Route>
        </Routes>
        </>
  );
}

export default App;
