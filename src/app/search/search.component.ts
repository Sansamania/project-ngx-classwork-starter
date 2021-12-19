import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() public searchText!: string;
  @Output() public searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(e: Event): void {
    const {value} = e.target as HTMLInputElement;
    this.searchTextChange.emit(value);
  }

}
