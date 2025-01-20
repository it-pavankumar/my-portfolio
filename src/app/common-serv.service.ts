import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServService {

  pathUrl = signal('');

  constructor() {}

  setFilePath(val:string) {
    this.pathUrl.set(val);
  }
}
