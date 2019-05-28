import IconCardStyle from "./IconCard.css";
import { Icon, iconDefinitions } from '../Icon/Icon';

const IconCard = ({ title, icon, text, linkUrl }) => {
    return (
        <a href={linkUrl}>
            <div className="iconCard" css={IconCardStyle}>
                <h3>{title}</h3>
                <Icon icon="Furniture" />
                <span>{text}</span>
            </div>
        </a>
    );
};

export { IconCard };
