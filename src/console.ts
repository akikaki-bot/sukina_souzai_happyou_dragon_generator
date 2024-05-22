
import {
    argv
} from "node:process"

import { DragonSaysLikeAboutSomething } from "."

const text = argv[3] 
const fileName = argv[2]

if( !fileName ){
    console.error(" Usage: node dist/console.js <filename> <text> ")
    process.exit(1)

}

if( !text ){
    console.error(" Usage: node dist/console.js <filename> <text>")
    process.exit(1)
}

(async () => {
    const image = await new DragonSaysLikeAboutSomething(text).draw()
    require("fs").writeFileSync(`${fileName}.png`, image)
})();