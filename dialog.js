// import '@brightspace-ui/core/components/icons/icon.js';
// import '@brightspace-ui/core/components/colors/colors.js';
// import '@brightspace-ui/core/components/dropdown/dropdown-button.js';
// import '@brightspace-ui/core/components/dropdown/dropdown-menu.js';
// import '@brightspace-ui/core/components/menu/menu.js';
// import '@brightspace-ui/core/components/menu/menu-item.js';
// import '@brightspace-ui/core/components/inputs/input-styles.js';
// import '@brightspace-ui/core/components/inputs/input-select-styles.js';
// import '@brightspace-ui/core/components/tabs/tabs.js';
// import '@brightspace-ui/core/components/tabs/tab-panel.js';
import '@brightspace-ui/core/components/button/button';
// import '@brightspace-ui/core/components/inputs/input-search.js';
import '@brightspace-ui/core/components/dialog/dialog.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
// import { sharedStyle } from 'somewhere/sharedStyles.js';
// import { classMap } from 'lit-html/directives/class-map.js';

class SkillsDialog extends LitElement {

	static get properties() {
		return {
			dialogDOM: {
				type: Object
			},
		};
	}

	static get styles() {
		return css`
		`; // return an array if you want shared styles as well as your own
		// e.g. return [sharedStyles, css`host:blah`]
	}

	constructor() {
		super();
		console.log('dialog box ctor');
	}

	render() {
		return html`
        <d2l-dialog id="dialog" title-text="Dialog Title">
            <div>Some dialog content</div>
            <d2l-button slot="footer" primary data-dialog-action="done">Done</d2l-button>
            <d2l-button slot="footer" data-dialog-action>Cancel</d2l-button>
        </d2l-dialog>
		`;
	}

	firstUpdated() {
		this.dialogDOM = this.shadowRoot.querySelector('#dialog');
		console.log('got dialog: ', this.dialogDOM);
	}

	open() {
		return this.dialogDOM.open().then((res) => {
			console.log('dialog closed with response: ', res);
		});
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

customElements.define('skills-dialog', SkillsDialog);
