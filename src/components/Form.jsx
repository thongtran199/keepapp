import React from "react";
const Form = ({ addNote }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  return (
    <form>
      <input
        onChange={(e) => {
          // console.log(e.target.value);
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Title"
        value={title}
      />
      <textarea
        onChange={(e) => {
          // console.log(e.target.value);
          setContent(e.target.value);
        }}
        placeholder="Take a note..."
        value={content}
      ></textarea>
      <button
        type="submit"
        onClick={(e) => {
          addNote({ title, content });
          e.preventDefault();
        }}
      >
        Add
      </button>
    </form>
  );
};
export default Form;
