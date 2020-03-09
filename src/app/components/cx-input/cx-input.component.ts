import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroupDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-cx-input',
  templateUrl: './cx-input.component.html',
  styleUrls: ['./cx-input.component.scss'],
  viewProviders: [
      {
          provide: ControlContainer,
          useExisting: FormGroupDirective
      }
  ]
})
export class CxInputComponent implements OnInit {

  constructor() { }
  
  @Input() formData: any;
  @Input() f: any;
  @Output() formClk = new EventEmitter();
  
  ngOnInit(): void {
  }
  
  cxInputKeyup(e){     
    this.formClk.emit(e);
  }
  

}
