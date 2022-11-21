import { Injectable, OnDestroy } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnDestroy {

  public showMenu: boolean = false;

  ngOnDestroy(): void {

  }

}