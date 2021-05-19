/**
 *
 * AppSidebar
 *
 */

import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function AppSidebar(props: any) {
  // eslint-disable-line react/prefer-stateless-function
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      width="thin"
      visible={props.visible}
      icon="labeled"
      vertical
      inverted
    >
      <Menu.Item as={Link} to="/resume" name="resume" onClick={props.onToggle}>
        <Icon name="file text outline" />
        resume
      </Menu.Item>
      <Menu.Item as={Link} to="/github" name="GitHub Repos" onClick={props.onToggle}>
        <Icon name="github" />
        github
      </Menu.Item>
    </Sidebar>
  )
}

AppSidebar.propTypes = {
  visible: PropTypes.bool,
  onToggle: PropTypes.func
}

export default AppSidebar
