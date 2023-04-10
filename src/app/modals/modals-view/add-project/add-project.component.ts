import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectComponent implements OnInit, AfterViewInit {
  inputControl: FormControl = new FormControl();
  __addButtonDisabled: boolean = true;

  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') inputRef!: any; // todo check for HtmlElement

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
