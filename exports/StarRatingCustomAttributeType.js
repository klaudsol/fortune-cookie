import AttributeType from '@/components/attribute_types/AttributeType';
import { BiStar } from "react-icons/bi";

const StarRatingReadOnlyComponent = ({rating}) => {
    return (
        <>
          {Array.from({length: 5}).map(() => (
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