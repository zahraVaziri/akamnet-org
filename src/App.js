import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LayoutProvider } from "./Component/context/LayoutContext";
import Layout from "./Component/Layout/Layout";

const App = () => {
  return (
    <div>
      <div>
      <BrowserRouter>
      <LayoutProvider>
        <Layout/>
      </LayoutProvider>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
