# 好きな物発表ドラゴンジェネレーター

![image](./readme_assets/ohitashi.png)

# ※元ネタ

好きな惣菜発表ドラゴン / ムバヂ様

[https://www.youtube.com/watch?v=OnCFEo_pXaY](https://www.youtube.com/watch?v=OnCFEo_pXaY)
[https://www.youtube.com/watch?v=OnCFEo_pXaY](https://www.youtube.com/watch?v=OnCFEo_pXaY)
[https://www.youtube.com/watch?v=OnCFEo_pXaY](https://www.youtube.com/watch?v=OnCFEo_pXaY)
[https://www.youtube.com/watch?v=OnCFEo_pXaY](https://www.youtube.com/watch?v=OnCFEo_pXaY)

↑おしやすい

# How to use

- Console

```sh
node dist/console.js "ファイル名" "生成したい文字列"
```

- Class Call

```ts
import { DragonSaysLikeAboutSomething } from "/path/to/dist"

const imageBuffer = await new DragonSaysLikeAboutSomething("生成したい文字列").draw();
require("fs").writeFileSync("output.png", imageBuffer)
```