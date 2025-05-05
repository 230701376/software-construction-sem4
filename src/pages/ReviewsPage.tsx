
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ReviewCard from "@/components/review/ReviewCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Dummy data for reviews
const reviewsData = [
  {
    id: "review-1",
    userName: "Rahul Sharma",
    userImage: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    date: "24 Apr 2025",
    content: "Had an amazing experience buying my first home through HomeHub. The seller was very professional and the property was exactly as described in Adyar. Highly recommend!",
    propertyTitle: "Green Valley Apartments, Chennai"
  },
  {
    id: "review-2",
    userName: "Priya Mehta",
    userImage: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    date: "18 Apr 2025",
    content: "Great experience overall. The builder delivered on time and the quality of construction is excellent. The amenities at OMR are as promised.",
    propertyTitle: "Prestige Lakeside Habitat, Chennai"
  },
  {
    id: "review-3",
    userName: "Amit Patel",
    userImage: "https://i.pravatar.cc/150?img=12",
    rating: 3,
    date: "12 Apr 2025",
    content: "Decent property but had some issues with paperwork. The seller was helpful in resolving them though it took some time. Overall satisfied with the purchase in Velachery.",
    propertyTitle: "Urban Heights Tower B, Chennai"
  },
  {
    id: "review-4",
    userName: "Sneha Gupta",
    userImage: "https://i.pravatar.cc/150?img=23",
    rating: 5,
    date: "5 Apr 2025",
    content: "Exceptional service from start to finish. The seller was transparent about all details and helped make the process smooth. The property in ECR exceeded my expectations.",
    propertyTitle: "Royal Gardens Villa, Chennai"
  },
  {
    id: "review-5",
    userName: "Karan Singh",
    userImage: "https://i.pravatar.cc/150?img=15",
    rating: 4,
    date: "29 Mar 2025",
    content: "Good experience purchasing through HomeHub. The platform made it easy to verify the seller's credentials which gave me confidence in the deal for my T. Nagar apartment.",
    propertyTitle: "City View Apartments, Chennai"
  },
  {
    id: "review-6",
    userName: "Neha Kapoor",
    userImage: "https://i.pravatar.cc/150?img=9",
    rating: 2,
    date: "22 Mar 2025",
    content: "Disappointed with the property condition upon possession in Porur. Several amenities were not as described. The builder has promised to address the issues though.",
    propertyTitle: "Horizon Heights, Chennai"
  },
  {
    id: "review-7",
    userName: "Vikram Malhotra",
    userImage: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    date: "15 Mar 2025",
    content: "Could not be happier with my purchase in Anna Nagar! The seller was honest about all aspects of the property and the transaction was smooth. Highly recommended!",
    propertyTitle: "Maple Woods Residence, Chennai"
  },
  {
    id: "review-8",
    userName: "Ananya Reddy",
    userImage: "https://i.pravatar.cc/150?img=24",
    rating: 4,
    date: "8 Mar 2025",
    content: "Very good experience with the builder. They were receptive to feedback and made adjustments where needed. Happy with the final property in Adyar.",
    propertyTitle: "Green Acres Phase 2, Chennai"
  }
];

const ReviewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [filteredReviews, setFilteredReviews] = useState(reviewsData);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      filterReviewsByRating(activeTab);
      return;
    }
    
    const filtered = reviewsData.filter(review => 
      review.propertyTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (activeTab !== "all") {
      const rating = parseInt(activeTab);
      setFilteredReviews(filtered.filter(review => review.rating === rating));
    } else {
      setFilteredReviews(filtered);
    }
  };

  const filterReviewsByRating = (rating: string) => {
    if (rating === "all") {
      setFilteredReviews(reviewsData);
    } else {
      const ratingNum = parseInt(rating);
      setFilteredReviews(reviewsData.filter(review => review.rating === ratingNum));
    }
    setActiveTab(rating);
  };

  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-estate-navy mb-6">
          Customer Reviews
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Input
                placeholder="Search by property name, reviewer, or keywords"
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
              Search Reviews
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <Tabs defaultValue="all" value={activeTab} onValueChange={filterReviewsByRating}>
            <TabsList className="grid grid-cols-6 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="5">5 ★</TabsTrigger>
              <TabsTrigger value="4">4 ★</TabsTrigger>
              <TabsTrigger value="3">3 ★</TabsTrigger>
              <TabsTrigger value="2">2 ★</TabsTrigger>
              <TabsTrigger value="1">1 ★</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
        
        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500 mb-2">No reviews found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ReviewsPage;
