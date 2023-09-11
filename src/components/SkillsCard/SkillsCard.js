import React, { useState, useEffect } from "react";
import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import IconMap from "../IconMap/IconMap.js";
import "./SkillsCard.scss";

const SkillsCard = ({ tools, children }) => {
  const [IconComponents, setIconComponents] = useState([]);

  useEffect(() => {
    let loadedIcons = tools.map((tool) => IconMap[tool]);
    setIconComponents(loadedIcons);
  }, [tools]);

  return (
    <Stack>
      <Stack direction="horizontal" gap={3} className="mb-2">
        {IconComponents.map((tool, index) => {
          const IconComponent = tool.icon;
          const iconStyle = { color: tool.color };
          return (
            <OverlayTrigger
              key={index}
              overlay={<Tooltip id={tool.name}>{tool.name}</Tooltip>}
              placement="top"
            >
              <span>
                <IconComponent style={iconStyle} className="skills-icon" />
              </span>
            </OverlayTrigger>
          );
        })}
      </Stack>
      {children}
    </Stack>
  );
};

export default SkillsCard;
