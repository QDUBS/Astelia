import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { LuServer } from "react-icons/lu";
import { NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomeHandle";
import { useState } from "react";
import NodePopoverServerInfo from "./NodePopoverServerInfo";

export default function ServerInfo({
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

  let statusClass = "";

  if (status === "severe") {
    statusClass = "severe";
  } else if (status === "high") {
    statusClass = "down";
  } else if (status === "low") {
    statusClass = "ok";
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Card className="server-state-node">
        <CardContent className="server-node-container">
          <CardContent className="server-node-flex">
            <span className="server-node-icon">
              <LuServer color="#1873DE" size={40} />
            </span>
          </CardContent>
        </CardContent>

        <CardTitle className="server-node-labels">
          <p className="server-node-labels-heading">{name}</p>
        </CardTitle>

        <CustomHandle type="source" position={Position.Right} />
        <CustomHandle type="target" position={Position.Left} />
      </Card>

      {isHovered && (
        <div className="popover">
          <NodePopoverServerInfo name={name} ipAddress={ipAdress} status={status} />
        </div>
      )}
    </div>
  );
}
