import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './api/api';

import SharedLayout from './components/SharedLayout';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const loadData = async () => {
      try {
        const result = await fetchDataFromApi();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    loadData();
  }, []);


  return (
    <SharedLayout data={data} error={error} />
  );
}

export default App;
