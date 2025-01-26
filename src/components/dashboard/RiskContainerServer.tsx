import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LuServer } from "react-icons/lu";

interface Props {
  name: string;
  text: string;
  risk: string;
}

const RiskContainerServer = ({ name, text, risk }: Props) => {
  return (
    <>
      {risk == "critical" ? (
        <Card className="risk-container-server rounded-none">
          <CardContent className="risk-container-server-flex-one">
            <CardContent className="risk-container-server-flex-two">
              <span className="risk-container-server-icon">
                <LuServer color="#6236CC" size={25} />
              </span>
              <CardContent className="risk-container-server-text-container">
                <p className="risk-container-server-text">{name}</p>
                <p className="risk-container-server-text-2">{text}</p>
              </CardContent>
            </CardContent>

            <CardContent className="risk-container-server-button-container">
              <button className="risk-container-button">
                {" "}
                <p className="risk-container-button-text severe-text">Critical</p>
              </button>
            </CardContent>
          </CardContent>
        </Card>
      ) : risk == "high" ? (
        <Card className="risk-container-server rounded-none">
          <CardContent className="risk-container-server-flex-one">
            <CardContent className="risk-container-server-flex-two">
              <span className="risk-container-server-icon">
                <LuServer color="#6236CC" size={25} />
              </span>
              <CardContent className="risk-container-server-text-container">
                <p className="risk-container-server-text">{name}</p>
                <p className="risk-container-server-text-2">{text}</p>
              </CardContent>
            </CardContent>

            <CardContent className="risk-container-server-button-container">
              <Button className="risk-container-button">
                <p className="risk-container-button-text down-text">Down</p>
              </Button>
            </CardContent>
          </CardContent>
        </Card>
      ) : (
        <Card></Card>
      )}
    </>
  );
};

export default RiskContainerServer;
