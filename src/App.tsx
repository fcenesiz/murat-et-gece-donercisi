
import AnaSayfaScreen from "./Screens/AnaSayfaScreens"
import { BrowserRouter, Route, Routes } from "react-router"
import FiyatListesiScreen from "./Screens/FiyatListesiScreen"

function App() {
  
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={< AnaSayfaScreen />} />
        <Route path="/fiyat-listesi" element={< FiyatListesiScreen />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
