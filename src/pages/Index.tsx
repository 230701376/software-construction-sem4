import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PropertySearch from "@/components/property/PropertySearch";
import PropertyCard from "@/components/property/PropertyCard";
import BuilderCard from "@/components/builder/BuilderCard";
import ReviewCard from "@/components/review/ReviewCard";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

// Dummy data for the frontend
const featuredProperties = [
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
  }
];

const featuredBuilders = [
  {
    id: "builder-1",
    name: "Chennai Prestige Group",
    logo: "https://via.placeholder.com/150x150.png?text=Prestige",
    description: "Leading real estate developer with 35+ years of experience in premium residential and commercial projects across Chennai.",
    establishedYear: 1986,
    location: "Anna Nagar, Chennai, Tamil Nadu",
    projectCount: 250,
    rating: 4.7,
    isVerified: true,
  },
  {
    id: "builder-2",
    name: "Tamil Properties",
    logo: "https://via.placeholder.com/150x150.png?text=Tamil",
    description: "One of Tamil Nadu's most trusted builders with projects across Chennai delivering quality homes since decades.",
    establishedYear: 1990,
    location: "T. Nagar, Chennai, Tamil Nadu",
    projectCount: 320,
    rating: 4.6,
    isVerified: true,
  }
];

const latestReviews = [
  {
    id: "review-1",
    userName: "Rahul Sharma",
    userImage: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    date: "24 Apr 2025",
    content: "Had an amazing experience buying my first home through HomeHub. The seller was very professional and the property in Adyar was exactly as described. Highly recommend!",
    propertyTitle: "Green Valley Apartments, Chennai"
  },
  {
    id: "review-2",
    userName: "Priya Mehta",
    userImage: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    date: "18 Apr 2025",
    content: "Great experience overall. The builder delivered on time and the quality of construction in OMR is excellent. The amenities are as promised.",
    propertyTitle: "Prestige Lakeside Habitat, Chennai"
  }
];

const Index = () => {
  const [searchFilters, setSearchFilters] = useState({});
  
  const handleSearch = (filters: any) => {
    console.log("Search filters:", filters);
    setSearchFilters(filters);
    // In a real application, you would fetch data based on these filters
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-estate-navy to-blue-800 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Find Your Perfect Property with Verified Deals
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Connect directly with sellers and builders. Browse properties with authentic reviews.
          </p>
          <div className="max-w-5xl mx-auto bg-white rounded-lg p-2">
            <PropertySearch onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 bg-estate-light-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-estate-navy">
              Featured Properties
            </h2>
            <Link to="/properties">
              <Button variant="outline" className="text-estate-teal border-estate-teal hover:bg-estate-teal hover:text-white">
                View All <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-estate-navy text-center mb-12">
            How HomeHub Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-estate-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-estate-navy">Find Properties</h3>
              <p className="text-gray-600">
                Browse thousands of verified properties from trusted sellers and builders
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-estate-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-estate-navy">Check Reviews</h3>
              <p className="text-gray-600">
                Read authentic reviews from real customers before making any decisions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-estate-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-estate-navy">Connect & Deal</h3>
              <p className="text-gray-600">
                Connect directly with sellers or builders and finalize your perfect property
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Builders */}
      <section className="py-16 px-4 bg-estate-light-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-estate-navy">
              Featured Builders
            </h2>
            <Link to="/builders">
              <Button variant="outline" className="text-estate-teal border-estate-teal hover:bg-estate-teal hover:text-white">
                View All <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredBuilders.map((builder) => (
              <BuilderCard key={builder.id} {...builder} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-estate-navy">
              Recent Reviews
            </h2>
            <Link to="/reviews">
              <Button variant="outline" className="text-estate-teal border-estate-teal hover:bg-estate-teal hover:text-white">
                View All <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestReviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-estate-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied customers who found their perfect home on HomeHub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/properties">
              <Button className="bg-estate-teal hover:bg-white hover:text-estate-navy px-8 py-6 text-lg">
                Browse Properties
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="border-white hover:bg-white hover:text-estate-navy px-8 py-6 text-lg">
                Sign Up for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
