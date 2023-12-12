import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">

        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";


// import Home from "./views/Home/Home";
// import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
// import About from "./views/About/About";
// import Profile from "./views/Perfil/Perfil";



// const App = () => {


//   return (
//     <div className="App">

//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/perfil" element={<Perfil />} />
    
//       </Routes> 

//     </div>
//   );
// };

// export default App;