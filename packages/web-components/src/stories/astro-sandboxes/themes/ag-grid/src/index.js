import '@astrouxds/ag-grid-theme/dist/main.css'
import { Grid } from 'ag-grid-community'

const getRandomNum = (min, max, roundTo = 0) => {
    const num = Math.random() * max + min
    return num.toFixed(roundTo)
}
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
        currentTag: getRandomNum(19999999, 9999999),
        originalTag: '0000' + getRandomNum(11111, 99999),
        sensor: getRandomNum(250, 450),
        astat: getRandomNum(-1, 3) > 0 ? 'FULL' : 'SP_FULL',
        obsTime: '2020 158 01:23:45:678',
        obType: 'OBTYPE_' + getRandomNum(1, 9),
        azRtAsc: getRandomNum(120, 150, 4),
        elDec: getRandomNum(1000, 3500, 3),
        range: getRandomNum(1500, 7500, 3),
        rangeRate: getRandomNum(-10, 10, 5),
    }
}

const gridOptions = {
    columnDefs: agColumnData,
    rowData: agRowData,
}

function startAGGrid() {
    const eGridDiv = document.querySelector('#myGrid')
    new Grid(eGridDiv, gridOptions)
}

startAGGrid()
