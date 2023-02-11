import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";
import Header from "./components/Header"
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import UserNew from "./pages/UserNew";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/new" element={<UserNew />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
