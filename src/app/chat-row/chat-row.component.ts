import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-row',
  templateUrl: './chat-row.component.html',
  styleUrls: ['./chat-row.component.css']
})
export class ChatRowComponent implements OnInit {

  time = new Date().toLocaleString();

  @Input() rowPosition: string;
  constructor() {
   }

  ngOnInit() {
  }

}
