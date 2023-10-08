import { Box, Grid, Typography, createTheme } from '@mui/material';
import './App.css'
import Button from '@mui/material/Button';
import { lightBlue, lightGreen } from '@mui/material/colors';

function App() {

  return (
    <div className=''>
      <Grid sx={{p: 2}}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start">
        <Typography variant="h3" component="h4" color={lightBlue[800]}>
          Blog.Dev
        </Typography>
        <Box sx={{width: 250, display: 'flex', justifyContent: 'space-around'}}>
          <Button variant="contained" size='medium'>Sing In</Button>
          <Button variant="contained" size='medium'>Log In</Button>
        </Box>
      </Grid>
    </div>
  )
}

export default App
