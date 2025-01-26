import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { NodePopover } from "@/types/node.types";
import Image from "next/image";
import { LuServer } from "react-icons/lu";

const NodePopoverServerInfo = ({ name, ipAddress, status }: NodePopover) => {
  return (
    <Card className="node-popover-info">
      <CardContent className="node-popover-state-heading">
        <CardContent className="node-popover-container">
          <CardContent className="node-popover-flex">
            <span className="node-popover-icon">
              <LuServer color="#1873DE" size={40} />
            </span>
          </CardContent>
        </CardContent>
        <CardTitle className="node-popover-text-container">
          <p className="node-popover-state-title">{name}</p>
        </CardTitle>
      </CardContent>

      <CardContent className="node-popover-state-ips-container">
        <Image
          src="/images/receipt.png"
          alt="mask"
          width={25}
          height={25}
          color="#858D9D"
        />
        <p className="node-popover-state-ips-item">
          Lorem: Loremipsum Loremipsum
        </p>
        <p className="node-popover-state-bottom-info">
          IP Address: {ipAddress}
        </p>
      </CardContent>

      <CardFooter className="node-popover-state-ips-container">
        <p className="node-popover-state-bottom-info-2">{ipAddress}</p>
        <p className="node-popover-state-ips-item">Status: {status}</p>
        <p className="node-popover-state-bottom-info-3">{ipAddress}</p>
        <p className="node-popover-state-bottom-info-3">{ipAddress}</p>
      </CardFooter>
    </Card>
  );
};

export default NodePopoverServerInfo;
