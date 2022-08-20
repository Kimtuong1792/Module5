import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord [] = [
    {word: 'book', mean: 'quyển sách'},
    {word: 'dictionary', mean: 'từ điển'},
    {word: 'hello', mean: 'xin chào'},
    {word: 'bye', mean: 'tạm biệt'},
    {word: 'pen', mean: 'bút'}
  ];

  constructor() {
  }

  getAll() {
    return this.wordList;
  }

  translate(word) {
    return this.wordList.find(detailList => detailList.word === word);
  }
}
