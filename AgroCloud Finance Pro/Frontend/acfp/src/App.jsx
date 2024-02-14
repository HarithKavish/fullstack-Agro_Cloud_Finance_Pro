import { Suspense, lazy } from 'react';
// import { useEffect } from 'react';
import './assets/css/index.css'
import './assets/images/bg.jpg'
import Home from './pages/Home.jsx'
import 'rsuite/dist/rsuite.min.css';
import Spinner from './components/Spinner.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const LazyLogin = lazy(() => import('./pages/Login.jsx'));
const LazyRegister=lazy(()=> import('./pages/Register.jsx'));
const LazyProfile = lazy(() => import('./pages/Profile.jsx'));
const LazyLoans = lazy(() => import('./pages/Loans.jsx'));
const LazyFaq = lazy(() => import('./pages/Faq.jsx'));
const LazyApply = lazy(() => import('./pages/Apply.jsx'));
const LazyDashboard = lazy(() => import('./pages/admin/Dashboard.jsx'));
const LazyUsergroup = lazy(() => import('./pages/admin/UserGroup.jsx'));
const LazyAdminprofile = lazy(() => import('./pages/admin/Admprofile.jsx'));

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(window.location.pathname==="/")
  //     navigate("/login");
  // }, [navigate]);

  const router= createBrowserRouter([
    {
      path: '/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/login',
      element:<Suspense fallback={<Spinner/>}><LazyLogin/></Suspense>
    },
    {
      path:'/profile',
      element:<Suspense fallback={<Spinner/>}><LazyProfile/></Suspense>
    },
    {
      path:'/register',
      element:<Suspense fallback={<Spinner/>}><LazyRegister/></Suspense>
    },
    {
      path:'/faq',
      element:<Suspense fallback={<Spinner/>}><LazyFaq/></Suspense>
    },
    {
      path:'/loans',
      element:<Suspense fallback={<Spinner/>}><LazyLoans/></Suspense>
    },
    {
      path:'/apply',
      element:<Suspense fallback={<Spinner/>}><LazyApply/></Suspense>
    },
    {
      path:'/dashboard',
      element:<Suspense fallback={<Spinner/>}><LazyDashboard/></Suspense>
    },
    {
      path:'/usergroup',
      element:<Suspense fallback={<Spinner/>}><LazyUsergroup/></Suspense>
    },
    {
      path:'/adminprofile',
      element:<Suspense fallback={<Spinner/>}><LazyAdminprofile/></Suspense>
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}

export default App