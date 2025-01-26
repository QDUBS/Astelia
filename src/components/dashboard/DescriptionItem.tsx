import { Card, CardContent } from "@/components/ui/card";

interface Props {
  heading: string;
  icon: any;
  iconColor: string;
  isIcon: boolean;
  text: string;
}

const DescriptionItem = ({
  heading,
  icon: Icon,
  iconColor,
  isIcon,
  text,
}: Props) => {
  return (
    <Card className="description-container">
      <span className="description-item-heading">{heading}</span>
      <CardContent className="description-item-text-wrapper">
        {isIcon && (
          <span className="description-item-icon">
            <Icon color={iconColor} size="0.938rem" />
          </span>
        )}
        <span className="description-item-text">{text}</span>
      </CardContent>
    </Card>
  );
};

export default DescriptionItem;
