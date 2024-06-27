// import { HelmetProvider } from "react-helmet-async";
import Loading from "./components/loading/Loading";
import Router from "./routes/Router";
import { Suspense } from "react";
import "./App.css"
function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/* <HelmetProvider> */}

      <Router />
      {/* </HelmetProvider> */}
    </Suspense>
  );
}

export default App;
