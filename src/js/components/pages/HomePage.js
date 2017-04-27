module.exports = class extends React.Component {
	render = () => {
		return (
			<div>
				<div className="app-container container">
					<p>Please login</p>
					<FormInline>
						<Button onClick={() => FireAuth.googleLogin()}>
							Google
						</Button>
					</FormInline>
				</div>
			</div>
		);
	}
};
