import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Mainlayout from './layouts/Mainlayout';
import Jobpage from './pages/Jobpage';
import Errorpage from './pages/Errorpage';
import Addjob from './pages/Addjob';
import Singlejobpage from './pages/Singlejobpage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<Jobpage />} />
        <Route path='/addjob' element={<Addjob />} />
        <Route path='/jobs/:id' element={<Singlejobpage />} />
      </Route>
      <Route path='*' element={<Errorpage />} />
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
