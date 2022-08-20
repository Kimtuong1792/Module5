import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord [] = [
    {word: 'Hello', mean: 'Xin chào'},
    {word: 'good bye', mean: 'tạm biệt'},
    {word: 'phone', mean: 'điện thoại'},
    {word: 'rose', mean: 'hoa hồng'},
    {word: 'Book', mean: 'quyển sách'}];

  constructor() {
  }

  findAll() {
    return this.wordList;
  }

  findByMean(word: string) {
    return this.wordList.find(wordDetail => wordDetail.word === word);
  }
}
