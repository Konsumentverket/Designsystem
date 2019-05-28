import React from "react";
import IconCardStyle from "./IconCard.css";
import { Icon, iconDefinitions } from '../Icon/Icon';
import { Link } from "../Link/Link";

const IconCard = ({ title, icon, text, link, href }) => {

    return (
        <div css={IconCardStyle}>
            <Link href={href} item={link}>
                <div className="iconCard">
                    <div className="icon-container">
                        <Icon icon={icon} />
                    </div>
                    <div className="caption">{text}</div>
                </div>
            </Link>
        </div>
    );
};

export { IconCard };
