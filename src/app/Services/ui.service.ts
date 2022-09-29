import { Injectable } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)

  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
