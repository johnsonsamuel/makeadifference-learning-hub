---
slug: lesson-learned-building-an-ai-chatbot
title: Lesson Learned Building an AI Chatbot
authors: []
tags: [frontend, course, week, plan, starter, vercel, chatbot]
---

A month ago, while building a resume coach AI chatbot using Lambda functions and deploying them on Vercel(**a leading cloud platform for frontend developers)**, I repeatedly encountered timeout errors in the Vercel logs during testing. As I debugged the issue for sometime, I discovered that I was using *response.json()* instead of streaming the response, which was causing the *timeout* ⌛️errors on Vercel. Once I updated the Lambda functions to use streams, it started to work without issues. 

💡 I had built the chatbot’s UI using React. 

![image.png](attachment:484e647e-480d-4c15-99c2-31bc56e7458f:image.png)

**Why do we need to use streams in Lambda?**

Streams are ideal for AI chatbots or any conversation based applications because they give good user experience. With streaming, users don’t have to wait for the entire response but they can receive the output incrementally, a better interactive experience for the user 🙂.

Based on my personal experience building APIs, I would suggest streaming for texts and json for any CRUD operations or business logic implementation.

**Lambda /serverless function:**

```jsx
    // Request streamed response from AI model
    const stream = AI.generateStream(userPrompt)
    
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.setHeader("Cache-Control", "no-cache");
            
         // Return chunks immediately to frontend
            for await (const chunk of stream) {
                const text = chunk.text;
                if (text) {
                    res.write(text);
                }
            }

            res.end();
```

**Frontend(React)**

```jsx
const res = await fetch("api/chat");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let fullText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        fullText += chunk;
      }

      if (!res.ok) {
        throw new Error(`Failed to get response: ${res.status}`);
      }
```

**💡 Vercel** allows us to send data to the client(frontend) in chunks rather than waiting for the entire response to be generated.

**What are you building using AI?** 

**Have you faced any issue building using AI and how did you solve it?**

Happy learning 🎉

If you have any queries or suggestions, please reach out to <a href="mailto:yoe.johnson@gmail.com">yoe.johnson@gmail.com</a>

#ai #chatbot #resumebuilder #serverless #vercel #lessonlearned #frontend #developer #learning #node #react #lambda #ui #gemini #chat
