import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashService {

  public showHeaderFooter : boolean = false;
  constructor() { }
}
