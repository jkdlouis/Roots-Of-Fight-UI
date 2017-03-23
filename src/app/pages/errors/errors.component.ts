import {Component, OnInit} from "@angular/core";

import { Error } from "../../models/errors.model";
import { ErrorService } from "../../service/errors.service";

@Component({
  selector: 'app-error',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.sass']
})

export class ErrorsComponent implements OnInit {
  error: Error;
  display = 'none';

  constructor(private errorService: ErrorService) {}

  onErrorHandled() {
    this.display = 'none';
  }

  ngOnInit() {
    this.errorService.errorOccurred
        .subscribe(
            (error: Error) => {
              this.error = error;
              this.display = 'block';
            }
        );
  }
}