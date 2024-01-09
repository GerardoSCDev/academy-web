import { CButton } from '@/Utils/UIComponents/CButton/CButton'
import CInputText from '@/Utils/UIComponents/CInputText/CInputText'
import { faArrowAltCircleRight, faDoorOpen, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Spinner } from 'react-bootstrap'

export default function Home() {
    
  return (
    <>
      <CInputText 
        title='Usuario' 
        placeholder='12345678' 
        textHelp='Ingresa usaurio' 
        type='text'
        textValue='12345fsadf'
        leftIcon='user'/>

      <CInputText 
        title='Password' 
        placeholder='12345678' 
        textHelp='Ingresa contraseña' 
        type='password'
        textValue='12345fsadf'
        leftIcon='key' />
      
      <CButton title='Continuar' icon='doorOpen' showLoader={false} disabled={false}/>
    </>
  )
}