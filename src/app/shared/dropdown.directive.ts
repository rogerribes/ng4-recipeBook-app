import { Directive, HostBinding, OnInit, HostListener, Renderer2, ElementRef } from "@angular/core";
@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean;
  isOpenBool: boolean;

  constructor ( private elRef: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit () {
    this.isOpen = false;
  }

  //@HostListener ('click')mouseclick () {
  //
  //  if(this.isOpenBool){
  //    this.renderer.removeClass (this.elRef.nativeElement.parentNode, 'open');
  //  }else{
  //    this.renderer.addClass (this.elRef.nativeElement.parentNode, 'open');
  //  }
  //  this.isOpenBool = !this.isOpenBool;
  //
  //}

  @HostListener ('click')mouseclick () {

    this.isOpen = !this.isOpen;

  }
}