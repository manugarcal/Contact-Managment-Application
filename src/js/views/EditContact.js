import React from "react";
import { Link } from "react-router-dom";
import { useContext, useRef, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const editContact = ({ match }) => {
	const { store, actions } = useContext(Context);

	const { id } = match.params;
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "manugarcal",
		address: "",
		phone: ""
	});
	useEffect(() => {
		let c = !!store.agenda && store.agenda.find(item => item.id === id);
		setContact(c);
	}, []);

	let fullNameRef = useRef(null);
	let emailRef = useRef(null);
	let phoneRef = useRef(null);
	let addressRef = useRef(null);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							ref={r => (fullNameRef = r)}
							defaultValue={contact.full_name}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							ref={r => (emailRef = r)}
							defaultValue={contact.email}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							ref={r => (phoneRef = r)}
							defaultValue={contact.phone}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							ref={r => (addressRef = r)}
							defaultValue={contact.address}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => {
							actions.editData(
								fullNameRef.value,
								emailRef.value,
								phoneRef.value,
								addressRef.value,
								contact.id
							);
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

editContact.propTypes = {
	match: PropTypes.object
};
