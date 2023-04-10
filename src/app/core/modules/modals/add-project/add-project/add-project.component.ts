import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectComponent implements OnInit {
  ngOnInit(): void {}
}
