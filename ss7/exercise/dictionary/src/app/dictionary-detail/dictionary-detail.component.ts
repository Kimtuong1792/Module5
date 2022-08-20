import {Component, OnInit} from '@angular/core';
import {IWord} from "../model/iword";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordDetail: IWord [] = [];
  private paramMap: any;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    const word = this.paramMap.get('word');
    // @ts-ignore
    this.wordDetail = this.dictionaryService.findByMean(word)
  }

}
