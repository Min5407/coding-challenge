import React from "react";
import "./App.css";
import Header from "./components/header";
import PageLayout from "./components/pageLayout";
import RequestPage from "./page/RequestPage/RequestPage";

function App() {
  return (
    <div className="App">
      <Header />
      <PageLayout>
        <RequestPage />
      </PageLayout>
    </div>
  );
}

export default App;
