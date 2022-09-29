import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/Services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  title = 'Task Mangaer';
  showAddTask: boolean;
  subscription: Subscription;
  constructor(private uiService:UiService) { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
