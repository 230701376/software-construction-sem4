
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface PropertySearchProps {
  onSearch: (filters: any) => void;
}

const PropertySearch = ({ onSearch }: PropertySearchProps) => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("all");
  const [priceRange, setPriceRange] = useState([500000, 10000000]);
  const [bedrooms, setBedrooms] = useState("any");
  
  const handleSearch = () => {
    onSearch({
      location,
      type: type === "all" ? "" : type,
      priceRange,
      bedrooms: bedrooms === "any" ? undefined : parseInt(bedrooms),
    });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium text-estate-dark-gray">
            Location
          </label>
          <Input
            id="location"
            placeholder="City, neighborhood, or address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="property-type" className="text-sm font-medium text-estate-dark-gray">
            Property Type
          </label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger id="property-type">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="House">House</SelectItem>
              <SelectItem value="Villa">Villa</SelectItem>
              <SelectItem value="Plot">Plot</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="bedrooms" className="text-sm font-medium text-estate-dark-gray">
            Bedrooms
          </label>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger id="bedrooms">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 lg:col-span-1">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-estate-dark-gray">
              Price Range (₹)
            </label>
            <span className="text-sm text-estate-dark-gray">
              ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </span>
          </div>
          <Slider
            defaultValue={[500000, 10000000]}
            max={20000000}
            min={0}
            step={100000}
            value={priceRange}
            onValueChange={setPriceRange}
            className="py-2"
          />
        </div>
        
        <div>
          <Button 
            onClick={handleSearch} 
            className="w-full bg-estate-teal hover:bg-estate-navy"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
