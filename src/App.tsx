import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/CommunityFaq";
import FullLatestContents from "./components/blog/FullLatestContents";
import GoogleVerification from "./GoogleVerification";
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
  Blog,
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
              <Route path="/FullLatestContents/:articleId" element={<FullLatestContents />} />
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/our-partners" element={<OurPartners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/google48da7d8786ad3ef6.html" element={<GoogleVerification />} />
            </Route>
          </Routes>
        </Router>
      )}
    </Suspense>
  );
}

export default App;
