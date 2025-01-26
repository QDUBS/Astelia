import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomeHandle";
import { useState } from "react";
import NodePopoverUsers from "./NodePopoverUsers";

export default function ServerUsers({
  data: { name, ipAdress, status },
}: NodeProps<{ name: string; ipAdress: string; status: string }>) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Card className="server-state-node">
        <CardContent className="server-node-container">
          <CardContent className="server-node-flex">
            <span className="server-users-icon">
              <Image
                src="/images/mask.png"
                alt="mask"
                width={50}
                height={50}
                color="#E5372B"
              />
            </span>
          </CardContent>

          <CardContent className="server-node-status-container">
            <CardContent className={`server-users-status-icon`}>
              <MdOutlinePeopleAlt color="#fff" size={28} />
            </CardContent>
          </CardContent>
        </CardContent>

        <CardTitle className="server-node-labels">
          <p className="server-node-labels-heading">{name}</p>
          <p className="server-node-labels-text"></p>
        </CardTitle>

        <CustomHandle type="source" position={Position.Right} />

        {isHovered && (
          <div className="popover">
            <NodePopoverUsers
              name={name}
              ipAddress={ipAdress}
              status={status}
            />
          </div>
        )}
      </Card>
    </div>
  );
}
