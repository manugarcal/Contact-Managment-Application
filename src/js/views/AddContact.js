import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { actions } = useContext(Context);

	let fullNameRef = useRef(null);
	let emailRef = useRef(null);
	let phoneRef = useRef(null);
	let addressRef = useRef(null);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							ref={r => (fullNameRef = r)}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							ref={r => (emailRef = r)}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							ref={r => (phoneRef = r)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							ref={r => (addressRef = r)}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => {
							actions.saveData(fullNameRef.value, emailRef.value, phoneRef.value, addressRef.value);
							fullNameRef.value = "";
							emailRef.value = "";
							phoneRef.value = "";
							addressRef.value = "";
						}}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
