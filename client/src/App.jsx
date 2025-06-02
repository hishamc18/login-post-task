import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { checkAuth } from "./redux/slices/userSlice";
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-right" theme="dark" autoClose={700}/>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}
