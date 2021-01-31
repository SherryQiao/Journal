import React, { Component } from 'react';
import ReactDom from 'react-dom'
import Login from "./Views/Home/login"
import Home from "./Views/Home/home"
import store from "./Services/store/store"
import { Provider } from "react-redux"


ReactDom.render(
    (
    <Provider store = {store}>
        <Home></Home>
    </Provider>
    ),
    document.getElementById('root')
)
