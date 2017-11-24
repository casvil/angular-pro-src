import { Component, OnInit } from '@angular/core';

interface File {
  name: string,
  size: any,
  type: string
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <stock-inventory></stock-inventory>
    </div>
  `
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }
}
