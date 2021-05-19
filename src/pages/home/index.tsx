import React from 'react'
import { Helmet } from 'react-helmet'
import H1 from '@/components/H1'

const Home: React.FC<any> = () => {
  return (
    <div>
      <Helmet>
        <title>Resume Page</title>
        <meta name="description" content="Resume of Eric Wang" />
      </Helmet>
      <H1>Eric Wang</H1>
    </div>
  )
}

export default Home
