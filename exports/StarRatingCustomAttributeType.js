import AttributeType from '@/components/attribute_types/AttributeType';
import { BiStar, BiSolidStar } from "react-icons/bi";

const StarRatingReadOnlyComponent = ({rating}) => {
    return (
        <>
          {Array.from({length: rating}).map(() => (
            <span style={{fontSize: "16px"}}>
              <BiSolidStar />
            </span>
          ))}
          {Array.from({length: 5 - rating}).map(() => (
            <span style={{fontSize: "16px"}}>
              <BiStar />
            </span>
          ))}
        </>
    );
}

export default class StarRatingCustomAttributeType extends AttributeType {

    toApi() {
      const data = this.data;
      return data;
    }

    readOnlyComponent(){
        return StarRatingReadOnlyComponent; 
    }

    props(){
      const rating = this.data === null ? this.data : parseInt(this.data);
      return {rating};
    }
}