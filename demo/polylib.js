import { PlElement, html, css } from "polylib";
import "@plcmp/pl-input";
import "@plcmp/pl-datetime";
import "@plcmp/pl-button";
import "@plcmp/pl-flex-layout";
import "@plcmp/pl-combobox";
import "@plcmp/pl-grid";

class PolyLib extends PlElement {
	static  properties = {
		value: { type: String, value: 'Test' },
		data: {
			type: Array,
			value: [{
				id: '1',
				caption: 'First',
			}, {
				id: '2',
				caption: 'Second',
			},
			{
				id: '3',
				caption: 'Third',
			}]
		},
		treeData: {
			type: Array,
			value: [{
				id: '1',
				pid: null,
				caption: 'First',
			}, {
				id: '2',
				pid: '1',
				caption: 'Second',
			},
			{
				id: '3',
				pid: '2',
				caption: 'Third',
			}]
		}
	}

	static  css = css`
		:host {
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			padding: 16px;
			box-sizing: border-box;
		}
	`;

	static template = html`
		<pl-flex-layout vertical fit>
			<pl-input label="test" value="{{value}}"></pl-input>
			<pl-datetime label="test"></pl-datetime>
			<pl-combobox label="test" data="{{data}}" text-property="caption" value-property="id"></pl-combobox>
			<pl-combobox label="test tree multi" multi-select tree data="{{treeData}}" variant="tags" key-property="id" pkey-property="pid" text-property="caption" value-property="id"></pl-combobox>
			<pl-button variant="primary" label="[[value]]" on-click="[[onClick]]"></pl-button>
			<pl-grid data="[[data]]">
				<pl-grid-column header="id" field="id"></pl-grid-column>
				<pl-grid-column header="caption" field="caption"></pl-grid-column>
			</pl-grid>
		</pl-flex-layout>
	`;

	onClick(){
		alert('onClick')
	}
}


customElements.define('pl-form-polylib', PolyLib);
