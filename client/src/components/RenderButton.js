import { Button } from 'reactstrap';
import React, { useContext } from 'react';
import { RenderContext } from '../contexts/RenderContext';

const RenderButton = (props) => {
	const { renderState, dispatch } = useContext(RenderContext);
	const question = renderState.questionMap.get(renderState.currentQuestionId);

	const handleClick = (id) => {
		dispatch({ type: 'AnswerQuestion', update: { answer: id, nextPage: props.nextPage } });
	}

	const button = (answer) => {
		return <div key={answer.id}><button style={{marginTop: '36px'}} className="blue-button" key={answer.id} color="primary" onClick={() => { handleClick(answer.id) }}>{answer.text}</button></div>
	}

	return (
			<div>
				<div>
					<b className="title">{question.title}</b>
				</div>
				<span>
					{question.answers.map(answer => {
						return button(answer);
					})}
				</span>
			</div>
		);
}

export default RenderButton;
