import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {

  todoName = 'Create a template';
  
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

}
