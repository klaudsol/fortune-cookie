import AttributeType from '@/components/attribute_types/AttributeType';
import { BsStar, BsStarFill } from "react-icons/bs";
import { useFormikContext, useField } from "formik";
import { useEffect } from "react";
import styles from '../css/StarRatingCustomAttributeType.module.scss';

const StarRatingReadOnlyComponent = ({rating}) => {
    return (
        <>
          {Array.from({length: (rating ?? 0)}).map(() => (
            <span className={styles.star_read_only}>
              <BsStarFill />
            </span>
          ))}
          {Array.from({length: 5 - (rating ?? 0)}).map(() => (
            <span className={styles.star_read_only}>
              <BsStar />
            </span>
          ))}
        </>
    );
}

const StarRatingEditableComponent = ({name, errors}) => {

  const { setFieldValue, setTouched, touched, values } = useFormikContext();
  const [{value}] = useField(name); 

  const onStarClicked = (evt, starValue) => {
    evt.preventDefault();
    setFieldValue(name, `${starValue}`);
    console.error(values);
  };

  const numericRating = value ? parseInt(value) : 0;
  console.error(numericRating);


  return (
      <>
        {Array.from({length: numericRating}, (item, index) => index + 1).map((starValue) => (
          <span key={starValue} className={styles.star_editable}>
            <BsStarFill onClick={(evt) => onStarClicked(evt, starValue)} />
          </span>
        ))}

        {Array.from({length: 5 - numericRating}, (item, index) => index + numericRating + 1).map((starValue) => (
          <span key={starValue} className={styles.star_editable}>
            <BsStar onClick={(evt) => onStarClicked(evt, starValue)} />
          </span>
        ))}
      </>
  );
};

export default class StarRatingCustomAttributeType extends AttributeType {

    toApi() {
      const data = this.data;
      return data;
    }

    readOnlyComponent(){
        return StarRatingReadOnlyComponent; 
    }

    editableComponent(){
        return StarRatingEditableComponent;
    }

    props(){
      const rating = (this.data === null || this.data === undefined) ? null : parseInt(this.data);
      return {rating};
    }
}