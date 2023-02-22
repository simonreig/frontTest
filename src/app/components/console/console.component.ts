import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConsoleModel, HeaderConsole } from '../../models/consoleModel';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  @Input() consoleModel!: ConsoleModel<any>;
  @Input() headers: Array<HeaderConsole>;
  @Output() columnSort: EventEmitter<any> = new EventEmitter<any>();
  lastSort: string = '';

  constructor() {
    this.headers = new Array<HeaderConsole>();
  }

  ngOnInit(): void {
  }

}
