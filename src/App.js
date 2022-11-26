import { router } from './Routes/Route';
import { RouterProvider } from "react-router-dom"
import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
