import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Grid } from '@mui/material'

import CardView from '../CardView/CardView'

import getPublications from './../../store/thunks/getPublications'

const Publications = () => {
  const publications = useSelector((store) => store.publications, shallowEqual)
  const dispatch = useDispatch()
  console.log(publications)
  useEffect(() => {
    dispatch(getPublications())
  }, [])

  return (
    publications.status === 'pending'
      ? 'Загрузка...'
      : publications.status === 'rejected'
        ? publications.error
        : <Grid container spacing={5}>
        {Array.from(Array(8)).map((_, index) => (
         <Grid item xs={2} sm={4} md={4} key={index}>
            <CardView></CardView>
         </Grid>
        ))}
    </Grid>
  )
}

export default Publications
