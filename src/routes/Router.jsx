import React, { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";

// ================ 👇 importing component with LAZY 👇  =====================

const HomePage = lazy(() => import("../pages/HomePage"));
const SarkariJobs = lazy(() => import("../pages/SarkariJobs"));
const PrivateJobs = lazy(() => import("../pages/PrivateJobs"));
const Results = lazy(() => import("../pages/Results"));
const LatestNews = lazy(() => import("../pages/LatestNews"));
const AnswerKey = lazy(() => import("../pages/AnswerKey"));
const AdmitCard = lazy(() => import("../pages/AdmitCard"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

// ================ 👆 importing component with LAZY 👆 =====================

const Router = ({ children }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/sarkari-jobs" element={<SarkariJobs />} />
          <Route path="/private-jobs" element={<PrivateJobs />} />
          <Route path="/results" element={<Results />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/answer-key" element={<AnswerKey />} />
          <Route path="/admit-card" element={<AdmitCard />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact-page" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage/>} />

        </Route>
      </>
    )
  );

  return <RouterProvider router={router}>Router</RouterProvider>;
};

export default Router;
