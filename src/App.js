import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

import UserLoginForm from "./components/voter/UserLoginForm";
import DashBoard from "./components/admin/deshbord/DashBoard"
import User from "./components/admin/user/User"
import Election from "./components/admin/election/Election"
import Party from './components/admin/party/Party'
import Connection from "./components/admin/connection/Connection"
import { Provider } from "react-redux";
import { store } from "./redux-thunk/store"
import Voter from "./components/voter/voter/Voter"



function App() {
  return (
    < SnackbarProvider autoHideDuration={2000} maxSnack={20}>

      <Provider store={store}>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserLoginForm" element={<UserLoginForm />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Party" element={<Party />} />
            <Route path="/Election" element={<Election />} />
            <Route path="/User" element={<User />} />
            <Route path="/Connection" element={<Connection />} />
            <Route path="/Voter" element={<Voter />} />
          </Routes>
        </BrowserRouter>


      </Provider>
    </SnackbarProvider>
  );
}

export default App;
