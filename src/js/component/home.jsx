import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [todo, setTodo] = useState("")
	const [items, setItems] = useState([]);




	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			addItem();
		}
	};

	const addItem = () => {
		if (todo.trim() !== '') {
			setItems([...items, todo]);
			setTodo('');
		}
	};

	const removeItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setItems(updatedItems);
	};

	return (
		<div className="container text-center" style={{ width: "500px" }}>
			<div className="text-center ">
				<div className="input-group flex-nowrap mt-5 ">
					<span className="input-group-text bg-primary text-light" id="addon-wrapping">Todo List</span>
					<input type="text" className="form-control" placeholder="Añadir tareas" aria-label="Username" value={todo} onKeyPress={handleKeyPress}
						aria-describedby="addon-wrapping" onChange={(e) => {

							setTodo(e.target.value);
						}} />

				</div>

				<div className="row shadow-lg py-2 mx-1" >
					<div className="col">
						{items.map((item, index) => (
							<p className={`d-flex justify-content-between px-3 border-bottom mt-2  esc`} key={index}>{item}
								<button type="button" className={`btn btn-primary px-2 py-1 mb-2 `} onClick={() => removeItem(index)}><i class="fa-solid fa-x"></i></button>

							</p>

						))}
					</div>
					<span className="d-flex justify-content-start fs-6 px-3 text-secondary py-0">{items.length} Tareas restantes</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
