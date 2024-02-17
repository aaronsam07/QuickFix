import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'

import Home from './../pages/Home'
import Works from './../pages/Works'
import WorkDetails from './../pages/WorkDetails'
import UserLogin from './../pages/UserLogin'
import WorkerLogin from './../pages/WorkerLogin'
import UserRegister from './../pages/UserRegister'
import WorkerRegister from './../pages/WorkerRegister'
import SearchResultList from './../pages/SearchResultList'

import Login from './../pages/Login'
import Register from './../pages/Register'
import ThankYou from '../pages/ThankYou'
import UserHome from '../pages/UserHome'
import WorkerHome from '../pages/WorkerHome'

import UWorkDetails from './../pages/UWorkDetails'
import USearchResultList from '../pages/USearchResultList'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>

        <Route path='/home' element={<Home/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/works/:id' element={<WorkDetails/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/workerlogin' element={<WorkerLogin/>}/> 

         <Route path='/register' element={<Register/>}/>
        <Route path='/userregister' element={<UserRegister/>}/>
        <Route path='/workerregister' element={<WorkerRegister/>}/>

        <Route path='/works/search' element={<SearchResultList/>}/>

        <Route path='/thank-you' element={<ThankYou/>}/>

        {/* <Route path='/user/home' element={<UserHome/>}/>  illa */}
        <Route path='/user/works' element={<UserHome/>}/>
        <Route path='/user/works/:id' element={<UWorkDetails/>}/>
        <Route path='/user/works/search' element={<USearchResultList/>}/>



        <Route path='/worker/notification' element={<WorkerHome/>}/>
        


        
    </Routes>
  )
}

export default Routers
