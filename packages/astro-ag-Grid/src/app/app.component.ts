import { Component } from '@angular/core';
import '@astrouxds/rux-status';
import '@astrouxds/rux-icon';
import '@astrouxds/rux-monitoring-icon';
import '@astrouxds/rux-monitoring-icon/rux-monitoring-progress-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-app';

  columnDefs = [
    // tslint:disable-next-line: max-line-length
    { width: 175, headerName: 'Classification', field: 'classification', sortable: true , checkboxSelection: true, headerCheckboxSelection: true, filter: true, resizable: true },
    { width: 150, headerName: 'Current Tag', field: 'currentTag', sortable: true, resizable: true },
    { width: 150, headerName: 'Original Tag', field: 'originalTag', sortable: true, resizable: true },
    { width: 100, headerName: 'Sensor', field: 'sensor', sortable: true, resizable: true },
    { width: 100, headerName: 'ASTAT', field: 'astat', sortable: true, resizable: true },
    { width: 200, headerName: 'Obs Time', field: 'obsTime', sortable: true, resizable: true },
    { width: 125, headerName: 'Ob Type', field: 'obType', sortable: true, resizable: true },
    { width: 150, headerName: 'Az/Rt Asc', field: 'azRtAsc', sortable: true, resizable: true },
    { width: 150, headerName: 'El/Dec', field: 'elDec', sortable: true, resizable: true },
    { width: 150, headerName: 'Range', field: 'range', sortable: true, resizable: true },
    { width: 150, headerName: 'Range Rate', field: 'rangeRate', sortable: true, resizable: true },
  ];

  rowData = [
    { classification: '(U)', currentTag: '999999991', originalTag: '100000001', sensor: '349', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:678', obType: 'OBTYPE_2', azRtAsc: '150.4107', elDec: '10.5204', range: '3541.304', rangeRate: '-1.85068' },
    { classification: '(U)', currentTag: '999999992', originalTag: '020000001', sensor: '349', astat: 'SP_FULL', obsTime: '2020 159 02:26:42:478', obType: 'OBTYPE_2', azRtAsc: '275.6166', elDec: '22.2304', range: '2741.404', rangeRate: 'NULL' },
    { classification: '(U)', currentTag: '999999993', originalTag: '003000001', sensor: '373', astat: 'SP_FULL', obsTime: '2020 158 11:03:35:178', obType: 'OBTYPE_2', azRtAsc: '163.3307', elDec: '76.5604', range: '2641.454', rangeRate: '-34068' },
    { classification: '(U)', currentTag: '999999994', originalTag: '000400001', sensor: '318', astat: 'FULL', obsTime: '2020 159 03:53:15:178', obType: 'OBTYPE_5', azRtAsc: '141.5507', elDec: '67.5204', range: '6741.3654', rangeRate: '-2.85458' },
    { classification: '(U)', currentTag: '999999995', originalTag: '000050001', sensor: '432', astat: 'SP_FULL', obsTime: '2020 158 02:21:34:678', obType: 'OBTYPE_6', azRtAsc: '153.4187', elDec: '10.3404', range: '2941.784', rangeRate: '-4.85238' },
    { classification: '(U)', currentTag: '999999996', originalTag: '000006001', sensor: '379', astat: 'SP_FULL', obsTime: '2020 158 03:25:52:678', obType: 'OBTYPE_9', azRtAsc: '144.4347', elDec: '34.7904', range: '8741.564', rangeRate: '-3.85678' },
    { classification: '(U)', currentTag: '999999997', originalTag: '000400001', sensor: '379', astat: 'SP_FULL', obsTime: '2020 158 04:28:41:678', obType: 'OBTYPE_5', azRtAsc: '167.5503', elDec: '58.1204', range: '5441.3344', rangeRate: '-1.85068' },
    { classification: '(U)', currentTag: '999999998', originalTag: '100000001', sensor: '312', astat: 'FULL', obsTime: '2020 158 05:23:38:678', obType: 'OBTYPE_4', azRtAsc: '159.4133', elDec: '189.5904', range: '3241.124', rangeRate: 'NULL' },
    { classification: '(U)', currentTag: '999999999', originalTag: '200000001', sensor: '356', astat: 'FULL', obsTime: '2020 155 06:22:27:678', obType: 'OBTYPE_4', azRtAsc: '157.3307', elDec: '11.4504', range: '3451.356', rangeRate: 'NULL' },
    { classification: '(U)', currentTag: '999999990', originalTag: '300000001', sensor: '356', astat: 'SP_FULL', obsTime: '2020 158 07:23:28:678', obType: 'OBTYPE_4', azRtAsc: '156.7807', elDec: '10.6704', range: '3591.356', rangeRate: 'NULL' },
    { classification: '(U)', currentTag: '899999991', originalTag: '400000001', sensor: '376', astat: 'SP_FULL', obsTime: '2020 158 08:23:29:678', obType: 'OBTYPE_3', azRtAsc: '151.4107', elDec: '25.5604', range: '3231.334', rangeRate: '-4.23068' },
    { classification: '(U)', currentTag: '799999991', originalTag: '500000001', sensor: '319', astat: 'SP_FULL', obsTime: '2020 155 09:23:31:678', obType: 'OBTYPE_1', azRtAsc: '155.4123', elDec: '27.8904', range: '3571.367', rangeRate: '-5.85488' },
    { classification: '(U)', currentTag: '699999991', originalTag: '600000001', sensor: '319', astat: 'SP_FULL', obsTime: '2020 158 10:23:45:655', obType: 'OBTYPE_2', azRtAsc: '166.4707', elDec: '58.5904', range: '3241.564', rangeRate: '-9.85068' },
    { classification: '(U)', currentTag: '599999991', originalTag: '700000001', sensor: '390', astat: 'FULL', obsTime: '2020 158 01:23:45:678', obType: 'OBTYPE_2', azRtAsc: '177.4167', elDec: '58.5219', range: '8841.984', rangeRate: '-6.85668' },
    { classification: '(U)', currentTag: '499999991', originalTag: '000008001', sensor: '391', astat: 'FULL', obsTime: '2020 151 01:23:45:644', obType: 'OBTYPE_2', azRtAsc: '153.4807', elDec: '89.5219', range: '5541.784', rangeRate: '-6.85228' },
    { classification: '(U)', currentTag: '399999991', originalTag: '000070001', sensor: '380', astat: 'FULL', obsTime: '2020 158 11:23:45:633', obType: 'OBTYPE_9', azRtAsc: '159.4127', elDec: '98.5216', range: '7841.784', rangeRate: '-2.85338' },
    { classification: '(U)', currentTag: '299999991', originalTag: '000050001', sensor: '381', astat: 'FULL', obsTime: '2020 158 01:23:39:622', obType: 'OBTYPE_8', azRtAsc: '150.4117', elDec: '13.5289', range: '5741.564', rangeRate: '-3.85111' },
    { classification: '(U)', currentTag: '199999991', originalTag: '000030001', sensor: '381', astat: 'FULL', obsTime: '2020 155 01:23:35:678', obType: 'OBTYPE_7', azRtAsc: '154.4197', elDec: '46.5257', range: '4341.894', rangeRate: '-7.85279' },
    { classification: '(U)', currentTag: '919999991', originalTag: '090000001', sensor: '374', astat: 'FULL', obsTime: '2020 158 01:23:28:656', obType: 'OBTYPE_7', azRtAsc: '122.4157', elDec: '37.5249', range: '2841.344', rangeRate: '-5.85269' },
    { classification: '(U)', currentTag: '929999991', originalTag: '020000001', sensor: '303', astat: 'SP_FULL', obsTime: '2020 156 01:23:45:634', obType: 'OBTYPE_2', azRtAsc: '133.9107', elDec: '78.5114', range: '7841.367', rangeRate: '-8.85444' },
    { classification: '(U)', currentTag: '939999991', originalTag: '004000001', sensor: '309', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:676', obType: 'OBTYPE_4', azRtAsc: '145.8107', elDec: '24.5194', range: '3567.378', rangeRate: '-8.85789' },
    { classification: '(U)', currentTag: '949999991', originalTag: '005000001', sensor: '380', astat: 'SP_FULL', obsTime: '2020 157 01:23:29:678', obType: 'OBTYPE_2', azRtAsc: '172.8107', elDec: '25.5394', range: '3534.357', rangeRate: '-2.85345' },
    { classification: '(U)', currentTag: '959999991', originalTag: '006000001', sensor: '381', astat: 'SP_FULL', obsTime: '2020 159 01:23:45:658', obType: 'OBTYPE_5', azRtAsc: '149.6107', elDec: '28.5364', range: '3567.334', rangeRate: '-2.850357' },
    { classification: '(U)', currentTag: '969999991', originalTag: '007000001', sensor: '387', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:378', obType: 'OBTYPE_4', azRtAsc: '159.5107', elDec: '89.5407', range: '3589.356', rangeRate: '-2.85348' },
  ];
}


