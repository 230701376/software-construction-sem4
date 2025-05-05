
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ReviewCardProps {
  id: string;
  userName: string;
  userImage?: string;
  rating: number;
  date: string;
  content: string;
  propertyTitle?: string;
}

const ReviewCard = ({
  id,
  userName,
  userImage,
  rating,
  date,
  content,
  propertyTitle,
}: ReviewCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 pb-2 pt-4 px-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userImage} alt={userName} />
          <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <div className="flex items-center gap-2">
            <div className="flex">{renderStars()}</div>
            <p className="text-xs text-muted-foreground">• {date}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {propertyTitle && (
          <p className="text-xs text-muted-foreground mb-2">
            Review for: <span className="font-medium">{propertyTitle}</span>
          </p>
        )}
        <p className="text-sm text-gray-700">{content}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
