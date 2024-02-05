import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import student from '../../assets/students.jpg'


export default function BasicGrid() {
    return (
        <Paper>
            <Box sx={{flexGrow: 1,}}>
                <img src={student} height={530} width={650}/>
            </Box>
            <Box>

            </Box>

        </Paper>
    )

};