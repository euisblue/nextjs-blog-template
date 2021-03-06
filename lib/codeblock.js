import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Codeblock = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={nord}
                language={match[1]}
                showLineNumbers={true}
                PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>

        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    }
}

export default Codeblock;