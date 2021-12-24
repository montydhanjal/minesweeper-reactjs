import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';





const Board = ({ boardInitial, onOpen }) => {

    // console.log(boardInitial)

    function Mine({ cellInfo: {row, column, bomb, flagged, open, bombCount } }) {
        // console.log(bomb, flagged, open)
        if (open) {
            if(bomb){
                return(<IconButton color="primary" aria-label="add to shopping cart">
                <AcUnitSharpIcon /> 
            </IconButton>)   
            }
            return (<IconButton color="primary" aria-label="add to shopping cart">
               <Typography fontSize={20}>{bombCount}</Typography>
            </IconButton>)
        }


        return (
            <IconButton onClick={()=>onOpen(row, column)} color="primary" aria-label="add to shopping cart">
              {bomb ? <AcUnitSharpIcon /> : <CheckBoxOutlineBlankSharpIcon /> }  
                <Typography fontSize={20}>{bombCount}</Typography>
            </IconButton>
        )

    }



    function Cell({ cellInfo }) {
        return (
            <Grid Item>
                <Mine cellInfo={cellInfo} />
            </Grid>
        )
    }


    function Row({ rowInfo }) {
        return (<Grid container>
            {rowInfo.map((cell, i) => {
                return <Cell key={i} cellInfo={cell} />
            })}

        </Grid>)
    }

  



    return (boardInitial.map((row, i) => {
        // console.log(boardInitial)
        return <Row rowInfo={row} />
    }))




}

export default Board