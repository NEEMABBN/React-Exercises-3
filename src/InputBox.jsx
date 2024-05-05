export default function InputBox({ insertHandler }) {
  function inputKeyHandler(event) {
    if (event.target.value !== "") {
      if (event.key === "Enter") {
        insertHandler(event.target.value);
        event.target.value = "";
      }
    }
  }

  return (
    <input
      type="text"
      placeholder="What needs to be done today?"
      className="w-full border border-[gainsboro] rounded-md py-[10px] pl-[25px] mt-4"
      onKeyDown={inputKeyHandler}
    />
  );
}
