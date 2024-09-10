import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LandPage from './components/LandPage';
import ReadMore from './components/ReadMore';
import AddJob from './components/AddJob';
import Job from './components/Job';


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandPage />} />
        <Route path="/landpage" element={<LandPage />} />
        <Route path="/readMore" element={<ReadMore />} />
        <Route path="/jobs" element={<Job />} />

        <Route path="/addJob" element={<AddJob/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </>
    )
  );
  return (
    <RouterProvider router={router}/>
    
  )
};

export default App;
