import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Forms.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
	const [state, handleSubmit] = useForm("xqkwqkvw");
	if (state.succeeded) {
		return <p>Thanks for sending us a message!</p>;
	}

	return (
		<form className="w-100" onSubmit={handleSubmit}>
			<label className="m-2" htmlFor="email">Email Address</label>
			<input id="email" type="email" name="email" />
      <br />

      <br />
			<ValidationError prefix="Email" field="email" errors={state.errors} />
			<textarea className="m-4 col-8 " id="message" name="message" />
      <br />
      <br />
			<ValidationError prefix="Message" field="message" errors={state.errors} />
			<button type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
}

export default Form;
