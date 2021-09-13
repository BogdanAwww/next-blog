import React from 'react'
import { Container } from '@mui/material'

import Publications from '../src/components/Publications'

export default function Home () {
  console.log('kek')
  return (
    <Container sx={{ mt: 5 }}>
       <Publications />
    </Container>

  )
}
