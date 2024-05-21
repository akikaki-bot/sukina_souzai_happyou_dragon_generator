
import {
    argv
} from "node:process"

import { DragonSaysLikeAboutSomething } from "."

const text = argv[2] 

if( !text ){
    console.error(" Usage: node dist/console.js <text>")
    process.exit(1)
}

(async () => {
    const image = await new DragonSaysLikeAboutSomething(text).draw()
    require("fs").writeFileSync("output.png", image)
})();