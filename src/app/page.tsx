import CInputText from '@/Utils/UIComponents/CInputText/CInputText'

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
    </>
  )
}