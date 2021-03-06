import '@css/components/Register.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {registerRequest} from '../actions'
const Register = (props) => {

    const [form,setValues]=useState({
      email:'',
      name:'',
      password:''
    })
    const handleInput=e=>{
      e.preventDefault()
      setValues({
        ...form,
        [e.target.name]:e.target.value
      })
    }
    const handleSubmit=e=>{
      e.preventDefault()
      props.registerRequest(form)
      props.history.push('/')
    }
    return (
        <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
            name="name"
            onChange={handleInput}
            className="input" 
            type="text" 
            placeholder="Nombre"
            />
            <input 
            name="email"
            onChange={handleInput}
            className="input" 
            type="text" 
            placeholder="Correo"
            />
            <input 
            name="password"
            onChange={handleInput}
            className="input" 
            type="password" 
            placeholder="Contraseña"
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    )
}
const mapDispatchToProps={
  registerRequest
}
export default connect(null,mapDispatchToProps)(Register)
