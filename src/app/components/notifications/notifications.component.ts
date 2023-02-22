import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/consoleDto';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input() notifications: Array<Comment> = new Array<Comment>();
  @Output() commentIdEmitter = new EventEmitter<number>();
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandBar() {
    this.isOpen = !this.isOpen;
  }

  resolve(commentId: number) {
    this.commentIdEmitter.emit(commentId);
  }

}
