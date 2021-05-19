import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import AppSidebar from './side-bar'

import styled from 'styled-components'
import { Container, Sidebar } from 'semantic-ui-react'
import Home from '@/pages/home'
import NotFound from '@/pages/not-found'
import Header from './header'
import { Helmet } from 'react-helmet'
import Footer from './footer'

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const AppHeader = styled(Header)`
  flex: none;
`

const AppFooter = styled(Footer)`
  flex: none;
`

const AppPushAble = styled(Sidebar.Pushable)`
  background-color: #fafafa;
  overflow-y: scroll;
  flex: 1 0 0;
  -ms-flex: 1 0 0;
  -webkit-flex: 1 0 0;
`

const AppContainer = styled(Container)`
  padding: 1em 0 !important;
`

export default class Layout extends React.Component {
  state = {
    visible: false
  }

  componentDidMount() {
    document.addEventListener('keydown', this.disableVisibility, false)
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  disableVisibility = () => {
    if (this.state.visible === true) {
      this.setState({ visible: false })
    }
  }

  render() {
    return (
      <AppWrapper>
        <AppHeader onToggle={this.toggleVisibility} onClick={this.disableVisibility} />
        <Helmet
          titleTemplate="%s - Eric Wang's Personal Homepage"
          defaultTitle="Eric Wang's Personal Homepage"
        >
          <meta name="description" content="Eric Wang's Personal Homepage" />
        </Helmet>
        <BrowserRouter basename="/resume">
          <AppSidebar {...this.state} onToggle={this.toggleVisibility} />
          <AppPushAble onClick={this.disableVisibility}>
            <Sidebar.Pusher>
              <AppContainer>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/resume" component={Home} />
                  <Route path="/home" component={Home} />
                  {/* <Route path="/resume" component={ResumePage} /> */}
                  {/* <Route path="/events" component={EventPage} /> */}
                  <Route path="" component={NotFound} />
                </Switch>
              </AppContainer>
            </Sidebar.Pusher>
          </AppPushAble>
        </BrowserRouter>
        <AppFooter onClick={this.disableVisibility} />
      </AppWrapper>
    )
  }
}
