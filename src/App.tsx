import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JoinWaitList, Home } from "./pages/index";
import AppLoading from "./components/AppLoading";
import MainLayout from "./layout/MainLayout";

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
            <Routes>
              <Route path="/join-waitlist" element={<JoinWaitList />} />
              <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </>
      )}
    </Suspense>
  );
}

export default App;
