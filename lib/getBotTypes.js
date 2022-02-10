import fs from "fs"
import path from "path"

export function getBotTypes() {
    const data = fs.readdirSync(path.join(process.cwd(),"components/bot-types"))

    const finalData = data.map(item => {
        return item.replace(".jsx","").toLowerCase()
    })

    return finalData
}