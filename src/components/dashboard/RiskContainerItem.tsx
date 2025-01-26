import { Card } from "@/components/ui/card";

interface Props {
  icon: any;
  value: number;
  status: string;
}

const RiskContainerItem = ({ icon: Icon, value, status }: Props) => {
  return (
    <>
      {status == "critical" ? (
        <Card className="risk-items-server">
          <span>
            <Icon color="#C6190D" size={16} />
          </span>
          <span className="risk-items-server-value">{value}</span>
          <span className="risk-items-server-status">Critical</span>
        </Card>
      ) : status == "high" ? (
        <Card className="risk-items-server">
          <span>
            <Icon color="#E5372B" size={16} />
          </span>
          <span className="risk-items-server-value">{value}</span>
          <span className="risk-items-server-status">High</span>
        </Card>
      ) : status == "medium" ? (
        <Card className="risk-items-server">
          <span>
            <Icon color="#08B94E" size={16} />
          </span>
          <span className="risk-items-server-value">{value}</span>
          <span className="risk-items-server-status">Medium</span>
        </Card>
      ) : status == "low" ? (
        <Card className="risk-items-server">
          <span>
            <Icon color="#6236CC" size={16} />
          </span>
          <span className="risk-items-server-value">{value}</span>
          <span className="risk-items-server-status">Low</span>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default RiskContainerItem;
