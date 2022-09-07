import { Component, h, Host } from '@stencil/core'
//import { hasShadowDom } from '../../utils/utils'

@Component({
    tag: 'rux-accordion',
    styleUrl: 'rux-accordion.scss',
    shadow: true,
})
export class RuxAccordion {
    render() {
        return (
            <Host>
                <div class="rux-accordion">
                    <details>
                        <summary>
                            <rux-icon icon="apps" size="20px"></rux-icon>
                            <span class="title">This is the title</span>
                            <rux-icon
                                icon="keyboard-arrow-down"
                                size="20px"
                                class="indicator"
                            ></rux-icon>
                        </summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus assumenda adipisci error quas
                            dolore nulla reiciendis soluta praesentium excepturi
                            pariatur ipsum, eos provident sed, quisquam
                            doloremque labore tenetur consequuntur numquam!
                        </p>
                    </details>
                    <details>
                        <summary>
                            <span class="title">This is the title</span>
                            <rux-icon
                                icon="keyboard-arrow-down"
                                size="20px"
                                class="indicator"
                            ></rux-icon>
                        </summary>
                        <form id="form">
                            <rux-input
                                id="ruxInput"
                                name="ruxInput"
                                label="Input Field"
                            ></rux-input>
                            <p>Add all the things!</p>
                            <rux-checkbox-group>
                                <rux-checkbox>one</rux-checkbox>
                                <rux-checkbox>two</rux-checkbox>
                                <rux-checkbox>three</rux-checkbox>
                            </rux-checkbox-group>
                        </form>
                    </details>
                    <details>
                        <summary>
                            <span class="title">This is the title</span>
                            <rux-icon
                                icon="keyboard-arrow-down"
                                size="20px"
                                class="indicator"
                            ></rux-icon>
                        </summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus assumenda adipisci error quas
                            dolore nulla reiciendis soluta praesentium excepturi
                            pariatur ipsum, eos provident sed, quisquam
                            doloremque labore tenetur consequuntur numquam!
                        </p>
                        <img
                            src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-138468381-scaled-e1619028416767.jpg"
                            alt="KITTIES!"
                            style={{ width: `80%`, margin: `10px auto` }}
                        />
                    </details>
                    <details>
                        <summary>
                            <rux-icon icon="apps" size="20px"></rux-icon>
                            <span class="title">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eligendi, harum. Magni
                                praesentium nisi tenetur delectus magnam autem,
                                provident tempora laborum. Ullam omnis
                                voluptates ratione, quaerat sunt enim qui
                                similique beatae?
                            </span>
                            <rux-icon
                                icon="keyboard-arrow-down"
                                size="20px"
                                class="indicator"
                            ></rux-icon>
                        </summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus assumenda adipisci error quas
                            dolore nulla reiciendis soluta praesentium excepturi
                            pariatur ipsum, eos provident sed, quisquam
                            doloremque labore tenetur consequuntur numquam!
                        </p>
                    </details>
                </div>
            </Host>
        )
    }
}
