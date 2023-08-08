import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JoinWaitList } from "./pages/index";
import AppLoading from "./components/AppLoading";
import NotificationAlert from "./components/NotificationAlert";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Suspense fallback={<AppLoading />}>
      {isLoading ? (
        <AppLoading />
      ) : (
        <>
          <Router>
            <NotificationAlert title="" msg="" alertType="" onClose={() => {}} />
            <Routes>
              <Route path="/" element={<JoinWaitList />} />
              {/* <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Home />} />
            </Route> */}
            </Routes>
          </Router>
        </>
      )}
    </Suspense>
  );
}

export default App;
