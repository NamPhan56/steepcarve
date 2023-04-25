
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

const reactmarkdown = () => {

const markdown = (
`
# Steps for Setting up Markdown for React

## About
- These are the basic steps for setting up Markdown and also rendering code snippets
---

## Steps
1. Install the following packages
    - [react-markdown](https://www.npmjs.com/package/react-markd)
    - [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)
    -   ~~~js
        npm i react-markdown react-syntax-highlighter
        ~~~
2. In the component, import these:
    -   ~~~js
        import ReactMarkdown from 'react-markdown';

        import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
        import { vscDarkPlus as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
        ~~~
3. Use this code template in your component
    -   ~~~js
        const componentName = () => {

            const markdown = (
            \`
            # Markdown here
            
            # Code Snippet Here
            ~~~js
            const code = "code example"
            ~~~
            \`
            )

            return(
                <div>
                  <ReactMarkdown
                    children={markdown}
                    components={{
                      code({node, inline, className, children, ...props}) {
                        const match = /language-(\\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\\n$/,'')}
                            style={syntaxStyle}
                            language={match[1]}
                            PreTag="div"
                            />
                        ) : (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        )
                      }
                    }}
                  />
                </div>
              )
            }
            export default componentName
        ~~~
`
)
  return(
    <div>
      <ReactMarkdown
        children={markdown}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/,'')}
                style={syntaxStyle}
                language={match[1]}
                PreTag="div"
                />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default reactmarkdown