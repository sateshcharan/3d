import { useState, useEffect } from 'react';

import { Canvas } from '@react-three/fiber';

import { Box } from './3d_model';
import { GLBViewer } from './load_3d';

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
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 ">
      <div className="p-4 bg-slate-100 rounded-2xl shadow-xl">
        <h2 className="font-semibold capitalize">{data}</h2>
      </div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <GLBViewer />
    </div>
  );
}

export default App;
