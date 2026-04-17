import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import LayoutRoot from "./Layout/LayoutRoot"
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoot />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>    
  )
}

export default App
