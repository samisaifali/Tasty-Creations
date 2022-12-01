import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import ViewOne from "./components/SingleFood/SingleFood";
import "./index.css";
<<<<<<< HEAD
import AccountDetails from "./pages/Account/Details/Details";
import AccountEdit from "./pages/Account/Edit/Edit";
import LoginForm from "./pages/Account/Login/LoginForm";
import ExternalSourceList from "./pages/ExternalSource/List";
import ExternalSourceCreate from "./pages/ExternalSource/Create";
import Home from "./pages/Home/home";
import Navbar from "./pages/layout/Navbar";
=======
import LoginForm from "./components/account/login/loginForm";
import RegisterForm from "./components/registerForm";
import AccountEdit from "./components/account/edit/edit";
import AccountDetails from "./components/account/details/details";
import ViewOne from "./components/singleFood/singleFood";
import ForgotPassword from "./components/account/login/forgotPassword";
import ResetPassword from "./components/account/login/ResetPassword";
import CreateRecipe from "./components/createRecipe/createRecipe";
import AllRecipes from "./components/allRecipes/allRecipes";
import Chat from "./components/chat/chat";
import About from "./components/about/about";
import Home from "./components/home/home";
import Navbar from "./components/layout/navbar";
import ChatList from "./components/chat/chatlist";
>>>>>>> 168ff7026f2095554e6515cda3d57b72076b8e67

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
<<<<<<< HEAD
=======

>>>>>>> 168ff7026f2095554e6515cda3d57b72076b8e67
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
<<<<<<< HEAD
            <Route path="/home" element={<Home />} />
            <Route path="/view/:id" element={<ViewOne />} />
            <Route path="/account" element={<AccountDetails />} />
            <Route path="/account/edit" element={<AccountEdit />} />
            <Route path="/external-source" element={<ExternalSourceList />} />
            <Route
              path="/external-source/new"
              element={<ExternalSourceCreate />}
            />
=======
            <Route path="/createrecipe" element={<CreateRecipe />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/view/:id" element={<ViewOne />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/allrecipes" element={<AllRecipes />}></Route>
            <Route path="/account" element={<AccountDetails />}></Route>
            <Route path="/account/edit" element={<AccountEdit />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            ></Route>

            <Route path="/chat/:id" element={<Chat />}></Route>
            <Route path="/chat" element={<ChatList />}></Route>
>>>>>>> 168ff7026f2095554e6515cda3d57b72076b8e67
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;