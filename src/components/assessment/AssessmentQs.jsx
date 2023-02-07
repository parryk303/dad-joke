import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';

export default function AssessmentQs({ questions, responses, section, color, setOpen, live }) {

    const paint = (score) => {
        if (score === 0) {
            return 'gray'
        } else if (score === 1) {
            return 'red'
        } else if (score === 2) {
            return 'orange'
        } else if (score === 3) {
            return 'green'
        } else if (score === 4) {
            return 'green'
        } else {
            return 'gray'
        }
    }

    const text = (score) => {
        if (score === 0) {
            return 'No Exposure to this Skill'
        } else if (score === 1) {
            return 'Beginner'
        } else if (score === 2) {
            return 'Intermediate'
        } else if (score === 3) {
            return 'Advanced'
        } else if (score === 4) {
            return 'Expert'
        } else {
            return 'No Exposure to this Skill'
        }
    }

    const colors = [
        'rgba(253,170,10,0.8)',
        'rgba(252,50,79,0.8)',
        'rgba(93,28,210,0.8)',
        'rgba(64,168,255,0.8)',
        'rgba(120,50,24,0.8)',
        'rgba(100,88,30,0.8)',
        'rgba(253,100,9,0.8)',
        'rgb(0, 0, 0, 0.8)',
        'rgb(0, 0, 128, 0.8)',
        'rgb(0, 0, 255)',
        'rgb(0, 128, 0, 0.8)',
        'rgb(0, 128, 128, 0.8)',
        'rgb(0, 255, 0, 0.8)',
        'rgb(0, 255, 255)',
        'rgb(128, 0, 0)',
        'rgb(128, 0, 128)',
        'rgb(128, 128, 0, 0.8)',
        'rgb(128, 128, 128)',
        'rgb(192, 192, 192, 0.8)',
        'rgb(255, 0, 0)',
        'rgb(255, 0, 255)',
        'rgb(255, 230, 8)',
        'rgb(255, 255, 200)',
        'rgba(10,200,24,0.8)',
        'rgba(41,88,30,0.8)',
        'rgba(7,100,9,0.8)'
    ]

    return (
        <Box sx={{ height: '400px' }}>
            <Typography sx={{ marginTop: '2%', padding: '1%', backgroundColor: `${colors[color]}` }} variant='h4'>{section}</Typography>
            <TableContainer sx={section === 'Data Parsing, Validation and Operationalization' ? { maxHeight: '300px' } : { maxHeight: '350px' }}>
                <Table stickyHeader aria-label={section}>
                    {live ?
                        <TableBody>
                            {Object.keys(responses[section]).map((question, i) => (
                                <TableRow key={i}>
                                    <TableCell scope='row' align='center'>
                                        {question}
                                    </TableCell>
                                    {responses[section] ?
                                        <TableCell scope='row' align='center' sx={{ color: `${paint(responses[section][question])}` }}>
                                            {text(responses[section][question])}
                                        </TableCell>
                                        :
                                        <TableCell onClick={(e) => setOpen(true)} scope='row' align='right' sx={{ color: 'purple', cursor: 'pointer' }}>
                                            please complete assessment
                                        </TableCell>
                                    }
                                </TableRow>))}
                        </TableBody>
                        :
                        <TableBody>
                            {questions[section] && questions[section].map((question, i) => (
                                <TableRow key={i}>
                                    <TableCell scope='row' align='center'>
                                        {question}
                                    </TableCell>
                                    {responses[section] ?
                                        <TableCell scope='row' align='center' sx={{ color: `${paint(responses[section][i])}` }}>
                                            {text(responses[section][i])}
                                        </TableCell>
                                        :
                                        <TableCell onClick={(e) => setOpen(true)} scope='row' align='right' sx={{ color: 'purple', cursor: 'pointer' }}>
                                            please complete assessment
                                        </TableCell>
                                    }
                                </TableRow>))}
                        </TableBody>
                    }

                </Table>
            </TableContainer>
        </Box>
    )
};
