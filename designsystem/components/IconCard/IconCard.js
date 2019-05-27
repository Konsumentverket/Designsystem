import IconCardStyle from "./IconCard.css";
import { Icon, iconDefinitions } from '../Icon/Icon';

const IconCard = ({ icon, text, linkUrl }) => {
    return (
        <a href={linkUrl}>
            <div className="iconCard" css={IconCardStyle}>
                <Icon icon="Furniture" />
                <span>{text}</span>
            </div>
        </a>
    );
};

export { IconCard };
