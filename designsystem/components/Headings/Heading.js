import HeadingStyle from './Heading.css'

export default ({ text, style }) => <h1 css={[HeadingStyle, style]}>{text}</h1>