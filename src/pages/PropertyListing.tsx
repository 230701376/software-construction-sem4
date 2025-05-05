
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PropertyCard from "@/components/property/PropertyCard";
import PropertySearch from "@/components/property/PropertySearch";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

// Dummy data for properties
const propertiesData = [
  {
    id: "prop-1",
    title: "Luxury 3BHK Apartment with Bay View",
    price: 9500000,
    location: "Adyar, Chennai",
    bedrooms: 3,
    bathrooms: 2,
    area: 1750,
    propertyType: "Apartment" as const,
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    isFeatured: true,
    rating: 4.8
  },
  {
    id: "prop-2",
    title: "Modern 2BHK Near IT Park",
    price: 6800000,
    location: "OMR, Chennai",
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    propertyType: "Apartment" as const,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    isFeatured: true,
    rating: 4.5
  },
  {
    id: "prop-3",
    title: "Spacious 4BHK Villa with Garden",
    price: 15000000,
    location: "ECR, Chennai",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    propertyType: "Villa" as const,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    isFeatured: true,
    rating: 4.9
  },
  {
    id: "prop-4",
    title: "Budget 1BHK for Bachelors",
    price: 3500000,
    location: "Velachery, Chennai",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    propertyType: "Apartment" as const,
    imageUrl: "https://images.unsplash.com/photo-1569152811536-fb47aced4d13",
    isFeatured: false,
    rating: 4.0
  },
  {
    id: "prop-5",
    title: "Commercial Space in Business District",
    price: 25000000,
    location: "Anna Salai, Chennai",
    bedrooms: 0,
    bathrooms: 2,
    area: 3500,
    propertyType: "Plot" as const,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    isFeatured: false,
    rating: 4.6
  },
  {
    id: "prop-6",
    title: "Residential Plot in Gated Community",
    price: 8000000,
    location: "Porur, Chennai",
    bedrooms: 0,
    bathrooms: 0,
    area: 2400,
    propertyType: "Plot" as const,
    imageUrl: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
    isFeatured: false,
    rating: 4.3
  }
];

const PropertyListing = () => {
  const [searchFilters, setSearchFilters] = useState({});
  const [viewMode, setViewMode] = useState("grid");
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  
  const handleSearch = (filters: any) => {
    console.log("Search filters:", filters);
    setSearchFilters(filters);
    // In a real app, you would filter the properties based on these filters
    // For now, we'll just log the filters and use the dummy data
  };

  const amenities = [
    "Gym", "Swimming Pool", "Security", "Parking",
    "Garden", "Clubhouse", "Power Backup", "Children's Play Area"
  ];
  
  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-estate-navy mb-6">
          Find Your Perfect Property
        </h1>
        
        <div className="mb-8">
          <PropertySearch onSearch={handleSearch} />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-estate-navy mb-4">Property Type</h3>
              <div className="space-y-2">
                {["Apartment", "House", "Villa", "Plot"].map((type) => (
                  <div key={type} className="flex items-center">
                    <Checkbox id={`type-${type}`} />
                    <label 
                      htmlFor={`type-${type}`} 
                      className="ml-2 text-sm text-gray-600"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-estate-navy mb-4">Amenities</h3>
              <div className="space-y-2">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <Checkbox id={`amenity-${amenity}`} />
                    <label 
                      htmlFor={`amenity-${amenity}`} 
                      className="ml-2 text-sm text-gray-600"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-estate-navy mb-4">Verified Sellers Only</h3>
              <div className="flex items-center">
                <Checkbox id="verified-only" />
                <label 
                  htmlFor="verified-only" 
                  className="ml-2 text-sm text-gray-600"
                >
                  Show only verified sellers
                </label>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-estate-dark-gray">
                    <span className="font-medium">{filteredProperties.length}</span> properties found
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-estate-dark-gray">View:</span>
                  <Tabs value={viewMode} onValueChange={setViewMode} className="w-auto">
                    <TabsList className="h-9">
                      <TabsTrigger value="grid" className="px-3">Grid</TabsTrigger>
                      <TabsTrigger value="list" className="px-3">List</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </div>
            
            <TabsContent value="grid" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="m-0">
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3">
                        <img 
                          src={property.imageUrl} 
                          alt={property.title} 
                          className="h-56 md:h-full w-full object-cover"
                        />
                      </div>
                      <div className="w-full md:w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-lg text-estate-navy">
                            {property.title}
                          </h3>
                          <p className="font-bold text-lg text-estate-navy">
                            ₹{property.price.toLocaleString()}
                          </p>
                        </div>
                        <p className="text-estate-dark-gray text-sm mb-4">
                          {property.location}
                        </p>
                        <div className="flex gap-4 text-sm text-estate-dark-gray mb-4">
                          <span>{property.bedrooms} Beds</span>
                          <span>{property.bathrooms} Baths</span>
                          <span>{property.area} sq.ft</span>
                        </div>
                        <Button className="bg-estate-teal hover:bg-estate-navy">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyListing;
