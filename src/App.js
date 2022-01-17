// import ContactForm from "./Components/ContactForm/Form";
// import ContactList from "./Components/ContactList/ContactList";
// import Filter from "./Components/Filter/Filter";
// import s from "./App.css";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./Components/AppBar";
import Homepage from "./views/HomepageView";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ContactView from "./views/ContactView";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { isAuth } from "./redux/auth/auth-selectors";

function App() {
  const isLoggedIn = useSelector(isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser(isLoggedIn));
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <Homepage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactView />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// ljhgbhzzzn
// ljhgbhzzzn@yahoo.com
// ljhgbhzzzn;
