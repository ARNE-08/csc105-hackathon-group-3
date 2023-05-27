import { useState, useMemo } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import GlobalContext from "../src/share/GlobalContext";
import Home from "./pages/Home";
import CalEvent from "./pages/CalEvent";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

function App() {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState(false);
  const generatekey = () => {
    return Math.random();
  };

  const globalContextValue = useMemo(() => {
    return {
      user,
      status,
      setUser,
      setStatus,
    };
  }, [user]);

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route path="/cal-event" element={<CalEvent />} />
        <Route path="/auth" element={<Auth />} />
		<Route path="/profile" element={<Profile />} />
      </Routes>

      {status ? (
        <SnackBarMessage
          key={generatekey()}
          open={status.open}
          severity={status.severity}
          message={status.msg}
        />
      ) : null}
    </GlobalContext.Provider>
  );
}

export default App;
