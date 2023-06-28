import React, { Suspense } from "react";
import { Stack } from "react-bootstrap";
import * as SiIcons from "react-icons/si"

const SkillsCard = ({tools, children}) => {
    const icons = tools?.map(tool => {
        return { 
        "icon": 'Si' + tool.icon,
        "color": tool.color 
        };
    });
    const IconComponents = {};
    icons.forEach(icon => {
        IconComponents[icon.icon] = SiIcons[icon.icon]
    });
    return (
        <Stack>
            <Stack direction="horizontal" gap={2}>
                <Suspense fallback={<div>Loading...</div>}>
                    {icons.map((item, index) => {
                        const IconComponent = IconComponents[item.icon];
                        const iconStyle = {
                            color: item.color,
                            fontSize: "25px"
                        }
                        return (<IconComponent key={index} style={iconStyle} />);
                    })}
                </Suspense>
            </Stack>
            {children}
        </Stack>
    );
}

export default SkillsCard;