import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import EyeOpenedIconButton from '@conheca-meta-clients/react-icon-buttons/src/components/EyeOpenedIconButton'
import EyeClosedIconButton from '@conheca-meta-clients/react-icon-buttons/src/components/EyeClosedIconButton'
import TextInput from '../TextInput'

const PasswordInput = (props) => {
  const [passwordMasked, setPasswordMasked] = useState(true)

  const EyeIconButton = passwordMasked ? EyeOpenedIconButton : EyeClosedIconButton

  return (
    <TextInput
      { ...props }
      InputProps={ {
        endAdornment: (
          <InputAdornment position="end">
            <EyeIconButton onClick={ () => setPasswordMasked(!passwordMasked) } />
          </InputAdornment>
        )
      } }
      type={ passwordMasked ? 'password' : 'text' }
    />
  )
}

export default PasswordInput
