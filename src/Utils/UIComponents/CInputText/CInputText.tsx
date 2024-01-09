'use client'

import { 
  IconDefinition, 
  faEye, 
  faEyeSlash, 
  faUser,
  faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { 
  Button, 
  FloatingLabel, 
  Form, 
  FormLabel, 
  FormText, 
  InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

const CInputText = ({title = '', placeholder = '', textHelp = '', state = InputTextState.Default, type = 'password', textValue = '', leftIcon = undefined}: IInputText) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [typeInput, setTypeInput] = useState<string>(type)

    const handelShowPassword = () => {
      setShowPassword(!showPassword)
      const validate = (type === 'password' && !showPassword)
      const newTypeText = (validate) ? 'text' : 'password'
      setTypeInput(newTypeText)
    }

    const getEyeIconPassword = (): IconDefinition => {
      return !showPassword ? faEyeSlash : faEye
    }

    const getLeftIcon = (): IconDefinition => {
      switch (leftIcon) {
        case 'key': return faKey
        case 'user': return faUser
        default: return faUser
      }
    }

    const RightInputButton = () => {
      if(type == 'password') {
        return (
          <Button 
            variant="outline-secondary" 
            id="button-addon2" onClick={handelShowPassword}>
            
            <FontAwesomeIcon 
              icon={getEyeIconPassword()} className='h-6 w-6'/>
          </Button>
        )
      }
      return <></>
    }

    const LeftIcon = () => {
      if (leftIcon == undefined) {
        return <></>
      }
      return (
        <InputGroupText>
          <FontAwesomeIcon icon={getLeftIcon()} className='h-6 w-6'/>
        </InputGroupText>
      )
    }

    return (
        <div className='mr-3 mb-2 ml-3'>
          <FormLabel className='text-lg font-semibold font-sans'>{title}</FormLabel>
          <InputGroup>
              <LeftIcon />
              <Form.Control 
                type={typeInput} 
                placeholder={placeholder} 
                style={{fontSize: 18, fontFamily: 'sans-serif'}}/>
              <RightInputButton />
          </InputGroup>
          <FormText className='text-lg font-sans'>{textHelp}</FormText>
        </div>
    )
}

export default CInputText

interface IInputText {
    title?: string
    placeholder?: string
    textHelp?: string
    state?: InputTextState
    type?: 'password' | 'text'
    textValue?: string
    leftIcon? : 'user' | 'key' | undefined
  }
  
  export enum InputTextState {
    Default,
    Success,
    Alert,
    Bad
  }