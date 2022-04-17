import React from "react"
import { useNavigate } from "react-router"
import { useActions } from "react-redux-actions-hook"
import { Button, Typography } from "@mui/material"
import { Card as CardContainer, CardMedia, CardContent, CardActions } from "@mui/material"

type CardProps = {
  id: number
  name: string
  description: string
  ownerName: string
}

export const Card = ({ id, name, description, ownerName }: CardProps) => {
  const navigate = useNavigate()

  return (
    <CardContainer sx={style.card}> 
      <CardContent sx={style.content}>  
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h5">{description}</Typography>
      </CardContent>
      
      <CardActions sx={style.actions}>
        <Button
          color="info"
          variant="outlined"
          sx={style.button}
          children="edit"
        />
      </CardActions>
    </CardContainer>
  )
}

const style = {
  card: {
    display: "grid",
    gridTemplateRows: "4fr 1fr",
    gridGap: "0",
    
    height: "100%",
  
    boxShadow: "0px 2px 8px rgba(24, 85, 130, 0.1)",
    padding: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  },
  actions: {
    padding: "10px"
  },
  button: {
    background: "#FFF",
    border: "1px solid"
  }
}