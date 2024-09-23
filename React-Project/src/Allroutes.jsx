import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Homepage from './Components/Homepage'
import Productpage from './Pages/Productpage'
import ProductDetails from './Pages/ProductDetails'
import Addcart from './Pages/Addcart'
import Privateroute from './Pages/Privateroutes'
import EditProduct from './Pages/EditProduct'
import DeleteProduct from './Pages/DeleteProduct'
import AddProduct from './Pages/AddProduct'
import Womenpage from './Pages/Womenpage'
import Womenproduct from './Pages/Womenproduct'
import WproductDetails from './Pages/WproductDetails'
import Weditpage from './Pages/Weditpage'
import WdeletePage from './Pages/WdeletePage'
import Explore from './Pages/Explore'

const Allroutes = () => {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup />} />
         
            <Route path='/Productpage' element={
              <Privateroute>
                <Productpage/>
              
              </Privateroute>
              
              }></Route>
              <Route path='/Womenpage' element={<Womenpage/>}></Route>
              <Route path='/AddProduct' element={<AddProduct/>}></Route>
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
           
            <Route path='/EditProduct/:id' element={<EditProduct/>}></Route>
            <Route path='/DeleteProduct/:id' element={<DeleteProduct/>}></Route>
            <Route path='/Addcart' element={<Addcart/>}></Route>
            <Route path='/Womenproduct' element={<Womenproduct/>}></Route>
            <Route path='/WproductDetails/:id' element={<WproductDetails/>}></Route>
            <Route path='/Weditpage/:id' element={<Weditpage/>}></Route>
            <Route path='/WdeletePage/:id' element={<WdeletePage/>}></Route>
            <Route path='/Explore' element={<Explore/>}></Route>
          


        </Routes>
    </div>
  )
}

export default Allroutes