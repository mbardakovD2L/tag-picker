import '@brightspace-ui/core/components/icons/icon.js';
import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/dropdown/dropdown-menu.js';
import '@brightspace-ui/core/components/inputs/input-styles.js';
import '@brightspace-ui/core/components/inputs/input-select-styles.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
// import { sharedStyle } from 'somewhere/sharedStyles.js';
// import { classMap } from 'lit-html/directives/class-map.js';

class SkillsLandingPage extends LitElement {

	static get properties() {
		return {
			prop1: {
				type: String
			},
		};
	}

	static get styles() {
		return css`
		:host {}
		`; // return an array if you want shared styles as well as your own
		// e.g. return [sharedStyles, css`host:blah`]
	}

	constructor() {
		super();
		this.prop1 = '';
	}

	render() {
		return html`
		<div>
			<h2>Hello World</h2>
		</div>
		`;
	}

	// observers: [
	// 	'_onValuesChanged(values.splices)'
	// ],

	// listeners: {
	// 	'tap': '_handleTap'
	// },

	ready() {
		console.log('initialized skills-landing-page with ', this.prop1);
	}

	updated(changedProperties) {
		super.updated(changedProperties);

		console.log('something got updated: ', Array.from(changedProperties.keys()));
		// if (changedProperties.has('_activeValueIndex')) {
		// 	console.log('activeValueIndex changed from ', changedProperties.get('_activeValueIndex'), ' to ', this._activeValueIndex);
		// 	this._activeValueIndexChanged(this._activeValueIndex);
		// }
	}
}

customElements.define('skills-landing-page', SkillsLandingPage);
