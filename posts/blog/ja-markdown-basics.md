---
title:  "Mardownとは？"
subtitle: "マークダウンってなんだろう？基本syntaxについて調べてみよう。"
lang: "ja"
date:   "2021-06-20"
tags:
- markdown
---

この記事は日本語で書いております。

```md
# Header 1
## Headar 2
### Header 3
#### Header 3
##### Header 5
```

# Header 1
## Headar 2
### Header 3
#### Header 3
##### Header 5

---

```md
**このテキストは bold して**、 *このてきすとは italic する*.
```

**このテキストは bold して**、 *このてきすとは italic する*.

---

```md
![Image example](/images/profile.jpg) and the [リンク](#)をつけることもできます。
```
イメージ追加もできます。
![Image example](/images/profile.jpg) もちろん [リンク](#)をつけることもできます。

---

```md
- これはリスト
  - これはリストのリスト
    - まーはい。リストです。
  - リストのリストの２
- リスト２
```

- これはリスト
  - これはリストのリスト
    - まーはい。リストです。
  - リストのリストの２
- リスト２

---

```cpp
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");

    return 0;
}
```

```js
console.log("Java Script");
```

```ruby
def hello
    puts("Hello World!")
end

hello()
```
