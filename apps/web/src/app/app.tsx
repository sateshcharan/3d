import { useState, useEffect } from 'react';

export function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const joke = await fetch('http://localhost:3333/api');
        const data = await joke.json();
        setData(data.message);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 bg-slate-100 rounded-2xl shadow-xl">
        <h2 className="font-semibold capitalize">{data}</h2>
      </div>
    </div>
  );
}

export default App;
