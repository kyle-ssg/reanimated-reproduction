import React, {Component, PropTypes} from 'react';
//requires froalla
// $.FroalaEditor.DefineIcon('insertVideo', {NAME: 'youtube-play'});
// $.FroalaEditor.DefineIcon('videoByURL', {NAME: 'youtube'});


const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {
			model: this.props.value
		};
	}

	render() {
		return (
			<FroalaEditor
				config={{
					toolbarSticky: false,
					editorClass: 'jsb-editor',
					charCounterCount: false,
					linkAlwaysBlank: true,
					quickInsertTags: null,
					toolbarButtons: [
						'undo', 'redo', '|',
						'bold', 'italic', 'underline', "|",
						'fontFamily', 'color', 'fontSize', '|',
						'align', '|',
						'formatOL', 'formatUL', 'quote', 'outdent', 'indent', '|',
						'insertLink', 'insertImage', 'insertVideo',
					],
					htmlAllowedTags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'queue', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'style', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'],
					imageInsertButtons: ['imageUpload', '|', 'imageByURL'],
					videoInsertButtons: ['videoBack', '|', 'videoByURL'],
					videoAllowedProviders: ['youtube', 'vimeo']
				}}
				model={this.state.model}
				onModelChange={this.props.onChange}

			/>
		);
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;
