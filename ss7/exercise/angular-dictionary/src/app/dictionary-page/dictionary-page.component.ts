import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {IWord} from '../model/IWord';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  words: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(): IWord[] {
    return this.words = this.dictionaryService.getAll();
  }
}
