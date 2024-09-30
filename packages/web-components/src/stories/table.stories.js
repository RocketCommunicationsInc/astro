import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = () => {
    const columnData = [
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
    return html`
        <rux-table>
            <rux-table-header>
                <rux-table-header-row>
                    ${columnData.map(
                        (column) => html`
                            <rux-table-header-cell
                                >${column.headerName}</rux-table-header-cell
                            >
                        `
                    )}
                </rux-table-header-row>
            </rux-table-header>
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
    `
}

const WithSelectedRowExample = () => {
    const columnData = [
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
    return html`
        <rux-table>
            <rux-table-header>
                <rux-table-header-row>
                    <rux-table-header-cell>Current Tag</rux-table-header-cell>
                    <rux-table-header-cell>Original Tag</rux-table-header-cell>
                    <rux-table-header-cell>Sensor</rux-table-header-cell>
                    <rux-table-header-cell>ASTAT</rux-table-header-cell>
                    <rux-table-header-cell>Obs time</rux-table-header-cell>
                    <rux-table-header-cell>Ob type</rux-table-header-cell>
                    <rux-table-header-cell>Az/Rt asc</rux-table-header-cell>
                    <rux-table-header-cell>El/Dec</rux-table-header-cell>
                    <rux-table-header-cell>Range</rux-table-header-cell>
                    <rux-table-header-cell>Range rate</rux-table-header-cell>
                </rux-table-header-row>
            </rux-table-header>
            <rux-table-body>
                <rux-table-row>
                    <rux-table-cell>19999999</rux-table-cell>
                    <rux-table-cell>000011111</rux-table-cell>
                    <rux-table-cell>450</rux-table-cell>
                    <rux-table-cell>Full</rux-table-cell>
                    <rux-table-cell>2020 158 01:23:45:678</rux-table-cell>
                    <rux-table-cell>OBTYPE_5</rux-table-cell>
                    <rux-table-cell>150</rux-table-cell>
                    <rux-table-cell>3500</rux-table-cell>
                    <rux-table-cell>7500</rux-table-cell>
                    <rux-table-cell>100</rux-table-cell>
                </rux-table-row>
                <rux-table-row selected>
                    <rux-table-cell>19999999</rux-table-cell>
                    <rux-table-cell>000011111</rux-table-cell>
                    <rux-table-cell>450</rux-table-cell>
                    <rux-table-cell>Full</rux-table-cell>
                    <rux-table-cell>2020 158 01:23:45:678</rux-table-cell>
                    <rux-table-cell>OBTYPE_5</rux-table-cell>
                    <rux-table-cell>150</rux-table-cell>
                    <rux-table-cell>3500</rux-table-cell>
                    <rux-table-cell>7500</rux-table-cell>
                    <rux-table-cell>100</rux-table-cell>
                </rux-table-row>
                <rux-table-row>
                    <rux-table-cell>19999999</rux-table-cell>
                    <rux-table-cell>000011111</rux-table-cell>
                    <rux-table-cell>450</rux-table-cell>
                    <rux-table-cell>Full</rux-table-cell>
                    <rux-table-cell>2020 158 01:23:45:678</rux-table-cell>
                    <rux-table-cell>OBTYPE_5</rux-table-cell>
                    <rux-table-cell>150</rux-table-cell>
                    <rux-table-cell>3500</rux-table-cell>
                    <rux-table-cell>7500</rux-table-cell>
                    <rux-table-cell>100</rux-table-cell>
                </rux-table-row>
            </rux-table-body>
        </rux-table>
    `
}

export default {
    title: 'Components/Table',
    component: 'rux-table',
    argTypes: extractArgTypes('rux-table'),
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}

export const WithSelectedRow = {
    render: WithSelectedRowExample.bind(),
    name: 'With Selected Row',
}
