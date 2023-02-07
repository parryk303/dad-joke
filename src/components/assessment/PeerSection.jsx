import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';

export default function PeerSection({
    skillsUpdate,
    setSkillsUpdate,
    responses,
    section,
}) {

    const [isUpdating, setIsUpdating] = useState(false)
    const [update, setUpdate] = useState(skillsUpdate)

    const keys = {}

    Object.keys(skillsUpdate.responses).forEach(key => {
        keys[key] = 0
    })

    const handleChange = (e) => {
        const { value, name } = e.target

        if (!update.hasOwnProperty('peerAve')) {
            let change = update
            change['peerAve'] = keys
            change.peerAve[name] = value
            change.peer = Object.values(change.peerAve)
            setUpdate(change)
        }
        if (update.hasOwnProperty('peerAve')) {
            let change = update
            change['peerAve'][name] = value
            change.peer = Object.values(change.peerAve)
            setUpdate(change)
        }

        setIsUpdating(true)
    }

    useEffect(() => {
        const doUpdate = () => {
            setSkillsUpdate(update)
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
        <Box sx={{ display: 'flex', height: '70px', alignItems: 'center' }}>
            <Slider
                aria-label='Response'
                defaultValue={update.hasOwnProperty('peerAve') ? update.peerAve[section] : 0}
                valueLabelDisplay='auto'
                step={1}
                marks
                min={0}
                max={4}
                name={section}
                onChange={handleChange}
            />
            <Typography scope='row' align='center' sx={{ marginLeft: '30px', color: `${paint(update.hasOwnProperty('peerAve') ? update.peerAve[section] : 0)}` }}>
                {text(update.hasOwnProperty('peerAve') ? update.peerAve[section] : 0)}
            </Typography>
        </Box>
    )
}


