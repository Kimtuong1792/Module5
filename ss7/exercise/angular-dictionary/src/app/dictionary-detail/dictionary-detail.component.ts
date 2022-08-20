import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
word: string;
dictionaryForm: FormGroup;
  constructor(  private activatedRoute: ActivatedRoute ,
                private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.word = String(+paramMap.get('word'));
      const keyword = this.getKeyWord(this.word);
      this.dictionaryForm = new FormGroup({
        word: new FormControl(keyword.word),
        name: new FormControl(keyword.mean),

      });
    });
  }

  ngOnInit(): void {
  }

  private getKeyWord(word: string) {
return this.dictionaryService.translate(word);
  }
}
