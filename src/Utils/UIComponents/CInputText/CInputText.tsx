import React from 'react'

const CInputText = ({title = '', placeHolder = '', textHelp = '', state = InputTextState.Default}: IInputText) => {
    return (
        <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {title}
        </label>
        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={placeHolder}/>
        <p className="text-red-500 text-xs italic py-2">{textHelp}</p>
      </div>
      )
}

export default CInputText

interface IInputText {
    title?: string
    placeHolder?: string
    textHelp?: string
    state?: InputTextState
  }
  
  enum InputTextState {
    Default,
    Success,
    Alert,
    Bad
  }