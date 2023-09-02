import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/CommunityFaq";
import {
  JoinWaitList,
  Home,
  ContactUs,
  AboutUs,
  Faqs,
  PrivacyPolicy,
  HelpAndSupport,
  Community,
  AccountSettings,
  PrivacyAndSecurity,
  LoginAndPassword,
  UsingSatori,
  OurBlog,
  Cookies,
  Terms,
  OurPartners,
  ReportAbuse,
  Careers,
  JobDetails,
} from "./pages/index";
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
        <Router>
          <Routes>
            <Route path="/join-waitlist" element={<JoinWaitList />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Home />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/help-and-support" element={<HelpAndSupport />} />
              <Route
                path="/help-and-support/community"
                element={<Community />}
              />
              <Route
                path="/help-and-support/account-settings"
                element={<AccountSettings />}
              />
              <Route
                path="/help-and-support/privacy-and-security"
                element={<PrivacyAndSecurity />}
              />
              <Route
                path="/help-and-support/login-and-password"
                element={<LoginAndPassword />}
              />
              <Route
                path="/help-and-support/using-satori"
                element={<UsingSatori />}
              />
              <Route
                path="/help-and-support/report-abuse"
                element={<ReportAbuse />}
              />
              <Route path="/help-and-support/our-blog" element={<OurBlog />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms-of-use" element={<Terms />} />
              <Route path="/our-partners" element={<OurPartners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:jobCategory/:jobId" element={<JobDetails />} />
            </Route>
          </Routes>
        </Router>
      )}
    </Suspense>
  );
}

export default App;
