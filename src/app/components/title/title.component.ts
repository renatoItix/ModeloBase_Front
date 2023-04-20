import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    @Input() titulo: string = '';
    @Input() subtitulo: string = '';
    @Input() cortitulo: string = '';
    @Output() clicked = new EventEmitter(); 
    
  constructor() { }

  ngOnInit(): void {
  }

  onClick(nomeBotao: string): void {
    this.clicked.emit(nomeBotao);
}

}
