
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

  ## Install Packages
  1. Install the following packages
        -   ~~~js
            npm i react-markdown react-syntax-highlighter
            ~~~
  2. In the component, import these:
        -   ~~~js
            import ReactMarkdown from 'react-markdown';

            import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
            import { vscDarkPlus as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
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