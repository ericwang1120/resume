import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import styled, { StyledComponent } from 'styled-components'

const A = styled.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`

const FooterMenu = styled(Menu)`
  margin: 0 !important;

  @media (max-width: 768px) {
    display: none !important;
  }
`

function Footer(props: any) {
  return (
    <FooterMenu size="large" onClick={props.onClick}>
      <Container fluid>
        <Menu.Item>
          Made by&nbsp;<A href="https://github.com/ericwang1120">Eric Wang</A>, Based on React, Mobx
          and
          <A href="https://react.semantic-ui.com/">&nbsp;Semantic UI React</A>.
        </Menu.Item>
      </Container>
    </FooterMenu>
  )
}

Footer.propTypes = {
  onClick: PropTypes.func
}

export default Footer
