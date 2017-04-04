import { Directive, Renderer, ElementRef } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';


@Directive({
  selector: '[set-focuser]' // Attribute selector
})
export class SetFocuser {

  constructor(private renderer: Renderer, private elementRef: ElementRef, public keyboard: Keyboard) {
  }

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement.querySelector('input');
    // to delay 
    setTimeout(() => {
      this.renderer.invokeElementMethod(element, 'focus', []);
      this.keyboard.show();
    }, 500);
  }

}
