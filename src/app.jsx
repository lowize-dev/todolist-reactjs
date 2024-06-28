import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import ListField from "./components/ListField";
import DetailsField from "./components/DetailsField";

import "./css/app.css";

export default function App() {
   
   const DB_KEY = "LOCAL_DB_KEY"
   const [items, setItem] = useState([]);
   const [itemValue, setItemValue] = useState("");

   useEffect(() => {
      if (!localStorage) return;
      let local_db = localStorage.getItem(DB_KEY);
      if (!local_db) return;
      local_db = JSON.parse(local_db).items;
      setItem(local_db);
   }, []);

   const preserveDatabase = (data) => {
      localStorage.setItem(DB_KEY, JSON.stringify({ items: data }));
   }

   const POST_ITEM = (newItem) => {
      if (newItem !== "") {
         const list_data = [newItem, ...items];         
         setItem(list_data);
         preserveDatabase(list_data);
      }
   }

   const PATCH_ITEM = (index) => {
      const itemIndex = items[index];
      setItemValue(itemIndex);
      DELETE_ITEM(index);
   }

   const DELETE_ITEM = (index) => {
      const list_data = items.filter((_, itemIndex) => {
         return itemIndex !== index;
      });      
      setItem(list_data);
      preserveDatabase(list_data);
   }

   const DELETE_LIST = () => {
      setItem([]);
      localStorage.clear();
   }

   return (
      <main className="container">
         <InputField 
                  itemValue={itemValue}
                  setItemValue={setItemValue}
                  addEventListener={POST_ITEM}
         />
         <ListField
                  list={items}
                  editEventListener={PATCH_ITEM}
                  removeEventListener={DELETE_ITEM}
         />
         <DetailsField
                  list={items}
                  deleteListEventListener={DELETE_LIST}
         />
      </main>
   );
}