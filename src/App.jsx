import { RouterProvider } from "react-router-dom";
import root from "./routes/router";

function App() {
  return <RouterProvider router={root} />;
}

export default App;
