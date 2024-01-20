import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [listItem, setitem] = useState([
    { id: 1, name: "Aarav Kapoor", image: "aarav_kapoor.jpg" },
    { id: 2, name: "Aditi Chatterjee", image: "aditi_chatterjee.jpg" },
    { id: 3, name: "Diya Gupta", image: "diya_gupta.jpg" },
    { id: 4, name: "Manav Joshi", image: "manav_joshi.jpg" },
    { id: 5, name: "Neha Khanna", image: "neha_khanna.jpg" },
    { id: 6, name: "Rohan Malhotra", image: "rohan_malhotra.jpg" },
    { id: 7, name: "Shreya Patel", image: "shreya_patel.jpg" },
    { id: 8, name: "Vishal Verma", image: "vishal_verma.jpg" },
    { id: 9, name: "Kavya Iyer", image: "kavya_iyer.jpg" },
    { id: 10, name: "Arjun Deshmukh", image: "arjun_deshmukh.jpg" },
  ]);

  const [listItemFiltered, setFiltereditem] = useState([listItem]);
  const [chipItem, setChipItem] = useState([]);

  const [inputFocus, setInputFocus] = useState(false);

  // const [toFilter, setFilter] = useState('');
  const [isFilteredState, SetFilteredState] = useState(false);
  // chipItems: [

  // ];

  const nameSelected = (selectedItem) => {
    //remove selected item from the list item and add in a constant
    const updatedChipItem = listItem.filter(
      (selected) => selected.id !== selectedItem.id
    );

    setitem(updatedChipItem); //update the list item by removing item
    setChipItem([...chipItem, selectedItem]); //add in in the chip
  };

  const removeChipItem = (selectedItem) => {
    //remove selected item from the list item and add in a constant
    const updatedChipItem = chipItem.filter(
      (selected) => selected.id !== selectedItem.id
    );

    setChipItem(updatedChipItem); //update the list item by removing item
    setitem([...listItem, selectedItem]); //add in in the chip
  };

  const onFocus = () => {
    setInputFocus(true);
  };

  const onBlur = () => {
    setInputFocus(false);
  };

  const handleFilter = (event) => {
    // const inputData = event.target.value.toLowerCase()
    // const filteredData=listItem.filter(item=>item.name.toLowerCase().includes(inputData))
    // console.log(filteredData)
    // setitem([...filteredData])

    const inputData = event.target.value.toLowerCase();
    const filteredData = listItem.filter((item) =>
      item.name.toLowerCase().includes(inputData)
    );

    setFiltereditem([...filteredData]);
    SetFilteredState(false);
    filteredData.length>0? SetFilteredState(true): SetFilteredState(false)
    // if (filteredData.length > 0) {
    //   SetFilteredState(true);
    // }

    console.log(isFilteredState)
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {chipItem.map((item) => (
          <div key={item.id} style={{ display: "flex" }}>
            <p> {item.name}</p>
            <button
              onClick={() => {
                removeChipItem(item);
              }}
            >
              X
            </button>
          </div>
        ))}
        <input
          type="text"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleFilter}
        ></input>
      </div>

      <div>
        {inputFocus && (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {/* loop array  */}
            {listItem.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  nameSelected(item);
                }}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </>
  );
}

export default App;
