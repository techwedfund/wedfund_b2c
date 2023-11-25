import Navbar from "./Component/Navbar";
import Home from './Component/Home'
import {
  Route,
  BrowserRouter as Router,
  Routes,
}from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

function App() {

  const [progress, setProgress] = useState(100)
  return (
    <>
      <Router>
      <Navbar />
      <LoadingBar
        color='#6c0505'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
