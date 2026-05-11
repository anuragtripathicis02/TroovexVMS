import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Sidebar from './routes/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Opportunities from './pages/Opportunities';
import DashboardHeader from './routes/DashboardHeader';
import CompanyProfileTabs from './pages/companyProfile/CompanyProfileTabs';
import DefaultPage from './pages/DefaultPage';
import Login from './pages/authentication/loginV1/Login';
import ForgetPassword from './pages/resettingpassword/forgetpassword/ForgetPassword';
import ResetPassword from './pages/resettingpassword/resetpassword/ResetPassword';
import { useEffect } from 'react';
import RoleSelection from './pages/onboarding/roleSelection/RoleSelection';
import CompanyBothScreen from './pages/onboarding/companySupplierBothScreen/CompanyBothScreen';

// 👉 Separate component (required for useLocation)


function AppContent() {
  const location = useLocation();

  const noLayoutRoutes = ['/', '/login', '/defaultPage', '/forget-password', '/reset-password', '/role-selection', '/company-both-screen'];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  // 🔥 BODY CLASS CONTROL
  useEffect(() => {
    if (!hideLayout) {
      document.body.classList.add("layout-open");
    } else {
      document.body.classList.remove("layout-open");
    }

    return () => {
      document.body.classList.remove("layout-open");
    };
  }, [hideLayout]);

  return (
    <div>
      {!hideLayout && <DashboardHeader />}
      {!hideLayout && <Sidebar />}

      <div className={hideLayout ? '' : 'content-wrapper mt-82'}>
        <div className={hideLayout ? '' : 'container'}>
          <Routes>
            <Route path="/defaultPage" element={<DefaultPage />} />
            <Route path="/" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/company-both-screen" element={<CompanyBothScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/organization-profile" element={<CompanyProfileTabs />} />
            <Route path="/opportunities" element={<Opportunities />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;