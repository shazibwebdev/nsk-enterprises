import AppRoutes from "./routes/AppRoutes"
import { Toaster } from "sonner"
import ScrollToTop from "./components/common/ScrollToTop"



function App() {
  return (
    <>
      {/* TOASTER */}
      <div className="absolute">
        <Toaster position="top-center" richColors closeButton duration={2500} />
      </div>
      

      {/* SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      {/* ROUTES */}
      <div className=" w-full  m-auto flex flex-col ">
        <AppRoutes />
      </div>
    </>
  )
}

export default App
