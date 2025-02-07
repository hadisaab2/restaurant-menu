import { HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
 
export default function HelmetFn() {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split(".")[0];
    // Determine the restaurant name to use
    const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;
    const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
    console.log(restaurant)
    return (
<HelmetProvider>
            {/* Open Graph Meta Tags */}
<meta property="og:title" content={"sdsda"} />
<meta property="og:description" content={"sadsda"} />
<meta property="og:image" content={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`} />
<meta property="og:url" content={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`} />
</HelmetProvider>
    );
};
 
