import { Component, OnInit } from '@angular/core';
import { Player} from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player: Player = {
    shirtNumber: 10,
    name: 'Rashford'
  };

  constructor() {}

  ngOnInit() {}

}
