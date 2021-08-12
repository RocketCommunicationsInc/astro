import { html, render } from 'lit-html'
import RuxCheckboxReadme from '../components/rux-checkbox/readme.md'
import RuxRadioReadme from '../components/rux-radio/readme.md'
// import readme from '../../src/components/rux-input-field/readme.md'

export default {
    title: 'Components/Form Elements',
}

export const InputFields = () => html`
    <style>
      ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 3rem;
        align-items: start;
        margin: 4rem 0;
        padding: 0;
        width: 100%;
        row-gap: 1rem;
      }
      li {
        list-style: none;
      }
      @media screen and (min-width: 550px){
        ul {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media screen and (min-width: 800px){
        ul {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
    <div style="padding: 10vh 5vw; display: flex; flex-flow: column; justify-content: center;">
      <ul class="rux-form">
        <li>
          <rux-input-field placeholder="Text input" label="Text input"></rux-input-field>
        </li>
        <li>
          <rux-input-field placeholder="Number input" label="Number input" type="number></rux-input-field>
        </li>
        <li>
          <rux-input-field placeholder="Text input" label="Text input"></rux-input-field>
        </li>
        <li>
          <rux-input-field placeholder="Text input" label="Text input" help-text="Help text"></rux-input-field>
        </li>
        <li>
          <rux-input-field placeholder="Text input" label="Text input" help-text="Help text"></rux-input-field>
        </li>
        <li>
          <rux-input-field value=" " label="Is required" required></rux-input-field>
        </li>
        <li>
          <rux-input-field label="Invalid *" error-text="Error text" invalid="true"></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field label="Disabled" disabled></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field label="Password" type="password" placeholder="********"></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field label="Invalid password *" error-text="Error text" type="password" invalid></rux-input-field>
        </li>
        <li>
          <rux-input-field label="Web address" type="url" placeholder="https://domain.com"></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field type="email" label="Email address" placeholder="user@domain.com"></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field type="tel" placeholder="(999) 999-9999" label="Phone number"></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field label="Search" type="search" placeholder="Enter search term"></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field label="Invalid search" type="search" invalid placeholder="Enter search term" error-text="Error text" required>
        </li>
        <li class="rux-form-field">
          <rux-input-field label="Number input" type="number" min="0" max="10" placeholder="Enter a number between 0 and 10"></rux-input-field>
        </li>
        <li class="rux-form-field">
          <rux-input-field label="Invalid number *" type="number" min="0" max="10" invalid error-text="Error text" placeholder="Enter a number between 0 and 10"></rux-input-field>
        </li>
        <li class="text-area-field">
          <rux-textarea label="Textarea" placeholder="Multiline text is ok"></rux-textarea>
        </li>
        <!-- Styles for these HTML5 input types still need to be implemented
    <li class="rux-form-field">
      <label for="input__color">Color input</label>
      <input class="rux-input-field" type="color" id="input__color" value="#000000">
    </li>
    <li class="rux-form-field">
      <label for="input__range">Range input</label>
      <input class="rux-input-field" type="range" id="input__range" value="10">
    </li>
    <li class="rux-form-field">
      <label for="input__date">Date input</label>
      <input class="rux-input-field" type="date" id="input__date" value="1970-01-01">
    </li>
    <li class="rux-form-field">
      <label for="input__month">Month input</label>
      <input class="rux-input-field" type="month" id="input__month" value="1970-01">
    </li>
    <li class="rux-form-field">
      <label for="input__week">Week input</label>
      <input class="rux-input-field" type="week" id="input__week" value="1970-W01">
    </li>
    <li class="rux-form-field">
      <label for="input__datetime">Datetime input</label>
      <input class="rux-input-field" type="datetime" id="input__datetime" value="1970-01-01T00:00:00Z">
    </li>
    <li class="rux-form-field">
      <label for="input__datetime-local">Datetime-local input</label>
      <input class="rux-input-field" type="datetime-local" id="input__datetime-local" value="1970-01-01T00:00">
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
        <input class="rux-button" type="submit" value="input type=submit">
      </div>
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
       <input class="rux-button" type="button" value="input type=button">
      </div>
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
        <input class="rux-button" type="reset" value="input type=reset">
      </div>
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
       <input class="rux-button" type="submit" value="input disabled" disabled>
      </div>
    </li> -->
      </ul>
      <ul class="rux-form">
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller text input" placeholder="Text input" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller number input" type="number" placeholder="Number input" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller is required" required small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller invalid *" invalid error-text="Error text" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller disabled" disabled small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller password" type="password" placeholder="********" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller web address" type="url" placeholder="https://domain.com" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller email address" placeholder="user@domain.com" type="email" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller phone number" type="tel" placeholder="(999) 999-9999" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller search" type="search" placeholder="Enter search term" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input-field label="Smaller number input" type="number" min="0" max="10" placeholder="Enter a number between 0 and 10" small></rux-input-field>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-textarea label="Smaller textarea" placeholder="Multiline text is ok" small></rux-textarea>
        </li>
      </ul>
    </div>
  `

InputFields.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        // readme: {
        //     sidebar: readme,
        // },
    },
}

export const Checkboxes = () => {
    return html` <style>
            section {
                display: flex;
                justify-content: center;
                padding: 10vh 5vw 0;
            }
            section ul {
                margin-right: 1rem;
                margin-bottom: 0;
                list-style: none;
            }
        </style>
        <section>
            <ul>
                <li>
                    <rux-checkbox id="checked" name="checkedOne" checked>
                        Checked
                    </rux-checkbox>
                </li>
                <li>
                    <rux-checkbox id="unchecked" name="uncheckedOne">
                        Unchecked
                    </rux-checkbox>
                </li>
                <li>
                    <rux-checkbox
                        id="disabled"
                        name="disabled"
                        checked
                        disabled
                    >
                        Disabled
                    </rux-checkbox>
                </li>
                <li>
                    <rux-checkbox
                        name="indeterminate"
                        id="checkbox4c"
                        checked
                        indeterminate
                    >
                        Indeterminate
                    </rux-checkbox>
                </li>
                <!-- <li>
                  <rux-checkbox
                      name="checkboxGroup"
                      id="checkbox4c"
                      checked
                      help-text="This is an example help text"
                  >
                      With Help Text
                  </rux-checkbox>
              </li>
              <li>
                  <rux-checkbox
                      name="checkboxGroup"
                      id="checkbox4c"
                      checked
                      required
                      error-text="This is an example error text"
                  >
                      With Error Text
                  </rux-checkbox>
              </li> -->
            </ul>
        </section>`
}

Checkboxes.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxCheckboxReadme,
    },
}

export const RadioButtons = () => html`
    <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
        <ul style="list-style:none;">
            <li>
                <rux-radio name="radio1c" value="one">Radio button</rux-radio>
            </li>
            <li>
                <rux-radio name="radio1c" value="two" checked
                    >Radio button checked</rux-radio
                >
            </li>
            <li>
                <rux-radio name="radio2c" value="three" disabled
                    >Radio button disabled</rux-radio
                >
            </li>
            <li>
                <rux-radio name="radio2c" value="four" checked disabled
                    >Radio button disabled checked</rux-radio
                >
            </li>
        </ul>
    </div>
`

RadioButtons.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: RuxRadioReadme,
        },
    },
}
