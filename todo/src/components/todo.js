import React, { useState } from "react";
import "../App.css";
import moment from "moment";

const Todo = () => {
  const [strike, setStrike] = useState(true);
  const [adddte, setAdddte] = useState(moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss ").toString());
  const [store, setStore] = useState([]);

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //to add an item

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
      setAdddte(moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss ").toString());
      setStore([...store, adddte]);
    }
  };

  // to delete an item

  const deleteItem = (id) => {
  
    const updatedTime = store.filter((el,ind) => {
        return ind !== id;
    });
    setStrike(false);

  

   //setItems(updatedItems);
    setStore(updatedTime);
  };

  // to remove all items

  const removeAll = () => {
    setItems([]);
    setStore([]);
  };

  return (
    <>
      <div className="parent-div">
        <div className="child-div">
          <h3>TO DO LIST</h3>
          <div className="addItems">
            <input
              type="text"
              placeholder="what needs to be done?"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button
              type="button"
              onClick={addItem}
              className="btn btn-secondary"
            >
              Create
            </button>
          </div>
          <div id="wrapper">

          <div id="left" className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3 style = {{textDecoration: strike ? "none" : "line-through"}}>{elem}</h3>
                  <button
                    type="button"
                    onClick={() => deleteItem(ind)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  
                  
               </div>
              );
            })}
            
          </div>
          <div id = "right">
            {store.map((el, ind) => {
                return (
                    <div className="eachdate" key={ind}>  
                    <h6>{"Task Created at:" + el} </h6>


                    </div>  
                );

            }
            )}
            </div>
          </div>
          <div className="showItems">
            <button onClick={removeAll} className="btn btn-danger">
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
