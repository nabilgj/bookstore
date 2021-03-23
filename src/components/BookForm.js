import React, { useState } from "react";
import classes from "./AddBook.module.css";

const BookForm = (props) => {
  const [name, setName] = useState(props.book ? props.book.name : "");
  const [price, serPrice] = useState(props.book ? props.book.price : "");
  const [category, setCategory] = useState(
    props.book ? props.book.category : ""
  );
  const [description, setDescription] = useState(
    props.book ? props.book.description : ""
  );

  const bookAdded = (e) => {
    e.preventDefault();

    const enteredName = name;
    const enteredPrice = price;
    const enteredCategory = category;
    const enteredDescription = description;

    if (
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredPrice ||
      enteredPrice.trim() === "" ||
      !enteredCategory ||
      enteredCategory.trim() === "" ||
      !enteredDescription ||
      enteredDescription.trim() === ""
    ) {
      return;
    }

    const bookadded = {
      name: enteredName,
      price: enteredPrice,
      category: enteredCategory,
      description: enteredDescription,
    };

    props.onSubmit(bookadded);
  };

  return (
    <div className={classes.formData}>
      <h1>{props.book ? "Edit Book" : "Add a book"}</h1>
      <form onSubmit={bookAdded}>
        <input
          type="text"
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Book Price"
          value={price}
          onChange={(e) => serPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button>{props.book ? "Edit Book" : "Add a book"}</button>
      </form>
    </div>
  );
};

// into AddBook, EditBook
export default BookForm;
