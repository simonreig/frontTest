import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console-service.service';
import { HeaderConsole, ConsoleModel } from '../../models/consoleModel';
import { Objective } from '../../models/consoleDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headers: Array<HeaderConsole>;
  console: ConsoleModel<any>;
  term: string = '';
  objectives: Array<Objective> = new Array<Objective>();
  objectivesSearch: Array<Objective> = new Array<Objective>();

  constructor(private consoleService: ConsoleService) {
    this.headers = [{ name: 'Perspectives', isActive: false }, { name: 'Objetives', isActive: true }, { name: 'KPIs', isActive: false }];
    this.console = {
      columns: [{ name: 'objective', order: '' }, { name: 'perspective', order: '' }, { name: 'description', order: '' }],
      rowsData: []
    };
  }

  ngOnInit(): void {
    this.getObjectives();
  }

  getObjectives() {
    this.consoleService.getObjectives().subscribe((resp) => {
      this.objectives = resp;
      resp.forEach(data => {
        this.console.rowsData.push({
          objective: `${data.code} ${data.name}`,
          perspective: data.perspective.name,
          description: data.description
        })
      });
    });
  }

  search(term: string) {
    this.objectivesSearch = this.objectives.filter(
      obj => obj.name.includes(term) || obj.code.includes(term) || obj.name.toLocaleLowerCase().includes(term) || obj.code.toLocaleLowerCase().includes(term));
    this.console.rowsData = [];
    this.objectivesSearch.forEach(data => {
      this.console.rowsData.push({
        objective: `${data.code} ${data.name}`,
        perspective: data.perspective.name,
        description: data.description
      })
    });
  }

}