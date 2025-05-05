
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Home, Building, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  propertyType: "Apartment" | "House" | "Villa" | "Plot";
  imageUrl: string;
  isFeatured?: boolean;
  rating?: number;
}

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  propertyType,
  imageUrl,
  isFeatured = false,
  rating,
}: PropertyCardProps) => {
  return (
    <Link to={`/properties/${id}`}>
      <Card className="property-card overflow-hidden h-full">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          {isFeatured && (
            <Badge className="absolute top-2 left-2 bg-estate-teal">
              Featured
            </Badge>
          )}
          {propertyType && (
            <Badge variant="outline" className="absolute top-2 right-2 bg-white">
              {propertyType}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1 text-estate-navy">{title}</h3>
            {rating && (
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                <span className="text-sm">{rating}</span>
              </div>
            )}
          </div>
          <p className="text-estate-dark-gray mb-2 flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{location}</span>
          </p>
          <p className="font-bold text-lg text-estate-navy">₹{price.toLocaleString()}</p>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-gray-50 border-t text-sm text-estate-dark-gray">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              {propertyType === "Apartment" || propertyType === "House" || propertyType === "Villa" ? (
                <>
                  <Home className="h-4 w-4 mr-1" />
                  <span>{bedrooms} Beds</span>
                </>
              ) : (
                <>
                  <Building className="h-4 w-4 mr-1" />
                  <span>Plot</span>
                </>
              )}
            </div>
            <div className="flex items-center">
              {propertyType === "Apartment" || propertyType === "House" || propertyType === "Villa" ? (
                <span>{bathrooms} Baths</span>
              ) : null}
            </div>
            <div className="flex items-center">
              <span>{area} sq.ft</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
