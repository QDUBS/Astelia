import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { BsShieldCheck, BsShieldX } from "react-icons/bs";
import { LuServer } from "react-icons/lu";
import { NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomeHandle";
import NodePopoverServerState from "./NodePopoverServerState";

export default function ServerState({
  data: { name, ipAdress, status },
}: NodeProps<{ name: string; ipAdress: string; status: string }>) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  let statusClass = "";

  if (status === "critical") {
    statusClass = "severe";
  } else if (status === "high") {
    statusClass = "down";
  } else if (status === "low") {
    statusClass = "ok";
  }

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
      <Card className="server-state-node2">
        <CardContent className="server-node-container">
          <CardContent className="server-node-flex">
            <span className="server-node-icon">
              <LuServer color="#1873DE" size={40} />
            </span>
          </CardContent>

          <CardContent className="server-node-status-container">
            <CardContent className={`server-node-status-icon ${statusClass}`}>
              {statusClass == "low" ? (
                <BsShieldCheck color="#fff" size={30} />
              ) : (
                <BsShieldX color="#fff" size={30} />
              )}
            </CardContent>
          </CardContent>
        </CardContent>

        <CardTitle className="server-node-labels">
          <p className="server-node-labels-heading">{name}</p>
          <p className="server-node-labels-text">{ipAdress}</p>
        </CardTitle>

        <CustomHandle type="source" position={Position.Right} />
        <CustomHandle type="target" position={Position.Left} />
      </Card>

      {isHovered && (
        <div className="popover">
          <NodePopoverServerState
            name={name}
            ipAddress={ipAdress}
            status={status}
          />
        </div>
      )}
    </div>
  );
}
