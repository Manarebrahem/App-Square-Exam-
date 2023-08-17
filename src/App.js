
import './App.css';
import Notfound from './components/Notfound/Notfound';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import Job from './Job/Job';




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
        
      <Route path='team' element={ <Job/>}/>
      </Route>
      <Route path = '/login' element={<Login/>}/>
      <Route path ='*' element={<Notfound/>}/>
      </>
    ) 
  )
  return (
  <RouterProvider router={router}/> 
  );
}

export default App;
