import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit {

  album = '';
  artist = '';
  constructor() { }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

}
