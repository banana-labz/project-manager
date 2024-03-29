import React from "react"

import { Grid, Button, Typography } from "@mui/material"
import { Card as CardContainer } from "@mui/material"

import EditIcon from "@mui/icons-material/Edit"

import { useEditProjectDialogContext } from "../../context"


type CardProps = {
  id: number
  name: string
  description: string
  ownerName: string,
  action?: boolean
}

type CellProps = {
  children: React.ReactNode,
}

const Cell = ({ children }: CellProps) => (
  <Grid item sx={style.cell}>
    {children}
  </Grid>
)

export const Card = ({ id, name, description, ownerName, action }: CardProps) => {
  const { onOpen, setId } = useEditProjectDialogContext()

  const handleEdit = () => {
    setId(id)
    onOpen()
  }

  const renderActions = (bool: CardProps["action"]) => !!bool ? (
    <Cell>
      <Button
        startIcon={<EditIcon/>}
        color="info"
        variant="outlined"
        onClick={handleEdit}
        children="edit"
      />
    </Cell>
  ) : null

  return (
    <CardContainer variant="outlined">
      <Grid container sx={style.grid}>
        <Cell><Typography>{name}</Typography></Cell>
        <Cell><Typography>{ownerName}</Typography></Cell>
        <Cell><Typography>{description}</Typography></Cell>
        {renderActions(action)}
      </Grid>
    </CardContainer>
  )
}

const style = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: "40px",
    justifyContent: "center",
    alignItems: "center",

    padding: "10px",
  },
  cell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
}