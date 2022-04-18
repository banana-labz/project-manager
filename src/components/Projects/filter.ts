import { Project } from "../../entities"

export const filter = (items: Project[], pattern: string): Project[] => {
  if (!pattern.length) {
    return items
  }

  const lcasePattern = pattern.toLowerCase()
  const keyWords = lcasePattern.split(" ").filter(v => v.length)

  return items.filter(({ name, description }) => {
    for (const i in keyWords) {
      const word = keyWords[i]

      const nameSearch = name.toLowerCase().search(word)
      const descriptionSearch = description.toLowerCase().search(word)
      
      if (nameSearch === -1 && descriptionSearch === -1) {
        return false
      }
    }    
    
    return true
  })
}