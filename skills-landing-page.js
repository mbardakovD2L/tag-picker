import '@brightspace-ui/core/components/icons/icon.js';
import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/dropdown/dropdown-button.js';
import '@brightspace-ui/core/components/dropdown/dropdown-menu.js';
import '@brightspace-ui/core/components/menu/menu.js';
import '@brightspace-ui/core/components/menu/menu-item.js';
import '@brightspace-ui/core/components/inputs/input-styles.js';
import '@brightspace-ui/core/components/inputs/input-select-styles.js';
import '@brightspace-ui/core/components/tabs/tabs.js';
import '@brightspace-ui/core/components/tabs/tab-panel.js';
import '@brightspace-ui/core/components/button/button';
import '@brightspace-ui/core/components/inputs/input-search.js';
import '@brightspace-ui/core/components/dialog/dialog.js';
import './dialog.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
// import { sharedStyle } from 'somewhere/sharedStyles.js';
// import { classMap } from 'lit-html/directives/class-map.js';

class SkillsLandingPage extends LitElement {

	static get properties() {
		return {
			prop1: {
				type: String
			},
			dialog: {
				type: Object
			},
		};
	}

	static get styles() {
		return css`
		.input-search {
			display: inline-block;
			position: absolute;
			right: 0;
			width: 300px;
			margin: 0 20px;
		}
		.center-text {
			text-align: center;
		}
		.empty-state {
			margin: auto;
			width: 550px;
		}
		.empty-image {
			max-width: 100%;
		}
		`; // return an array if you want shared styles as well as your own
		// e.g. return [sharedStyles, css`host:blah`]
	}

	constructor() {
		super();
		this.prop1 = '';
		this.dialogIsOpened = false;
	}

	render() {
		return html`
		<skills-dialog></skills-dialog>

		<div>
			<h2>Manage Skills & Outcomss</h2>
			<d2l-tabs>
				<d2l-tab-panel text="Skills">
					<div class="header-bar">
						<d2l-button primary="true" @click="${this.openDialog}">Import Skills</d2l-button>
						<d2l-dropdown-button text="Add">
							<d2l-dropdown-menu id="dropdown">
								<d2l-menu label="Skills Options">
									<d2l-menu-item text="Option 1"></d2l-menu-item>
									<d2l-menu-item text="Option 2"></d2l-menu-item>
								</d2l-menu>
							</d2l-dropdown-menu>
						</d2l-dropdown-button>
						<div class="input-search">
							<d2l-input-search
								label="Search"
								placeholder="Search...">
							</d2l-input-search>
						</div>
						<div class="empty-state">
						<img src="https://raw.githubusercontent.com/mbardakovD2L/tag-picker/574d63f033f8af06c92e971779e424be22e43d3c/Desert_Road.svg"
							class="empty-image" alt="A picture of a desert during the day, with some cacti."></img>
							<h4 class="center-text">Add skills for your learners to develop!</h4>
							<p class="center-text">Skills represent the high-level areas of growth that learners are developing across all their learning.</p>
						</div>
					</div>
				</d2l-tab-panel>
				<d2l-tab-panel text="Outcomes">
					Tab content for Standards
				</d2l-tab-panel>
			</d2l-tabs>
		</div>
		`;
	}

	openDialog() {
		return this.dialog.open().then((res) => {
			console.log('dialog closed with response: ', res);
		});
	}

	firstUpdated() {
		this.dialog = document.querySelector('skills-landing-page').shadowRoot.querySelector('skills-dialog');
		console.log('got dialog: ', this.dialog);
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
