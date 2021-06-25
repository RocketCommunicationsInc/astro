/* eslint-disable no-unused-vars */
import { html, render } from 'lit-html'
import { withKnobs } from '@storybook/addon-knobs'
import TableReadme from '../components/rux-table/readme.md'
/* eslint-enable no-unused-vars */

const columnData = [
    { headerName: '', field: 'control' },
    { headerName: 'Current tag', field: 'currentTag' },
    { headerName: 'Original tag', field: 'originalTag' },
    { headerName: 'Sensor', field: 'sensor' },
    { headerName: 'ASTAT', field: 'astat' },
    { headerName: 'Obs time', field: 'obsTime' },
    { headerName: 'Ob type', field: 'obType' },
    { headerName: 'Az/Rt asc', field: 'azRtAsc' },
    { headerName: 'El/Dec', field: 'elDec' },
    { headerName: 'Range', field: 'range' },
    { headerName: 'Range rate', field: 'rangeRate' },
]

const agColumnData = columnData.slice(0)
agColumnData.shift()

const agRowData = Array(24)
for (let i = 0; i < agRowData.length; i++) {
    agRowData[i] = {
        selected: false,
        currentTag: 19999999,
        originalTag: '000011111',
        sensor: 450,
        astat: 'FULL',
        obsTime: '2020 158 01:23:45:678',
        obType: 'OBTYPE_5',
        azRtAsc: 150,
        elDec: 3500,
        range: 7500,
        rangeRate: 100,
    }
}

const rowData = agRowData.slice(0).map((item) => {
    item.control = true
    return item
})
rowData[4].selected = true

export default {
    title: 'Components/Table',
    decorators: [withKnobs],
}

export const HTMLTable = () => {
    return html`
    <div style="padding: 2rem;">
			<rux-table class="rux-table">
        <rux-table-header>
        <rux-table-header-row>
            ${columnData.map(
                (column) => html`
                    ${column.headerName == ''
                        ? html``
                        : html`<rux-table-header-cell
                              >${column.headerName}</rux-table-header-cell
                          >`}
                `
            )}
        </rux-table-header>
        </rux-table-header-row>
        <rux-table-body>

          ${rowData.map(
              (row) => html`
                  <rux-table-row selected="${row.selected}">
                      <rux-table-cell>${row.currentTag}</rux-table-cell>
                      <rux-table-cell>${row.originalTag}</rux-table-cell>
                      <rux-table-cell>${row.sensor}</rux-table-cell>
                      <rux-table-cell>${row.astat}</rux-table-cell>
                      <rux-table-cell>${row.obsTime}</rux-table-cell>
                      <rux-table-cell>${row.obType}</rux-table-cell>
                      <rux-table-cell>${row.azRtAsc}</rux-table-cell>
                      <rux-table-cell>${row.elDec}</rux-table-cell>
                      <rux-table-cell>${row.range}</rux-table-cell>
                      <rux-table-cell>${row.rangeRate}</rux-table-cell>
                  </rux-table-row>
              `
          )}
        </rux-table-body>

      </rux-table>
    </div>

  `
}
HTMLTable.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TableReadme,
        },
    },
}

export const HTMLControlsTable = () => {
    function checkBox(id) {
        const checkInput = html`
            <span class="rux-checkbox">
                <input
                    type="checkbox"
                    name="checkbox${id}"
                    id="checkbox${id}"
                />
                <label for="checkbox${id}"></label>
            </span>
        `
        return checkInput
    }
    return html`
        <div style="display: flex; padding: 2vh; justify-content: center;">
            <rux-table>
                <rux-table-header>
                    <rux-table-header-row>
                        ${columnData.map(
                            (column) =>
                                html`
                                    <rux-table-header-cell
                                        >${column.headerName}</rux-table-header-cell
                                    >
                                `
                        )}
                    </rux-table-header-row>
                </rux-table-header>
                <rux-table-body>
                    ${rowData.map(
                        (row, index) => html`
                            <rux-table-row selected="${row.selected}">
                                <rux-table-cell>
                                    ${row.control
                                        ? html` ${checkBox(index)}`
                                        : html` &nbsp; `}
                                </rux-table-cell>
                                <rux-table-cell
                                    >${row.currentTag}</rux-table-cell
                                >
                                <rux-table-cell
                                    >${row.originalTag}</rux-table-cell
                                >
                                <rux-table-cell>${row.sensor}</rux-table-cell>
                                <rux-table-cell>${row.astat}</rux-table-cell>
                                <rux-table-cell>${row.obsTime}</rux-table-cell>
                                <rux-table-cell>${row.obType}</rux-table-cell>
                                <rux-table-cell>${row.azRtAsc}</rux-table-cell>
                                <rux-table-cell>${row.elDec}</rux-table-cell>
                                <rux-table-cell>${row.range}</rux-table-cell>
                                <rux-table-cell
                                    >${row.rangeRate}</rux-table-cell
                                >
                            </rux-table-row>
                        `
                    )}
                </rux-table-body>
            </rux-table>
        </div>
    `
}

HTMLControlsTable.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TableReadme,
        },
    },
}

export const HTMLTableWithSelect = () => {
    function checkBox(id) {
        const checkInput = html`
            <span class="rux-checkbox">
                <input
                    type="checkbox"
                    name="checkbox${id}"
                    id="checkbox${id}"
                />
                <label for="checkbox${id}"></label>
            </span>
        `
        return checkInput
    }

    return html`
        <div style="display: flex; padding: 2vh; justify-content: center;">
            <rux-table>
                <rux-table-header>
                    <rux-table-header-row>
                        ${columnData.map(
                            (column) =>
                                html`
                                    <rux-table-header-cell
                                        >${column.headerName}</rux-table-header-cell
                                    >
                                `
                        )}
                    </rux-table-header-row>
                </rux-table-header>
                <rux-table-body>
                    ${rowData.map(
                        (row, index) => html`
                            <rux-table-row>
                                <rux-table-cell>
                                    <input type="checkbox" id="row-${index}" />
                                </rux-table-cell>
                                <rux-table-cell
                                    >${row.currentTag}</rux-table-cell
                                >
                                <rux-table-cell
                                    >${row.originalTag}</rux-table-cell
                                >
                                <rux-table-cell>${row.sensor}</rux-table-cell>
                                <rux-table-cell>${row.astat}</rux-table-cell>
                                <rux-table-cell>${row.obsTime}</rux-table-cell>
                                <rux-table-cell>${row.obType}</rux-table-cell>
                                <rux-table-cell>${row.azRtAsc}</rux-table-cell>
                                <rux-table-cell>${row.elDec}</rux-table-cell>
                                <rux-table-cell>${row.range}</rux-table-cell>
                                <rux-table-cell
                                    >${row.rangeRate}</rux-table-cell
                                >
                            </rux-table-row>
                        `
                    )}
                </rux-table-body>
            </rux-table>
            <script>
                const inputs = document.querySelectorAll('input')
                for (const input of inputs) {
                    input.addEventListener('input', function (event) {
                        const parent = event.target.closest('rux-table-row')
                        parent.selected = event.target.checked
                    })
                }
            </script>
        </div>
    `
}

HTMLTableWithSelect.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TableReadme,
        },
    },
}
