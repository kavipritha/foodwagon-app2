import React, { useContext } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import AuthContext from '../../utils/authContext'

const LoginPage = () => {
  const auth = useContext(AuthContext)
  return (
    <div style={{ padding: 30 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <TextField label="UserName"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password"></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
            onClick={auth.login}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginPage
