import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import ViewOne from "./components/SingleFood/SingleFood";
import "./index.css";
import AccountDetails from "./pages/Account/Details/Details";
import AccountEdit from "./pages/Account/Edit/Edit";
import LoginForm from "./pages/Account/Login/LoginForm";
import ExternalSourceList from "./pages/ExternalSource/List";
import ExternalSourceCreate from "./pages/ExternalSource/Create";
import Home from "./pages/Home/home";
import Navbar from "./pages/layout/Navbar";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/view/:id" element={<ViewOne />} />
            <Route path="/account" element={<AccountDetails />} />
            <Route path="/account/edit" element={<AccountEdit />} />
            <Route path="/external-source" element={<ExternalSourceList />} />
            <Route
              path="/external-source/new"
              element={<ExternalSourceCreate />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
