
// import PropTypes from "prop-types";

import PropTypes from "prop-types";
import { AiFillCheckSquare } from "react-icons/ai";
const Features = ({feature}) => {
  
    return (
        <div className="">
            <h3 className="flex items-center align-middle"><AiFillCheckSquare className="text-2xl  mr-3 rounded-b-full"></AiFillCheckSquare>{feature}</h3>
           
        </div>
         
    );
};

Features.propTypes={
    feature:PropTypes.string
}
export default Features;