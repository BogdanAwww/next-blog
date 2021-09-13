import React from 'react'
import { Grid } from '@mui/material'

import CardView from '../CardView/CardView'

const Publications = () => {
  return (
        <Grid container spacing={5}>
            {Array.from(Array(8)).map((_, index) => (
             <Grid item xs={2} sm={4} md={4} key={index}>
                <CardView></CardView>
             </Grid>
            ))}
        </Grid>
  )
}

export default Publications
