import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  inputControl: FormControl = new FormControl();
  __addButtonDisabled: boolean = true;

  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') inputRef!: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.inputControl.valueChanges.subscribe((val) => {
      this.__addButtonDisabled = !val;
    });
  }

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
  }

  onSave() {
    this.dataService.addProject(this.inputControl.getRawValue());
    this.inputControl.setValue('');
    this.closeEvent.emit();
  }
}
