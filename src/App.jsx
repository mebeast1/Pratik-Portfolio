import { Route, BrowserRouter, Routes } from "react-router";

import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

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
