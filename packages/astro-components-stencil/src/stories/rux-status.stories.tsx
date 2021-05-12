import { html, render } from 'lit-html';
// import { RuxStatus } from "../components/rux-status/rux-status"

//@ts-ignore
import Readme from '../components/rux-status/readme.md';

export default {
  title: 'Components/Status',
};

export const Status = () => html`
    <style>
      ul {
        display: flex;
        list-style: none;
        justify-content: space-around;

        padding: 0 1rem;
      }

      ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    </style>
    <ul>
      <li>
        <rux-status status="off"></rux-status>
        <div class="label">Off</div>
      </li>
      <li>
        <rux-status status="standby"></rux-status>
        <div class="label">Standby</div>
      </li>
      <li>
        <rux-status status="normal"></rux-status>
        <div class="label">Normal</div>
      </li>
      <li>
        <rux-status status="caution"></rux-status>
        <div class="label">Caution</div>
      </li>
      <li>
        <rux-status status="serious"></rux-status>
        <div class="label">Serious</div>
      </li>
      <li>
        <rux-status status="critical"></rux-status>
        <div class="label">Critical</div>
      </li>
    </ul>
  `;

Status.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: Readme,
    },
  },
};
