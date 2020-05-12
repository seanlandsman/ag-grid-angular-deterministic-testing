import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AgGridModule} from "ag-grid-angular";

describe('AppComponent', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AgGridModule.withComponents([])
            ],
            declarations: [AppComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    }));

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have first item in data "make" as Toyota`, () => {
        const appElement = fixture.nativeElement;
        const cellZero = appElement.querySelector('#make_0');
        expect(cellZero.textContent).toEqual("Toyota");
    });

    it(`should have first item in data "make" as Toyota even after sort`, () => {
        component.gridApi.setSortModel([
            {
                colId: 'price',
                sort: 'desc',
            }
        ]);

        const appElement = fixture.nativeElement;
        const cellZero = appElement.querySelector('#make_0');
        expect(cellZero.textContent).toEqual("Toyota");
    });
});
