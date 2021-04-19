import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

const enum Values {
  First = 'Foo',
}

@Component({
  selector: 'lib-library',
  template: ` ${Values.First} `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent {}
