import React from 'react'
import { Button } from '@material-ui/core'

import Layout from '../components/Layout'

function Home() {
  return (
    <Layout title="AGERBATube">
      <div>Clone youtube com NextJS + Material-UI (without TypeScript)</div>
      <Button variant="outlined" color="secondary">
        Primary
      </Button>
    </Layout>
  )
}

export default Home
