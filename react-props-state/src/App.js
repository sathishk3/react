import { useState } from 'react';
import SearchBar from './components/SearchBar';
import getApiResults from './SearchApi';
import ResultList from './components/ResultList';

function App() {

  const [results, setResults] = useState('');

  const handleSubmit = async (term) => {
    const result = await getApiResults(term);

    console.log(result);
    setResults(result);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ResultList results={results} />
    </div>
  )
}
export default App;