'use client'

import React, { Fragment, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText, globalStyles } from '@/stitches.config'

/*
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

export default function StyledJsxRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [jsxStyleRegistry] = useState(() => createStyleRegistry())

    useServerInsertedHTML(() => {
        const styles = jsxStyleRegistry.styles()
        jsxStyleRegistry.flush()
        return <>{styles}</>
    })

    return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}
*/

export default function ServerStylesheet({ children }: { children: React.ReactNode }): React.ReactNode {
    useServerInsertedHTML(() => {
        if (typeof window === 'undefined') {
            return (
                <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
            )
        }
    })

    globalStyles()
    return <Fragment>{children}</Fragment>
}