---
slug: css-basics
title: CSS Basics
authors: [johnson]
tags: [html, frontend, css]
---

# CSS Basics 🎨

CSS is what makes websites **colorful, big, small, pretty, and fun**.  
HTML builds the house 🏠 — CSS paints and decorates it 🎨.

### Example

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

h1 {
  color: #2c3e50;
}
```

### 🧪 Exercise

1. Create `style.css`
2. Change:

   * Background color
   * Font size
   * Text color
3. Link CSS to HTML

```html
<link rel="stylesheet" href="style.css" />
```

✅ Goal: Learn separation of structure and style

If you want to learn other concepts in CSS, below is the link from MDN.

MDN CSS Tutorials — structured from beginner basics to advanced topics, with examples and explanations. CSS Tutorials (MDN) https://developer.mozilla.org/en-US/docs/Web/CSS/Tutorials

# Box Example

```jsx live
<>
  <div
    style={{
      backgroundColor: "orange",
      padding: "20px",
      border: "2px solid black",
      width: "200px",
      textAlign: "center"
    }}
  >
    I am a box
  </div>
</>
```

Explanation

background-color → fills the box with color 🟨

padding → gives space inside the box

border → draws a line around the box

text-align: center → moves text to the middle

💡 Think: Like putting a toy inside a gift box 🎁

---

# Button Hover Example

```jsx live
<>
  <button
    style={{
      backgroundColor: "green",
      color: "white",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer"
    }}
    onMouseOver={e => e.target.style.backgroundColor = "orange"}
    onMouseOut={e => e.target.style.backgroundColor = "green"}
  >
    Hover Me
  </button>
</>
```
