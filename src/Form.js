import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Forms.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
	const [state, handleSubmit] = useForm("xqkwqkvw");
	if (state.succeeded) {
		return <p className="paragraph">Thanks for sending us a message!</p>;
	}

	return (
		<form className="w-100" onSubmit={handleSubmit}>
			<label className="mr-3" htmlFor="email">Email: </label>
			<input className="textbox" id="email" type="email" name="email" />
      <br />
			<label className="mr-3" htmlFor="email">Name: </label>
			<input className="textbox" id="email" type="text" name="text" />
      <br />
			<label className="mr-3" htmlFor="email">Country: </label>
			<input className="textbox" id="email" type="text" name="text" />
      <br />
			<ValidationError prefix="Email" field="email" errors={state.errors} />
			<textarea className="m-4 col-10 " id="message" name="message" placeholder="Send us a message!"></textarea>
      <br />

			<ValidationError prefix="Message" field="message" errors={state.errors} />
			<button className="button w-25" type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
}

export default Form;
