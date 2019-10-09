import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { LinearLoader } from '@conheca-meta-clients/react-loaders'
import brand from '../../assets/images/brand.png'

import useStyles from './styles'

const GuestCard = (props) => {
  const {
    title,
    children,
    loading,
    className,
    style,
    cardContentProps
  } = props

  const classes = useStyles()

  return (
    <div className={ [classes.container, className].join(' ') } style={ style }>
      <Card className={ classes.cardContainer }>
        <div className={ classes.brandContainer }>
          <img src={ brand } alt="Meta" className={ classes.brand } />
        </div>
        <CardContent { ...cardContentProps }>
          {title ? (
            <Typography gutterBottom variant="h6" component="h2" align="center">
              {title}
            </Typography>
          ) : null}

          {children}
        </CardContent>
      </Card>
      <LinearLoader visible={ loading } loading={ loading } className={ classes.loader } />
    </div>
  )
}

GuestCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape(),
  cardContentProps: PropTypes.shape()
}

GuestCard.defaultProps = {
  title: null,
  cardContentProps: {},
  className: null,
  style: {}
}

export default GuestCard
