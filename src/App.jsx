import React from "react"
import { Route, Routes } from "react-router"
import Home from "./Components/Pages/Home"
import Cart from "./Components/Pages/Cart"
import MainLayout from "./Components/Comman/MainLayout"
import { Provider } from "react-redux"
import store from "./redux/store"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/cart'} element={<Cart />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App;
