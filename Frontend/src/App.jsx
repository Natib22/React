import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Mainlayout from './layouts/Mainlayout';
import Jobpage from './pages/Jobpage';
import Errorpage from './pages/Errorpage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path='jobs' element={<Jobpage />} />
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
