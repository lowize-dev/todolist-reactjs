import PropTypes from "prop-types";

export default function InputField(props) {
   const { itemValue, setItemValue, addEventListener } = props;
   
   return (
      <header className="input-field">
         <input
               type="text"
               placeholder="Enter todo here..."
               value={itemValue}
               onChange={(e) => setItemValue(e.target.value)}
               onKeyDown={(e) => {
                  if (e.key === "Enter") {
                     addEventListener(itemValue.trim());
                     setItemValue("");
                  }
               }}
         />
         <button
               type="button"
               onClick={(e) => {
                  addEventListener(itemValue.trim());
                  setItemValue("");
               }}
         >ADD</button>
      </header>
   );
}

InputField.propTypes = {
   itemValue: PropTypes.any,
   setItemValue: PropTypes.func,
   addEventListener: PropTypes.func,
}