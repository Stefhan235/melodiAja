import "./styles/modal.css"
import {useState} from "react";

const modalView = () => {
	const render = (status, {id, heading}, {Component}) => {
		return ( status.get == true? (
			<section id={`${id}Dialog`}>
				<div className="dialog__box">
					<div className="dialog__top">
						<h3 className="dialog__name"> {heading} </h3>
						<div
							onClick = {() => status.set(false)}
						>
							<div className="icon icon--tiny">
								<img src="/icons/close_x.png" alt="close icon" />
							</div>
						</div>
					</div>
					<div className="dialog__body">
						<Component />
					</div>
				</div>
				<div className="dialog__shade" > </div>
			</section>
			): <></>
		)
	}
	
	return {render};
}

export default function modal(modalID, modalName) {
	let view = modalView();
	let props = {
		id: modalID,
		heading: modalName,
	};

	const render = (content) => {
		const [isShowing, setShowing] = useState(true);
		return view.render({get: isShowing, set: setShowing}, props, content);
	}

	return {render};
}
