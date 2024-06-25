// import { HelmetProvider } from "react-helmet-async";
import Router from "./routes/Router";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      {/* <HelmetProvider> */}

      <Router />
      {/* </HelmetProvider> */}
    </Suspense>
  );
}

export default App;
