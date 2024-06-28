import PropTypes from "prop-types";

export default function DetailsField(props) {
   const { list, deleteListEventListener } = props;
   return (
      <footer className={`details-field ${list.length === 0 ? "hide": ""}` }>
         <div className="counter">
            <p>TODOS</p>
            <div>{list.length}</div>
         </div>
         <button
               type="button"
               onClick={() => deleteListEventListener()}
         >DELETE</button>
      </footer>
   );
}

DetailsField.propTypes = {
   list: PropTypes.array,
   deleteListEventListener: PropTypes.func,
}
