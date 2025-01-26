import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NodePopover } from "@/types/node.types";

const NodePopoverUsers = ({ name, ipAddress, status }: NodePopover) => {
  return (
    <Card className="node-popover-users">
      <CardContent className="node-popover-users-heading">
        {name}
      </CardContent>
      <CardContent className="node-popover-users-ips-container">
        <CardContent className="node-popover-users-ips-item">
          {ipAddress}
        </CardContent>
        <CardContent className="node-popover-users-ips-item">
          {ipAddress}
        </CardContent>
        <CardContent className="node-popover-users-ips-item">
          {ipAddress}
        </CardContent>
        <CardContent className="node-popover-users-ips-item">
          {ipAddress}
        </CardContent>
        <CardContent className="node-popover-users-ips-item">
          {ipAddress}
        </CardContent>
        <CardContent className="node-popover-users-ips-item">
          1.2.3.4
        </CardContent>
      </CardContent>
      <CardFooter className="node-popover-users-bottom-info">
        Status: {status}
      </CardFooter>
    </Card>
  );
};

export default NodePopoverUsers;
 