import { useState } from "react"

type useSwitchReturnParams = [bool: boolean, setTrue: () => void, setFalse: () => void]

export const useSwitch = (value: boolean) => {
  const [bool, setBool] = useState<boolean>(value)

  const setTrue = () => {
    setBool(true)
  }
  const setFalse = () => {
    setBool(false)
  }
  return [bool, setTrue , setFalse] as useSwitchReturnParams
}