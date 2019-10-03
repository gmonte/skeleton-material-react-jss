import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
`

class GuestLayout extends PureComponent {
  render() {
    const {
      children
    } = this.props

    return (
      <Container>
        <h2>Guest Layout</h2>
        <div>{children}</div>
      </Container>
    )
  }
}

GuestLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default GuestLayout
