import { BrowserRouter , Navigate, Route, Routes} from "react-router-dom"
import Home from "../pages/home/Home"
import Personajes from "../pages/personajes/Personajes"
import Layout from "../components/layout/Layout"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>

        <Route path="/home" element={ <Home />   }   />
        <Route  path="/personajes" element={<Personajes />  }  />

        <Route  path="*" element={ <Navigate to= '/home' /> } />
      </Routes>

      </Layout>
    </BrowserRouter>
  )
}

export default Router