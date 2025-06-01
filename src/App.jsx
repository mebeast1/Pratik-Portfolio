import { Route, BrowserRouter, Routes } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element ={<NotFound />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
