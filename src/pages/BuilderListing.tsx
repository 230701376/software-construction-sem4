
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BuilderCard from "@/components/builder/BuilderCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Dummy data for builders
const buildersData = [
  {
    id: "builder-1",
    name: "Chennai Prestige Group",
    logo: "https://via.placeholder.com/150x150.png?text=Prestige",
    description: "Leading real estate developer with 35+ years of experience in premium residential and commercial projects across Chennai and Tamil Nadu.",
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
  },
  {
    id: "builder-3",
    name: "Chennai Builders",
    logo: "https://via.placeholder.com/150x150.png?text=Chennai",
    description: "Renowned for creating world-class residential colonies, shopping malls, and commercial properties across Chennai.",
    establishedYear: 1946,
    location: "Mylapore, Chennai, Tamil Nadu",
    projectCount: 370,
    rating: 4.5,
    isVerified: true,
  },
  {
    id: "builder-4",
    name: "Adyar Limited",
    logo: "https://via.placeholder.com/150x150.png?text=Adyar",
    description: "Known for superior quality and timely delivery of projects including apartments, villas, and row houses in south Chennai.",
    establishedYear: 1995,
    location: "Adyar, Chennai, Tamil Nadu",
    projectCount: 180,
    rating: 4.8,
    isVerified: true,
  },
  {
    id: "builder-5",
    name: "Marina Group",
    logo: "https://via.placeholder.com/150x150.png?text=Marina",
    description: "Premier real estate developer known for luxury developments and iconic landmarks in Chennai and beyond.",
    establishedYear: 1980,
    location: "Nungambakkam, Chennai, Tamil Nadu",
    projectCount: 290,
    rating: 4.4,
    isVerified: true,
  },
  {
    id: "builder-6",
    name: "ECR Group",
    logo: "https://via.placeholder.com/150x150.png?text=ECR",
    description: "Trusted brand in property development with projects spanning residential, commercial, and hospitality segments along East Coast Road.",
    establishedYear: 1986,
    location: "Besant Nagar, Chennai, Tamil Nadu",
    projectCount: 220,
    rating: 4.5,
    isVerified: true,
  }
];

const BuilderListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBuilders, setFilteredBuilders] = useState(buildersData);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredBuilders(buildersData);
      return;
    }
    
    const filtered = buildersData.filter(builder => 
      builder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      builder.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredBuilders(filtered);
  };

  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-estate-navy mb-6">
          Explore Top Builders
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Input
                placeholder="Search by builder name or location"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="h-12"
              />
            </div>
            <Button 
              onClick={handleSearch} 
              className="bg-estate-teal hover:bg-estate-navy h-12"
            >
              <Search className="mr-2 h-4 w-4" />
              Search Builders
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBuilders.map((builder) => (
            <BuilderCard key={builder.id} {...builder} />
          ))}
        </div>
        
        {filteredBuilders.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500 mb-2">No builders found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BuilderListing;
