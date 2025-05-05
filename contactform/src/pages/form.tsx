import "../css/form.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for submitting the form ${name}`);
    window.location.reload();
  };
  return (
    <>
      <div className="form-div">
        <h1>Contact Form</h1>
        <form className="form" onSubmit={onSubmitForm}>
          <label className="label">Name:</label>
          <br />
          <input
            className="input"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label className="label">Email:</label>
          <br />
          <input className="input" type="email" required />
          <br />
          <label className="label">Message:</label>
          <br />
          <textarea className="input" required></textarea>
          <br />
          <button className="btn" type="submit">
            Submit
          </button>
          <br />
        </form>
      </div>
      <br />
      <Link to="/guessnum">Play a guessing number game</Link>
    </>
  );
};

export default Form;
