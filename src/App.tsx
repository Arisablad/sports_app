import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.tsx";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
