import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [],
  templateUrl: './level2.component.html',
  styleUrl: './level2.component.css'
})
export class Level2Component {
  private currentPlayerIndex:number;
  private currentWinnerIndex:number;
  public boardContent:number[][];
  private playerNames:string[];

  constructor(){
    this.playerNames = ['','X','O'];

    this.boardContent = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    this.currentPlayerIndex=1;
    this.currentWinnerIndex=0;
  }

  public getPlayerName(col:number, row:number):string{
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col:number, row:number):string{
    if(this.boardContent[row][col]!==0){
      return `occupied-${this.getPlayerName(row,col)}`
    }
    return '';
  }

  public set(row:number, col:number):void{
    if(this.currentWinnerIndex === 0 && this.boardContent[row][col] === 0){
      this.boardContent[row][col] = this.currentPlayerIndex;
      this.currentPlayerIndex = this.currentPlayerIndex === 1?2:1;
    }
  }
}
