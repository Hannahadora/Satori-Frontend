import { lazy } from "react";

export const JoinWaitList = lazy(() => import('./join-waitlist'))
export const Home = lazy(() => import('./home'))
export const ContactUs = lazy(() => import('./contact-us'))
export const Faqs = lazy(() => import('./faqs'))
export const AboutUs = lazy(() => import('./about-us'))
export const PrivacyPolicy = lazy(() => import('./privacy-policy'))
export const HelpAndSupport = lazy(() => import('./help-and-support'))
export const Community = lazy(() => import('./help-and-support/community'))
export const AccountSettings = lazy(() => import('./help-and-support/account-settings'))
export const PrivacyAndSecurity = lazy(() => import('./help-and-support/privacy-and-security'))
export const LoginAndPassword = lazy(() => import('./help-and-support/login-and-password'))
