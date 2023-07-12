import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';
  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
        console.log('debouncer value', value)
      })
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }
}
