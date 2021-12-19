import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterViewInit,
AfterViewChecked,
AfterContentInit,
AfterContentChecked
{
  @Input() public title!: string;
  @Output() public toggleData = new EventEmitter();

  public data = {name: 'jddjdj'};

  public toggle(): void {
    this.toggleData.emit(this.data);
    this.title = `${this.title}!`;
  }

  public constructor(){
    console.log('constructor', this.title, this.data);
  }

  ngOnInit(): void {
    console.log('OnInit', this.title);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
}


