var Listitem = Component({
	displayName: 'ListItem',
	getDefaultProps: function () {
		return {
			onPress: null,
			text: null,
			delay: 0,
			animationProps: {
				animation: 'basicListEntrance',
				duration: 250,
				easing: 'ease-out-quart',
			},
			underlayColor: colour.inputBackground,
		};
	}, render: function () {
		content = (
			<Row>
				{this.props.icon}
				<View
					style={[this.props.disabled && Styles.listItemDisabled, Styles.liContent, {backgroundColor: 'transparent'}]}>
					{this.props.children}
				</View>
			</Row>
		);
		const animationProps = Object.assign(this.props.animationProps, {
			delay: this.props.delay + 10 + ((Number(this.props.index || 0)) * 20),
		})
		return (
			this.props.onPress ?
				<Animatable.View
					style={this.props.style || Styles.listItem}
					{...this.props.animationProps}
				>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={this.props.disabled ? null : this.props.onPress}>
						{content}
					</TouchableOpacity>
				</Animatable.View>
				: <Animatable.View
					{...this.props.animationProps}
					style={[this.props.style || Styles.listItem]}>{content}</Animatable.View>
		);
	}
});
module.exports = Listitem;
