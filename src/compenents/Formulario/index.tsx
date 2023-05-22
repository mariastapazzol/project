import React from 'react';
import './index.css'
import { SlEnvolope } from 'react-icons/sl';
import { SlLock } from 'react-icons/sl';
import { VscEyeClosed } from 'react-icons/vsc';
import { render } from 'react-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Salvando o token no localStorage
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQ0MzAzMDEsImV4cCI6MTcxNTk2NjMwMSwic3ViIjoiNzg2OTMxZmEtMTk4MC00M2U5LTg4MGQtMTM2NGY1ODQ4ZmFjIn0.UbSI417wcHNWHg-XLGBpMcBDf0ZQrigC02yp9zwaOn0');
// Obtendo o token do localStorage
console.log(localStorage.getItem('token'));

const token = localStorage.getItem('token');


const validateUserSchema = z.object({
    email: z.string().nonempty('Este campo é obrigatório').email('Digite um email válido'),
    password: z.string().nonempty('Este campo é obrigatório').min(5, 'Você não atingiu o número de carácteres')
})

type Form = z.infer<typeof validateUserSchema>


function Formulario() {

  const {register, handleSubmit, formState:{errors}} = useForm<Form>({
    resolver: zodResolver(validateUserSchema)
  })
  
  console.log(errors)
  function formulario(data:any) { 
     console.log(data)
  }

  if (token !== null) {
    // Token está presente
  } else {
    // Token não está presente
  }
  
  
        return(
        <div className='content'>
              <form noValidate onSubmit={handleSubmit(formulario)}> 
               <h1>Frengee</h1>
                      <label htmlFor='email'>
                        Email
                      </label>
                       <div className='align'>
                        <SlEnvolope className='icon'/>
                        <input
                         type='text'
                        {...register('email')}
                         id='email'
                         placeholder='Digite seu email'
                         required />
                       </div>
                      {errors && <span>{errors.email?.message}</span>}

                      <label htmlFor='pass'>
                         Senha
                      </label>
                      <div className='align'>
                        <SlLock className='icon'/>
                          <input
                          type='password'
                          id="pass"
                          {...register('password')}
                          min="6"
                          placeholder='Digite sua senha'
                          required/>                        
                          <VscEyeClosed className='eyeclosed'/>
                      </div>
                      {errors && <span>{errors.password?.message}</span>}

                  <div className='text'>
                    <input type="checkbox" name="" id="" />
                    <p>Manter sua conta conectada</p>
                  </div>
                <button className="login">
                Login
              </button>

               <h5>Esqueceu a senha?</h5>
              </form>
        </div>
        )
    
    }

export default Formulario;


