import Header from "./components/Header";
import React from 'react';
import SearchResultContainer from "./components/SearchResultContainer"
import Wrapper from "./components/Wrapper"

function App() {

  return (
    <div className="app">
    <Wrapper>
    <Header />
    <SearchResultContainer />
    </Wrapper>
    </div>
  );
}

export default App;
