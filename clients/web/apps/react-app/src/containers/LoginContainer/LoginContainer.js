import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Types as AuthTypes } from '@conheca-meta-clients/store/src/ducks/auth'
import GuestCard from '../../components/GuestCard/GuestCard'
import LoginFormContainer from '../forms/LoginFormContainer/LoginFormContainer'

import useStyles from './styles'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)
  const error = useSelector(state => state.auth.error)

  const classes = useStyles()

  useEffect(() => {
    if (loading || error) {
      dispatch({ type: AuthTypes.LOGOUT })
    }
    // eslint-disable-next-line
  }, [])

  const onSubmit = ({ email, password }) => dispatch({ type: AuthTypes.LOGIN, email, password })
  // the function to call with your form values upon valid submit

  return (
    <GuestCard
      loading={ loading }
      cardContentProps={ {
        classes: {
          root: classes.contentContainer
        }
      } }
    >
      <div className={ classes.container }>
        <LoginFormContainer error={ error } loading={ loading } onSubmit={ onSubmit } />
      </div>
    </GuestCard>
  )
}

export default LoginScreen
