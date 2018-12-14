import { Injectable, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  private viewRef: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef): void {
    this.viewRef = viewRef;
  }

  addComponent(compToAdd: any): void {
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(compRef.hostView);

  }
}
