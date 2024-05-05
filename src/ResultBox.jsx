import { useState } from "react";

export default function ResultBox({
  item,
  toggleHandler,
  deleteHandler,
  editHandler,
}) {
  const [editMode, setEditMode] = useState(false);
  const editClickHandler = (e) => {
    if (e.key === "Enter") {
      editHandler(item, e.target.value);
      setEditMode(false);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between w-full py-[10px] border-b border-[#dcdcdc]">
      {editMode ? (
        <div className="w-full flex flex-row items-center">
          <input
            type="text"
            name=""
            id=""
            defaultValue={item.title}
            onKeyDown={editClickHandler}
            // editHandler={editHandler}
            className="w-full px-3 font-semibold text-lg text-[#ff5252] text-center"
          />
          <i
            className="fa-solid fa-xmark text-xl cursor-pointer text-red-600 ml-4"
            onClick={() => setEditMode(false)}
          ></i>
        </div>
      ) : (
        <div className="w-full flex flex-row items-center justify-between">
          <input
            type="checkbox"
            checked={item.isDone}
            className="cursor-pointer outline-none"
            onChange={() => {
              toggleHandler(item.id);
            }}
          />
          <span
            className={`text-[#182C61] font-semibold text-lg ${
              item.isDone ? "line-through" : ""
            }`}
          >
            {item.title}
          </span>
          <div className="flex flex-row items-center">
            <i
              className="fa-solid fa-pen-to-square text-xl mr-4 cursor-pointer text-blue-700"
              onClick={() => setEditMode(true)}
            ></i>
            <i
              className="fa-solid fa-xmark text-xl cursor-pointer text-red-600"
              onClick={() => {
                deleteHandler(item.id);
              }}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
}
