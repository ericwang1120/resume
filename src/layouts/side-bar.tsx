/**
 *
 * AppSidebar
 *
 */

import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

interface Props {
  visible: boolean
  onToggle: () => void
}

function AppSidebar(props: Props): JSX.Element {
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

export default AppSidebar
