import { LitElement, html } from 'lit-element'
export class RuxClassificationMarking extends LitElement {
    static get properties() {
        return {
            classification: {
                type: String,
            },
            tag: {
                type: Boolean,
                reflect: true,
            },
            label: {
                type: String,
            },
        }
    }

    constructor() {
        super()
        this.label = ''
        this.classification = 'unclassified'
        this.tag = false
        this.markingSlug = this._slugFilter
        this.marking = this._setClassificationMarking
    }

    _slugFilter(label) {
        let slug = label.toLowerCase()

        slug = label
            .replace(/^\s+|\s+$/g, '') // trim
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars like //
            .replace(/\s+/g, '') // collapse whitespace
            .replace(/-+/g, '') // collapse dashes to whitespace

        return slug
    }

    _setClassificationMarking(marker) {
        const markingClass = this.markingSlug(this.classification)
        const markingLabel = this.markingSlug(marker)
        let bannerLabel
        let tagLabel
        let markingStyle

        if (markingClass == markingLabel) {
            switch (markingLabel) {
                case 'controlled':
                    bannerLabel = 'cui'
                    tagLabel = 'cui'
                    markingStyle = 'controlled'
                    break
                case 'confidential':
                    bannerLabel = 'confidential'
                    tagLabel = 'c'
                    markingStyle = 'confidential'
                    break
                case 'secret':
                    bannerLabel = 'secret'
                    tagLabel = 's'
                    markingStyle = 'secret'
                    break
                case 'topsecret':
                    bannerLabel = 'top secret'
                    tagLabel = 'ts'
                    markingStyle = 'top secret'
                    break
                case 'topsecretsci':
                    bannerLabel = 'top secret//sci'
                    tagLabel = 'TS//SCI'
                    markingStyle = 'top secret//sci'
                    break
                default:
                    bannerLabel = 'unclassified'
                    tagLabel = 'u'
                    markingStyle = 'unclassified'
            }
        } else {
            bannerLabel = 'Select a Classification Marking type'
            tagLabel = bannerLabel
        }

        const markingData = {
            label: bannerLabel,
            labelTag: tagLabel,
            style: markingStyle,
        }

        return markingData
    }

    render() {
        return html`
            <style>
                :host .rux-classification__marking {
                    z-index: 1000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    align-content: center;
                    min-height: 26px;
                    box-sizing: border-box;
                    font-size: var(--fontSize);
                    font-weight: bold;
                    font-family: var(--fontFamily);
                    text-transform: uppercase;
                    transition: top 0.5s ease;
                    overflow-wrap: anywhere;
                    color: var(--classificationTextColorLight);
                    background-color: var(
                        --classificationUnclassifiedBackgroundColor
                    );
                    position: absolute;
                    top: 0;
                    left: 0;
                    flex-wrap: nowrap;
                    flex-grow: 1;
                    width: 100%;
                }

                :host([tag]),
                :host([tag]) .rux-classification__marking {
                    position: relative;
                    align-items: center;
                    top: auto;
                    left: auto;
                    min-height: auto;
                    width: fit-content;
                    line-height: 1;
                    padding: 0.25rem 0.9375rem;
                    border-radius: 3px;
                    font-size: var(--fontSizeMD);
                }
                :host([classification='${this.marking('topsecretsci').style}'])
                    .rux-classification__marking,
                :host([classification='topsecretsci'])
                    .rux-classification__marking {
                    background-color: var(
                        --classificationTopSecretSCIBackgroundColor
                    );
                    color: var(--classificationTextColorDark);
                }
                :host([classification='${this.marking('top-secret').style}'])
                    .rux-classification__marking {
                    background-color: var(
                        --classificationTopSecretBackgroundColor
                    );
                    color: var(--classificationTextColorDark);
                }
                :host([classification='${this.marking('secret').style}'])
                    .rux-classification__marking,
                :host([classification='Secret']) .rux-classification__marking {
                    background-color: var(
                        --classificationSecretBackgroundColor
                    );
                }
                :host([classification='${this.marking('confidential').style}'])
                    .rux-classification__marking {
                    background-color: var(
                        --classificationConfidentialBackgroundColor
                    );
                }
                :host([classification='${this.marking('controlled').style}'])
                    .rux-classification__marking {
                    background-color: var(
                        --classificationControlledBackgroundColor
                    );
                }
                :host([classification='${this.marking('unclassified').style}'])
                    .rux-classification__marking {
                    background-color: var(
                        --classificationUnclassifiedBackgroundColor
                    );
                }
            </style>

            <div class="rux-classification__marking">
                ${this.tag
                    ? `${this.marking(this.classification).labelTag}`
                    : `${this.marking(this.classification).label}`}
                ${this.label}
            </div>
        `
    }
}
