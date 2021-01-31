const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contact: {
				full_name: "",
				email: "",
				agenda_slug: "manugarcal",
				address: "",
				phone: ""
			},
			agenda: []
		},
		actions: {
			getAgenda: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/manugarcal")
					.then(resp => resp.json())
					.then(data => {
						setStore({
							agenda: data
						});
					})
					.catch(error => console.log(error));
			},
			saveData: (fullName, email, phone, address) => {
				let contact = {
					full_name: fullName,
					email: email,
					agenda_slug: "manugarcal",
					address: address,
					phone: phone
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(contact)
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						getActions().getAgenda();
					})
					.catch(error => console.error(error));
			},
			editData: (fullName, email, phone, address, id) => {
				let contact = {
					full_name: fullName,
					email: email,
					agenda_slug: "manugarcal",
					address: address,
					phone: phone
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(contact)
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						getActions().getAgenda();
					})
					.catch(error => console.error(error));
			},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"content-type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						getActions().getAgenda();
					})
					.catch(error => console.error(error));
				console.log(id);
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
