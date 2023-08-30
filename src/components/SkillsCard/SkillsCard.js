import React, { Suspense, useState, useEffect } from "react";
import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import "./SkillsCard.scss"

const SkillsCard = ({ tools, children }) => {
    const [IconComponents, setIconComponents] = useState({});

    useEffect(() => {
        async function loadIcons() {
            let loadedIcons = {};
            for (const tool of tools) {
                const { icon } = tool;
                const module = await import("../IconMap/IconMap.js");
                loadedIcons[icon] = module[icon];
            }
            setIconComponents(loadedIcons);
        }
        
        loadIcons();
    }, [tools]);

    return (
        <Stack>
            <Stack direction="horizontal" gap={3} className="mb-2">
                <Suspense fallback={<div>Loading...</div>}>
                    {tools.map((tool, index) => {
                        const IconComponent = IconComponents[tool.icon];
                        const iconStyle = { color: tool.color };
                        return IconComponent ? (
                            <OverlayTrigger key={index}  overlay={
                                <Tooltip id={tool.icon}>{tool.name}</Tooltip>
                            } placement="top">
                                <span>
                                    <IconComponent style={iconStyle} className="skills-icon" />
                                </span>
                            </OverlayTrigger>        
                        ) : null;
                    })}
                </Suspense>
            </Stack>
            {children}
        </Stack>
    );
}

export default SkillsCard;
