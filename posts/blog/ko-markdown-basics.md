---
title:  "마크다운(Markdown) 알아보기"
subtitle: "마크다운이란 무엇인가? "
date:   "2021-05-03"
lang: "ko"
tags:
- markdown
---

이 글은 한국어로 작성되어 있다.

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
**This text is bold** and *this text is italicized*.
```

**This text is bold** and *this text is italicized*.

---

```md
![Image example](/images/profile.jpg) and the [link](#)
```
You can add an image
![Image example](/images/profile.jpg) and the [link](#)

---

- List
  - List of list
    - List of list of list
    -  List of list of list 2
  - List of list 2
- List 2

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