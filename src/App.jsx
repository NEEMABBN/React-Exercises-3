import { useState } from "react";
import "./App.css";
import ResultBox from "./ResultBox";
import InputBox from "./InputBox";

let lastId = 0;
const newId = () => {
  return lastId++;
};

function App() {
  const [toDos, setToDos] = useState([]);

  function addTodoItem(item) {
    setToDos((prev) => [
      ...prev,
      {
        id: newId(),
        title: item,
        isDone: false,
      },
    ]);
  }

  function toggleItem(id) {
    setToDos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      });
    });
  }

  function editItem(selectItem, newEditValue) {
    setToDos((prev) => {
      return prev.map((item) => {
        if (item.id === selectItem.id) {
          item.title = newEditValue;
        }
        return item;
      });
    });
  }

  function deleteItem(id) {
    setToDos((prev) => {
      return prev.filter((a) => a.id !== id);
    });
  }

  return (
    <>
      <div className="w-[35%] flex flex-col items-start bg-white rounded-[15px] p-5 shadow-[0_0_10px_8px_rgba(220,220,220,1)]">
        <h1 className="text-[25px] font-extrabold text-[#182C61]">TO DO APP</h1>
        <InputBox insertHandler={addTodoItem} />
        <div className="flex flex-col items-center w-full mt-8">
          {toDos.map((item) => {
            return (
              <ResultBox
                item={item}
                key={item}
                toggleHandler={toggleItem}
                deleteHandler={deleteItem}
                editHandler={editItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
