import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../Services/external.service';
import { IExternal } from '../Interfaces/IExternal';

@Component({
  selector: 'app-eternal-consume',
  templateUrl: './eternal-consume.component.html',
  styleUrl: './eternal-consume.component.scss',
})
export class EternalConsumeComponent implements OnInit {
  externalProducts!: IExternal[];

  constructor(private _externalService: ExternalService) {}
  ngOnInit(): void {
    this._externalService.getExternalProducts().subscribe((data) => {
      this.externalProducts = data;
    });
  }
}
