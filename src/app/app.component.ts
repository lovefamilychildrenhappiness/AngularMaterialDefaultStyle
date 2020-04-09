import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-controls';

  @ViewChild('ref', {static: false}) el: ElementRef;

  doSomething(e) {
    // this reads false when you check the checkbox and true when you uncheck the check box:
    console.log('checkbox checked? ', e.target.querySelector('input[type="checkbox"]').checked);

    // I can't even use ViewChild with mat-checkbox. It is undefined:
    // 'cannot read properry nativeElement of undefined'
    console.log('the native element: ', this.el.nativeElement);

  }
}
