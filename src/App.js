import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
