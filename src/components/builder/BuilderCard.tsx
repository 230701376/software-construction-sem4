
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Star } from "lucide-react";

interface BuilderCardProps {
  id: string;
  name: string;
  logo: string;
  description: string;
  establishedYear: number;
  location: string;
  projectCount: number;
  rating: number;
  isVerified: boolean;
}

const BuilderCard = ({
  id,
  name,
  logo,
  description,
  establishedYear,
  location,
  projectCount,
  rating,
  isVerified,
}: BuilderCardProps) => {
  return (
    <Link to={`/builders/${id}`}>
      <Card className="property-card h-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold text-lg text-estate-navy">{name}</h3>
                  {isVerified && (
                    <Badge className="ml-2 bg-estate-teal">Verified</Badge>
                  )}
                </div>
                <p className="text-sm text-estate-dark-gray flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {location}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between text-sm text-estate-dark-gray">
            <div className="flex items-center">
              <Building className="h-4 w-4 mr-1" />
              <span>{projectCount} Projects</span>
            </div>
            <div>
              <span>Est. {establishedYear}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BuilderCard;
