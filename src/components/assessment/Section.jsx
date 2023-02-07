import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Slider from '@mui/material/Slider';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';

export default function Section({
    setUpdateAssessment,
    updateAssessment,
    teamAssessment,
    newSection,
    responses,
    section,
    index
}) {

    const [isUpdating, setIsUpdating] = useState(false)
    const [update, setUpdate] = useState(responses)

    const handleChange = (e) => {
        const { value, name } = e.target

        let change = update
        change[name] = value
        setUpdate(change)
        // setUpdateAssessment(change)
        setIsUpdating(true)
    }

    useEffect(() => {
        const doUpdate = () => {
            setUpdate(update)
            let change = updateAssessment
            change[section] = update
            setUpdateAssessment(change)
            setIsUpdating(false)
        }
        if (isUpdating) {
            doUpdate()
        } else {
            setIsUpdating(false)
        }

    }, [isUpdating, update])

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
        <TableContainer sx={{ borderRadius: '10px', maxHeight: '750px', width: '60vw', '&::-webkit-scrollbar': { width: 0 } }}>
            <Table stickyHeader aria-label={section}>
                <TableHead>

                    <TableRow >
                        <TableCell scope='row' align='center' sx={{ backgroundColor: colors[index] }}>
                            <Typography variant='h6'>Question</Typography>
                        </TableCell>
                        <TableCell scope='row' align='center' sx={{ backgroundColor: colors[index] }}>
                            <Typography variant='h6'>Response</Typography>
                        </TableCell>
                        <TableCell scope='row' align='center' sx={{ backgroundColor: colors[index] }}>
                            <Typography variant='h6'>Score</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {teamAssessment[section] && teamAssessment[section].map((question, i) => (
                        <TableRow key={i}>
                            <TableCell scope='row' align='center'>
                                {question}
                            </TableCell>

                            <TableCell scope='row' align='center' sx={{ height: '60px' }}>
                                <Box sx={{ display: 'flex', height: '70px', alignItems: 'center' }}>
                                    <Slider
                                        aria-label='Response'
                                        defaultValue={newSection ? 0 : update[question]}
                                        valueLabelDisplay='auto'
                                        step={1}
                                        marks
                                        min={0}
                                        max={4}
                                        name={question}
                                        onChange={handleChange}
                                    />
                                </Box>
                            </TableCell>

                            {newSection ?
                                <TableCell scope='row' align='center'>
                                    No Exposure
                                </TableCell>
                                :
                                <TableCell scope='row' align='center' sx={{ color: `${paint(update[question])}` }}>
                                    {text(update[question])}
                                </TableCell>
                            }
                        </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
