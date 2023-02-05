import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfElse]',
})
export class IfElseDirective {
  @Input('appIfElse') set ifElse(condition: number | boolean | undefined) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef
  ) {}
}
