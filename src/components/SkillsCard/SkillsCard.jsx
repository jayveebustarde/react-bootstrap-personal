import { useMemo } from 'react';
import { OverlayTrigger, Stack, Tooltip } from 'react-bootstrap';
import IconMap from '../IconMap/IconMap.js';
import './SkillsCard.scss';

const SkillsCard = ({ tools, children }) => {
  const iconComponents = useMemo(
    () => tools.map((toolKey) => IconMap[toolKey]),
    [tools],
  );

  return (
    <Stack>
      <Stack direction='horizontal' gap={3} className='mb-2'>
        {iconComponents.map((tool, index) => {
          const IconComponent = tool.icon;
          const iconStyle = { color: tool.color };
          return (
            <OverlayTrigger
              key={index}
              overlay={<Tooltip id={tool.name}>{tool.name}</Tooltip>}
              placement='top'
            >
              <span>
                <IconComponent style={iconStyle} className='skills-icon' />
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
