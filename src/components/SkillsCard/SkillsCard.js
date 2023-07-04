import React, { Suspense } from "react";
import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import "./SkillsCard.scss"
import * as SiIcons from "react-icons/si"

const SkillsCard = ({tools, children}) => {
    const icons = tools?.map(tool => {
        return { 
        "icon": 'Si' + tool.icon,
        "color": tool.color,
        "name": tool.name
        };
    });
    const IconComponents = {};
    icons.forEach(icon => {
        IconComponents[icon.icon] = SiIcons[icon.icon]
    });
    return (
        <Stack>
            <Stack direction="horizontal" gap={3} className="mb-2">
                <Suspense fallback={<div>Loading...</div>}>
                    {icons.map((item, index) => {
                        const IconComponent = SiIcons[item.icon];
                        const iconStyle = { color: item.color };
                        return (
                            <OverlayTrigger key={index}  overlay={
                                <Tooltip id={item.icon}>{item.name}</Tooltip>
                            } placement="top">
                                <span>
                                    <IconComponent style={iconStyle} className="skills-icon" />
                                </span>
                            </OverlayTrigger>        
                        );
                    })}
                </Suspense>
            </Stack>
            {children}
        </Stack>
    );
}

export default SkillsCard;