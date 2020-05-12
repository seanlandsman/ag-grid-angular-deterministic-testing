import {Component, OnInit} from '@angular/core';
import {GridApi, GridReadyEvent} from "ag-grid-community";

const IDCellRenderer = (params) => `<div id="${params.colDef.field}_${params.data.id}">${params.value}</div>`

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private gridApi: GridApi;

    columnDefs = [
        {field: 'make'},
        {field: 'model'},
        {field: 'price'}
    ];

    rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
    ];

    defaultColDef = {
        cellRenderer: IDCellRenderer,
        sortable: true
    };

    ngOnInit() {
        let rowId = 0;
        this.rowData.forEach(row => row['id'] = rowId++);
    }

    onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;
    }
}
