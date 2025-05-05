
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Share2, Star, Home, Calendar, Check } from "lucide-react";
import ReviewCard from "@/components/review/ReviewCard";

// Dummy data for a single property
const propertyData = {
  id: "prop-1",
  title: "Luxury 3BHK Apartment with Bay View",
  description: "This stunning apartment offers panoramic bay views from every room. Located in a prime neighborhood of Adyar, it features high-end finishes, modern amenities, and a thoughtfully designed layout. The apartment includes a spacious living area, a modern kitchen with premium appliances, and three well-appointed bedrooms with en-suite bathrooms. Residents enjoy access to a variety of building amenities, including a state-of-the-art fitness center, swimming pool, and 24-hour security.",
  price: 9500000,
  location: "Adyar, Chennai",
  fullAddress: "Sea View Heights, East Coast Road, Adyar, Chennai, Tamil Nadu 600041",
  bedrooms: 3,
  bathrooms: 2,
  area: 1750,
  propertyType: "Apartment",
  imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  additionalImages: [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1556912173-3bb406ef7e8d",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc"
  ],
  features: ["Modular Kitchen", "24x7 Security", "Power Backup", "Swimming Pool", "Gym", "Parking", "Garden", "CCTV Surveillance", "Children's Play Area", "Clubhouse"],
  builtYear: 2022,
  availableFrom: "Immediate",
  furnishing: "Semi-Furnished",
  facing: "East",
  floorNo: 12,
  totalFloors: 20,
  postedDate: "April 15, 2025",
  seller: {
    name: "Rahul Mehta",
    type: "Owner",
    image: "https://i.pravatar.cc/150?img=10",
    phone: "+91 98765 43210",
    email: "rahul.mehta@example.com",
    isVerified: true,
    memberSince: "March 2021",
    listedProperties: 3
  },
  isFeatured: true,
  rating: 4.8,
  reviews: [
    {
      id: "review-1",
      userName: "Amit Sharma",
      userImage: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      date: "20 Apr 2025",
      content: "The property view is exactly as shown in the pictures. The seller was very cooperative throughout the buying process. Highly recommended!",
      propertyTitle: "Luxury 3BHK Apartment with Bay View"
    },
    {
      id: "review-2",
      userName: "Priya Singh",
      userImage: "https://i.pravatar.cc/150?img=5",
      rating: 4,
      date: "10 Apr 2025",
      content: "Good property with excellent amenities. The location is great with easy access to markets and transportation. The only downside was some delay in paperwork.",
      propertyTitle: "Luxury 3BHK Apartment with Bay View"
    }
  ]
};

const PropertyDetail = () => {
  const { id } = useParams();
  // In a real app, you would fetch property data based on the ID
  // For this demo, we'll use the dummy data
  const property = propertyData;
  
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-estate-navy mb-2">
            {property.title}
          </h1>
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center text-estate-dark-gray">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
            {property.isFeatured && (
              <Badge className="bg-estate-teal">Featured</Badge>
            )}
            {property.seller.isVerified && (
              <Badge variant="outline" className="border-estate-navy text-estate-navy">
                Verified Seller
              </Badge>
            )}
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-medium">{property.rating}</span>
            </div>
          </div>
        </div>

        {/* Property Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 rounded-lg overflow-hidden">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            {property.additionalImages.slice(0, 2).map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${property.title} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="p-6 bg-white rounded-b-lg shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-estate-navy mb-3">Description</h3>
                  <p className="text-gray-600">{property.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-estate-navy mb-3">Property Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Home className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Property Type</p>
                        <p className="font-medium">{property.propertyType}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Home className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Bedrooms</p>
                        <p className="font-medium">{property.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Home className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Bathrooms</p>
                        <p className="font-medium">{property.bathrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Home className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Area</p>
                        <p className="font-medium">{property.area} sq.ft</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Calendar className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Built Year</p>
                        <p className="font-medium">{property.builtYear}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Calendar className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Available From</p>
                        <p className="font-medium">{property.availableFrom}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Home className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Furnishing</p>
                        <p className="font-medium">{property.furnishing}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded">
                      <Home className="h-5 w-5 text-estate-teal mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Floor</p>
                        <p className="font-medium">{property.floorNo} of {property.totalFloors}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-estate-navy mb-3">Location</h3>
                  <p className="text-gray-600 mb-4">{property.fullAddress}</p>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Map view would be integrated here</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="p-6 bg-white rounded-b-lg shadow-sm">
                <h3 className="text-xl font-semibold text-estate-navy mb-4">Property Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-estate-teal mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="p-6 bg-white rounded-b-lg shadow-sm">
                <h3 className="text-xl font-semibold text-estate-navy mb-4">Property Reviews</h3>
                <div className="space-y-6">
                  {property.reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Price and Contact */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-estate-navy mb-2">Price</h3>
                <p className="text-3xl font-bold text-estate-navy">₹{property.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500">₹{Math.round(property.price / property.area).toLocaleString()} per sq.ft</p>
              </div>
              
              <Button className="w-full mb-3 bg-estate-teal hover:bg-estate-navy">
                Contact Seller
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-estate-navy mb-4">Seller Information</h3>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={property.seller.image} alt={property.seller.name} />
                  <AvatarFallback>{property.seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{property.seller.name}</p>
                  <p className="text-sm text-gray-500">{property.seller.type}</p>
                </div>
              </div>
              
              {property.seller.isVerified && (
                <div className="flex items-center mb-4 text-sm text-estate-navy bg-blue-50 p-2 rounded">
                  <Check className="h-4 w-4 mr-2 text-estate-teal" />
                  Verified Seller
                </div>
              )}
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-3 text-estate-dark-gray" />
                  <span>{property.seller.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-3 text-estate-dark-gray" />
                  <span>{property.seller.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-3 text-estate-dark-gray" />
                  <span>Member since {property.seller.memberSince}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Home className="h-4 w-4 mr-3 text-estate-dark-gray" />
                  <span>{property.seller.listedProperties} properties listed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-estate-navy mb-4">Posted on</h3>
              <p>{property.postedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;
