import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-cx-select',
  templateUrl: './cx-select.component.html',
  styleUrls: ['./cx-select.component.scss'],
  viewProviders: [
    {
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }
]
})
export class CxSelectComponent implements OnInit {

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
