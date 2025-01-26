import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { NodePopover } from "@/types/node.types";
import Image from "next/image";
import { BsShieldCheck } from "react-icons/bs";
import { LuServer } from "react-icons/lu";



const NodePopoverServerState = ({ name, ipAddress, status }: NodePopover) => {
  return (
    <Card className="node-popover-state">
      <CardContent className="node-popover-state-heading">
        <CardContent className="node-popover-container">
          <CardContent className="node-popover-flex">
            <span className="node-popover-icon">
              <LuServer color="#1873DE" size={40} />
            </span>
          </CardContent>

          <CardContent className="node-popover-state-status-container">
            <CardContent className={`node-popover-state-status-icon`}>
              <BsShieldCheck color="#fff" size={25} />
            </CardContent>
          </CardContent>
        </CardContent>
        <CardTitle className="node-popover-text-container">
          <p className="node-popover-state-title">{name}</p>
          <p className="node-popover-state-description">{ipAddress}</p>
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
        <p className="node-popover-state-ips-item">IP Address:</p>
        <p className="node-popover-state-ips-item-highlighted">{ipAddress}</p>
      </CardContent>

      <CardFooter className="node-popover-state-bottom-flex">
        <p className="node-popover-state-ips-item">Status</p>
        <p className="node-popover-state-bottom-info">{status}</p>
      </CardFooter>
    </Card>
  );
};

export default NodePopoverServerState;
