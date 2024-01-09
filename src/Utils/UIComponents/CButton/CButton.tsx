'use client'
import React from 'react'
import { IconDefinition, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, PlaceholderButton, Spinner } from 'react-bootstrap'

export const CButton = ({title = '', icon = undefined, showLoader = false, disabled = false, onClick = undefined}: ICButton) => {
  
    const getIcon = (): IconDefinition => {
        switch (icon) {
            case 'doorOpen': return faDoorOpen
            default: return faDoorOpen
        }
    }

    const RightIcon = () => {
        if (icon) {
            return <FontAwesomeIcon icon={getIcon()} className='pl-3'/>
        }
        return <></>
    }

    const LoadSpinner = () => {
        if (showLoader) {
            return <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className='mr-3'
                    />
        }
        return <></>
    }

    return (
    <div className='m-3'>
        <Button 
          variant="" 
          className='w-full shadow-md bg-gradient-to-t from-gray-900 to-gray-600 bg-gradient-to-rbg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white' 
          size="lg"
          disabled={disabled}
          onClick={onClick}>
            <LoadSpinner />
              {title}
            <RightIcon />
        </Button>
      </div>
  )
}

export interface ICButton {
    title?: string
    icon?: 'doorOpen' | undefined
    showLoader?: boolean
    disabled?: boolean  
    onClick?: () => void
}