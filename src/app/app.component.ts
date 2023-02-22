import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './models/consoleDto';
import { ConsoleService } from './services/console-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontendTest';

  @Input() notifications: Array<Comment> = new Array<Comment>();

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.consoleService.getComments().subscribe((resp) => {
      this.notifications = resp;
    });
  }

  resolveComment(commentId: number) {
    this.notifications.forEach((comment, idx) => {
      if (comment.id === commentId) {
        this.notifications.splice(idx, 1);
      }
    });
  }

}
