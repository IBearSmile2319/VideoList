import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {StaticRouter} from 'react-router-dom'
import reducer from '../frontend/reducers'
import initialState from '../frontend/utils/intialState'

import {renderRoutes} from 'react-router-config'
import routes from '../frontend/routes/ServerRoutes'
// ---------------------
import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
// -----------------
dotenv.config()
const {ENV,PORT} = process.env
const port = PORT||5000
const app=express()
if(ENV === "development"){
    console.log('development config')
    const webpackConfig =require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const compiler=webpack(webpackConfig)
    const webpackServerConfig={
        port:port,
        hot:true
    }
    app.use(webpackDevMiddleware(compiler,webpackServerConfig))
    app.use(webpackHotMiddleware(compiler))
}
// ----------------------
const setResponse=(html)=>{
  return (
    `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="assets/css/IBearSmile.css" type="text/css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Video List</title>
      </head>
      <body>
        <div id="root">${html}</div> 
        <script src="assets/js/bundle.js" type="text/javascript"></script>
      </body>
    </html>
    `
  )
}
const renderAPP=(req,res)=>{
  const store=createStore(reducer,initialState)
  const html=renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
    {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )
  res.send(setResponse(html))
}
app.get('*',renderAPP);
app.listen(port,(err)=>{
    if(err) console.log(err)
    else console.log(`Server running on port ${port}`)
})