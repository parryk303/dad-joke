import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useState } from 'react';

const JokeCard = ({ setup, punchline }) => {
  const [flipped, setFlipped] = useState()

  const handleFlip = (e) => {
    e.preventDefault();
    setFlipped(!flipped)
  }
  return (
    <div className={`card ${flipped ? 'flip' : ''}`} isFlipped={flipped} onClick={handleFlip} >
      <Box className='front'>
        <Typography variant='h6'>{setup}</Typography>
      </Box>
      <Box className='back'>
        <Typography variant='h6'>{punchline}</Typography>
      </Box>
    </div>
  )
}

export default JokeCard