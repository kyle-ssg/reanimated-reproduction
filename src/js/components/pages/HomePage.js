module.exports = class extends React.Component {
	render = () => {
		return (
			<div>
				<div className="app-container container">
					<p>Bullet Train is a thing that does stuff</p>
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
