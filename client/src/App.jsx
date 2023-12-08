import { Route, Routes } from "react-router-dom";
import PreviewPage from "./Pages/PreviewPage/PreviewPage"
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage"
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PreviewPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
