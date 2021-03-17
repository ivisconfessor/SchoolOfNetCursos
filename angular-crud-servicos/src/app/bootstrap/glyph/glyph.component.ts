import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.css']
})
export class GlyphComponent implements OnInit {

  // @Input()
  // icon;

  @Input()
  codeIcon;

  @Input()
  colorIcon;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
