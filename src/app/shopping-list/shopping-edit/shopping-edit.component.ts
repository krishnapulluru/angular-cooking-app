import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('itemName') itemNameRef: ElementRef;
    @ViewChild('itemAmount') itemAmountRef: ElementRef;

    private localData = [];

    constructor() { }

    ngOnInit(): void {
        if (localStorage.getItem("APP-INGREDENTS-LIST") !== null) {
            this.localData = JSON.parse(localStorage.getItem("APP-INGREDENTS-LIST"))
        } else {
            localStorage.setItem("APP-INGREDENTS-LIST", "")
        }
    }

    onAddItem() {
        let itemName: string = this.itemNameRef.nativeElement.value;
        let itemAmount: string = this.itemAmountRef.nativeElement.value;

        if (itemName === null || itemName === undefined || itemName === "") {
            alert("Please enter item name");
            this.itemNameRef.nativeElement.focus();
        } else if (itemAmount === null || itemAmount === undefined || itemAmount === "") {
            alert("Please enter item amount");
            this.itemAmountRef.nativeElement.focus();
        } else {
            this.localData.unshift({
                id: new Date().getTime().toString(16),
                itemName,
                itemAmount,
                modifyDate: new Date()
            })
            localStorage.setItem("APP-INGREDENTS-LIST", JSON.stringify(this.localData))
            this.itemNameRef.nativeElement.value = "";
            this.itemAmountRef.nativeElement.value = "";
        }

    }

}
