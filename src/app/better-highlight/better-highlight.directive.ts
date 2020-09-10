import { 
  Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef:ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor:string;


  @HostListener('mouseenter') mouseOver(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeaff(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
