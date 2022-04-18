import React from "react"

import { useState } from "react"
import { Box, Button } from "@mui/material"

import { List } from "./List"
import { Search } from "./Search"

export const Projects = () => {
  const [searchPattern, setSearchPattern] = useState<string>("")
  return (
    <Box sx={style.container}>
      <Box sx={style.options}>
        <Search pattern={searchPattern} onChange={setSearchPattern}/>
        <Button variant="contained">Create project</Button>
      </Box>
      <List pattern={searchPattern}/>
    </Box>
  )
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px"
  },
  options: {
    display: "flex",
    flexDirection: "row",
    gap: "10px"
  },
  list: {

  }
}