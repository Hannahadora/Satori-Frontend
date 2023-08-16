import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JoinWaitList } from "./pages/index";
import FAQpage from "./pages/FAQpage"
import CommunityPage from "./pages/CommunityPage"
import AppLoading from "./components/AppLoading";

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
            <Route path="/" element={<JoinWaitList />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/faqpage" element={<FAQpage />} />
                <Route path="" element={<Home />} />
            </Routes>
          </Router>
        </>
      )}
    </Suspense>
  );
}

export default App;
