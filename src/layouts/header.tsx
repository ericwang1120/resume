/**
 *
 * Header
 *
 */

import React from 'react'
import styled from 'styled-components'
import H3 from '@/components/H3'
import { Menu, Container, Icon } from 'semantic-ui-react'
import counterStore from '@/stores/counter'
import { observer } from 'mobx-react'

const B = styled.b`
  align-self: flex-end;

  @media (max-width: 768px) {
    display: none !important;
  }
`

const HeaderMenu = styled(Menu)`
  margin: 0 !important;
`

const PageDescription = styled(Menu.Item)`
  @media (max-width: 768px) {
    display: none !important;
  }
`
interface IProps {
  onToggle: () => void
  onClick: () => void
}

class Header extends React.PureComponent<IProps> {
  componentDidMount(): void {
    counterStore.fetchData()
  }
  render(): JSX.Element {
    return (
      <HeaderMenu size="large" onClick={this.props.onClick}>
        <Container fluid>
          <Menu.Item as="a" onClick={this.props.onToggle}>
            <Icon size="large" name="list layout" />
            <B>Menu</B>
          </Menu.Item>
          <PageDescription>
            <H3>Eric Wang's Personal Homepage</H3>
          </PageDescription>
          <Menu.Item as="a" href="mailto:eric.kiwi@outlook.com">
            <Icon size="large" name="mail outline" />
            <B>Mail To Me</B>
          </Menu.Item>
          <Menu.Item>
            <B>
              Total visited:
              {' ' + counterStore.counter}
            </B>
          </Menu.Item>
        </Container>
      </HeaderMenu>
    )
  }
}

export default observer(Header)
