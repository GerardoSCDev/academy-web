'use client'
// Libraries Imports
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from 'react-bootstrap'

// Local Imports
import { CButton } from '@/Utils/UIComponents/CButton/CButton'
import CInputText from '@/Utils/UIComponents/CInputText/CInputText'
import LoginStrings from './config/strings'
import LoginStyles from './config/styles'


const { headerTitleString, headerSubTitleString, textInputUserTitleString, textInputUserEmptyHelperString, textInputPasswordTitleString, textInputPasswordEmptyHelperString, continueButtonTitleString } = LoginStrings

const { cardTitleStyle } = LoginStyles

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
      setTextHelperUser(textInputUserEmptyHelperString)
    }

    if (textPassword === '') {
      setTextHelperPassword(textInputPasswordEmptyHelperString)
    }
  }

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const CardHeaderLogin = () => {
    return (
      <CardHeader className='flex flex-col items-center'>
        <div className='w-40 h-24'>
          <div className='w-40 h-40 relative bottom-20 bg-white flex justify-center items-center rounded-full shadow-md'>
            <FontAwesomeIcon icon={faSchool} className='w-28 h-28'/>
          </div>
        </div>
        <CardTitle style={cardTitleStyle}>
          {headerTitleString}
        </CardTitle>
        <CardSubtitle>
          {headerSubTitleString}
        </CardSubtitle>
      </CardHeader>
    )
  }

  
  return (
    
    <div className='h-full flex justify-center items-center bg-slate-900'>
      <Card className=' max-sm:w-full max-sm:m-5 sm:w-[550px]'>
        <CardHeaderLogin/>
          <CardBody>
          <form onSubmit={handelSubmit}>
            <CInputText 
              title={textInputUserTitleString}
              textHelp={textHelperUser} 
              type='text'
              textValue={textUser}
              leftIcon='user'
              onChange={handelOnchangeInputUser}/>
            <CInputText 
              title={textInputPasswordTitleString}
              textHelp={textHelperPassword}
              type='password'
              textValue={textPassword}
              leftIcon='key'
              onChange={handelOnchangeInputPassword} />
            <CButton 
              title={continueButtonTitleString}
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
