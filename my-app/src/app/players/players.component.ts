import { Component, OnInit } from '@angular/core';
import { Player} from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player: Player = {
    playerName: 'Marcus Rashford',
    playerNumber: 10,
    playerNationality: 'England',
    playerPosition: 'Forward',
    playerAppearances: 117,
    playerGoals: 30,
    playerAssists: 25
  };

  constructor() {}

  ngOnInit() {}

  /**
  async  * getPlayerLis: t
   */
  public async getPlayerList():  {
    
  }

}
