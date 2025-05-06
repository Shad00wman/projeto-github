import Detalhes from "../pages/Detalhes/Index";
import Favoritos from "../pages/Favoritos";
import Home from "../pages/Home";

export default function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <link to="/">Home</link>
            <link to="/Detalhes">Detalhes</link>
            <link to="/Favoritos">Favoritos</link>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Detalhes/:id" element={<Detalhes />} />
                <Route path="/Favoritos" element={<Favoritos />} />


            </Routes>
        </BrowserRouter>
        </>
    )
}