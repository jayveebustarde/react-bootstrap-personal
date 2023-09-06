import React, { useState, useEffect } from "react";
import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import IconMap from "../IconMap/IconMap.js";
import "./SkillsCard.scss";

const SkillsCard = ({ tools, children }) => {
  const [IconComponents, setIconComponents] = useState({});

  useEffect(() => {
    let loadedIcons = {};
    for (const tool of tools) {
      const { icon } = tool;
      loadedIcons[icon] = IconMap[icon];
    }
    setIconComponents(loadedIcons);
  }, [tools]);

  return (
    <Stack>
      <Stack direction="horizontal" gap={3} className="mb-2">
        {tools.map((tool, index) => {
          const IconComponent = IconComponents[tool.icon];
          const iconStyle = { color: tool.color };
          return IconComponent ? (
            <OverlayTrigger
              key={index}
              overlay={<Tooltip id={tool.icon}>{tool.name}</Tooltip>}
              placement="top"
            >
              <span>
                <IconComponent style={iconStyle} className="skills-icon" />
              </span>
            </OverlayTrigger>
          ) : null;
        })}
      </Stack>
      {children}
    </Stack>
  );
};

export default SkillsCard;
