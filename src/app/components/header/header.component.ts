import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string='Task  Tracker';
  showAddTask:boolean=false;
  subscription:Subscription;
  constructor(private uiservice:UiService){
  }
  toggleAddTask(){
    this.uiservice.toggleAddTask();
  }
    
}
