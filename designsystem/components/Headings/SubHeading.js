import SubHeadingStyle from './SubHeading.css'

export default ({ children, text, style, level = 2 }) => {

    const headings = ['h1', 'h2', 'h3', 'h4', 'h5']

    const SelectedHeading = headings[level - 1] || 'h2'

    return <SelectedHeading css={[SubHeadingStyle, style]} > {children}{text}</SelectedHeading>
}