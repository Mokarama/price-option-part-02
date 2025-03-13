import PropTypes from "prop-types";
import Features from "../features/Features";


const PriceOption = ({option}) => {
    const {name,price, features}=option;
 
    return (
        <div className="bg-amber-300 py-5 flex flex-col px-10 text-center rounded-lg">
            <h2>
                <span className="text-4xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            
            <h4 className="text-3xl">{name}</h4>
            <div className="flex-grow">
            {
              features.map((feature, index) =><Features key={index} feature={feature}></Features>)
            }
            </div>
            <button className="bg-green-600 w-full font-bold py-3">Click Me</button>
        </div>
    );
};

PriceOption.propTypes={
  option: PropTypes.object
}
export default PriceOption;