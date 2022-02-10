import fs from "fs"
import path from "path"

export function getProducts() {
    const filePath = path.join(process.cwd(),"components")
    const data = fs.readdirSync(filePath)
    const finalData = data.map(component => {
        return component.replace(".jsx","").toLowerCase()
    })
    return finalData
}