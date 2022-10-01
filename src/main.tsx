import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RelayEnvironment from "./RelayEnvironment";
import { loadQuery, RelayEnvironmentProvider } from "react-relay/hooks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
