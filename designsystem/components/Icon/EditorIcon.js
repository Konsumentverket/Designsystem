/** @jsx jsx */
import { jsx } from '@emotion/core'

import AppsAndGames from '../../icons/EditorIcons/AppsAndGames'

const editorIconDefinitions = {
    AppsAndGames
}

const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
    const Element = editorIconDefinitions[icon];

    if (Element === undefined) {
        console.log(`Could not find icon in storybook tried to load: ${icon}`)
        return null
    }

    return <Element title={title} className={className} style={style} role="img" aria-label={title || ""} alt="" {...otherAttr} />
}

export { EditorIcon, editorIconDefinitions };