import PropTypes from "prop-types";

export default function ListField(props) {
   const { list, editEventListener, removeEventListener } = props;
   const capitalizeStringData = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
   }
   
   const renderList = list.map((data, index) => {
      return (
         <li key={index} className="list-item">
            <p>{capitalizeStringData(data)}</p>
            <div className="action-buttons">
               <button onClick={() => editEventListener(index)}>
                  <i className="fa-solid fa-pen-to-square"></i>
               </button>
               <button onClick={() => removeEventListener(index)}>
                  <i className="fa-solid fa-trash-can"></i>
               </button>
            </div>
         </li>
      )
   });

   return (
      <ul className={`list-field ${list.length === 0 ? "hide" : ""}`}>
         {renderList}
      </ul>
   );
}

ListField.propTypes = {
   list: PropTypes.array,
   editEventListener: PropTypes.func,
   removeEventListener: PropTypes.func,
}