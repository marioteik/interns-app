import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../../service-test.service';



@Component({
    selector: 'app-start-expense',
    templateUrl: './start-expense.component.html',
    styleUrls: ['./start-expense.component.css']
})

export class StartExpenseComponent implements OnInit {
    constructor (private ServiceTest: ServiceTestService) { }

    ngOnInit( ) { }

}

