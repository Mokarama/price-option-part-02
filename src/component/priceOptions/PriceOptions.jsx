import PriceOption from "../priceOption/PriceOption";
import Features from "../features/Features";

const PriceOptions = () => {
 const priceOptions=   [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Water refill station access",
            "Open gym access (6 AM - 10 PM)",
            "Cardio & weight training area"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Water refill station access",
            "Extended gym access (5 AM - 11 PM)",
            "Cardio & weight training area",
            "Group fitness classes (Yoga, Zumba, HIIT)",
            "One free personal training session per month",
            "Access to stretching & core workout zone"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 79.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Water refill station access",
            "24/7 gym access",
            "Cardio & weight training area",
            "Unlimited group fitness classes",
            "Monthly body assessment & fitness consultation",
            "Sauna & steam room access",
            "Advanced stretching & recovery zone",
            "Discount on gym merchandise (10%)",
            "Free protein shake once a week"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 99.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Water refill station access",
            "24/7 gym access",
            "Cardio & weight training area",
            "Unlimited group fitness classes",
            "Weekly personal training session",
            "Monthly body assessment & fitness consultation",
            "Sauna & steam room access",
            "Advanced stretching & recovery zone",
            "Discount on gym merchandise (20%)",
            "Complimentary protein shake per visit",
            "Priority booking for classes & training",
            "Private locker with digital security",
            "Free towel service",
            "Access to exclusive VIP lounge"
          ]
        }
      ]
      
    return (
        <div className=" m-16 ">
            <h2 className="text-3xl font-bold text-center">Best prices</h2>
           <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-10  ">
           {
             priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }

           </div>

        </div>
    );
};

export default PriceOptions;
