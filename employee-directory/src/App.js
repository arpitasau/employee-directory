import React, { useState } from 'react';
import './App.css';
import Table from "./components/table"
import Search from "./components/search"


function App() {
  const [search, setSearch] = useState(null);
  const [sorter, setSorter] = useState("asc");

    const searchToState = (event)=> {
        let searchTerm = event.target.value;
        setSearch(searchTerm)
    }

    const sortToState = (event)=> {
      let sortVal = event.target.value;
      setSorter(sortVal)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
      </header>
      <Search onSearchChanged={searchToState} onSortChanged={sortToState} />
      <Table currentSearchValue= {search} currentSortState={sorter}/>
    </div>
  );
}

export default App;
