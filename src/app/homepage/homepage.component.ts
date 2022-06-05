import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  showFiller = false;

  array: any[] = [    {
    "name": "First post",
    "description": "teste"
  },
  {
    "name": "Second post"
  },
  {
    "name": "Third post"
  },
  {
    "name": "Fourth post"
  },
  {
    "name": "Fifth post"
  }
  ]

  longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel aliquam erat. Ut id lacus sagittis, faucibus augue sed, varius dolor. Nam non mauris arcu. Proin a euismod nisl, ac molestie risus. Duis vel nisi nisl. Aenean gravida vel sem dictum dignissim. Nulla tristique varius laoreet. Nulla facilisi. Etiam sit. `;

  constructor() { }

  ngOnInit(): void {
  }

}
