import { Card, CardContent } from "@/components/ui/card";

interface Props {
  name: string;
  icon: any;
  status: string;
}

const ServerStatus = ({ name, icon: Icon, status }: Props) => {
  return (
    <>
      {status == "critical" ? (
        <Card className="server-status-container">
          <CardContent className="server-status-icon severe">
            <Icon color="#fff" size={18} />
          </CardContent>
          <span className="server-status-name severe-text">{name}</span>
        </Card>
      ) : status == "high" ? (
        <Card className="server-status-container">
          <CardContent className="server-status-icon down">
            <Icon color="#fff" size={18} />
          </CardContent>{" "}
          <p className="server-status-name down-text">{name}</p>
        </Card>
      ) : (
        <Card className="server-status-container">
          <CardContent className="server-status-icon ok">
            <Icon color="#fff" size={18} />
          </CardContent>{" "}
          <p className="server-status-name ok-text">{name}</p>
        </Card>
      )}
    </>
  );
};

export default ServerStatus;
