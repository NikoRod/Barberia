import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// STYLES
import "../Styles/ContactForm.scss";

const FormValidation = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const customSubmit = (data) => {
    alert("Los datos se enviaron correctamente.");
  }

  const [colorInput, setColorInput] = useState('#fff7f7');

  useEffect( ()=> {
      let words = watch('prueba')
      if(words === 'react'){setColorInput('#614ad3')}
  } )
  
  return (

    <div className='container-form'>

      <h2>¡Dejanos tus datos!</h2>

      <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>

        <div className='form-control'>
          
          <label>Nombre</label>
          <input type="text" {...register('name',{
            required: true,
          })} />
          {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}

        </div>

        <div className='form-control'>

          <label>Teléfono</label>
          <input type="number" {...register('phone', {
            required: true,
            minLength: 8
          })} />
          {errors.phone?.type === 'required' && <small className='fail'>El campo no puede estar vacío.</small>}
          {errors.phone?.type === 'minLength' && <small className='fail'>El teléfono no es válido..</small>}

        </div>

        <div className='form-control'>

          <label>E-mail</label>
          <input type="text" {...register('email', {
              required: true,
              pattern:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })} />
          {errors.email?.type === 'pattern' && <small className='fail'>El email es inválido.</small>}
          {errors.email?.type === 'required' && <small className='fail'>El campo no puede estar vacío.</small>}

        </div>

        <div className='form-control'>
          
          <label>Mensaje <span>(opcional)</span> </label>
          <input type="text" {...register('msj',{
          })} />

        </div>


        <button type='submit'>Enviar</button>

      </form>

    </div>
  )
}

export default FormValidation
