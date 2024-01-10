'use client'

import { CButton } from '@/Utils/UIComponents/CButton/CButton'
import CInputText from '@/Utils/UIComponents/CInputText/CInputText'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from 'react-bootstrap'

export default function Home() {

  const [textUser, setTextUser] = useState<string>('')
  const [textHelperUser, setTextHelperUser] = useState<string>('')

  const [textPassword, setTextPassword] = useState<string>('')
  const [textHelperPassword, setTextHelperPassword] = useState<string>('')

  const [disableButton, setDisableButton] = useState<boolean>(true)
  
  useEffect(() => {
    validateForm()
  }, [textUser, textPassword])
  

  const handelOnchangeInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextUser(e.target.value)
  }

  const handelOnchangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextPassword(e.target.value)
  }

  const cleanHelpersForm = () => {
    setTextHelperUser('')
    setTextHelperPassword('')
  }

  const validateForm = () => {
    setDisableButton(true)
    cleanHelpersForm()
    if (textUser != '' && textPassword != '') {
      setDisableButton(false)
      return
    }

    if (textUser === '') {
      setTextHelperUser('Ingresa tu usuario')
    }

    if (textPassword === '') {
      setTextHelperPassword('Ingresa tu contraseña')
    }
  }

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  
  return (
    
    <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-900'>
      <Card className='w-45'>
        <CardHeader className='flex flex-col items-center'>
          <div className='w-40 h-24'>
            <div className='w-40 h-40 relative bottom-20 bg-white flex justify-center items-center rounded-full shadow-md'>
              <FontAwesomeIcon icon={faSchool} className='w-28 h-28'/>
            </div>
          </div>
          <CardTitle style={{fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 30}}>
            Bienvenido
          </CardTitle>
          <CardSubtitle>
            ingresa tus datos
          </CardSubtitle>
        </CardHeader>
        <CardBody>
          <form onSubmit={handelSubmit}>
            <CInputText 
              title='Usuario'
              textHelp={textHelperUser} 
              type='text'
              textValue={textUser}
              leftIcon='user'
              onChange={handelOnchangeInputUser}/>
            <CInputText 
              title='Password'
              textHelp={textHelperPassword}
              type='password'
              textValue={textPassword}
              leftIcon='key'
              onChange={handelOnchangeInputPassword} />
            <CButton 
              title='Continuar' 
              icon='doorOpen' 
              showLoader={false} 
              disabled={disableButton}
              type='submit'/>
          </form>
        </CardBody>
      </Card>
    </div>
    
  )
}
