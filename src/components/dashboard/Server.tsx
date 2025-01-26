import { Card, CardContent } from "@/components/ui/card";
import { LuServer } from "react-icons/lu";

interface Props {
  name: string;
  text: string;
  text2: string;
  description: string;
}

const Server = ({ name, text, text2, description }: Props) => {
  return (
    <Card className="server-container">
      <p className="server-name">{name}</p>
      <CardContent className="server-flex-one">
        <CardContent className="server-flex-two">
          <span className="server-icon">
            <LuServer color="#6236CC" size={25} />
          </span>
          <CardContent className="server-text-container">
            <p className="server-text">{text}</p>
            <p className="server-text-2">{text2}</p>
          </CardContent>
        </CardContent>

        <CardContent className="server-description-container">
          <span className="server-description truncate2">
            {description.slice(0, 30)}
            {description.length > 30 && "..."}
          </span>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Server;
