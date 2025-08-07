import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HomeContainer } from "./HomeContainer";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HomeContainer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
