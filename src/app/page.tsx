import { CButton } from '@/Utils/UIComponents/CButton/CButton'
import CInputText from '@/Utils/UIComponents/CInputText/CInputText'
import { faArrowCircleDown, faDoorOpen, faEye, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Spinner } from 'react-bootstrap'

export default function Home() {
    
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
        </CardBody>
      </Card>
    </div>
    
  )
}