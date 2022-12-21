import { router } from './Routes/Route';
import { RouterProvider } from "react-router-dom"
import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
