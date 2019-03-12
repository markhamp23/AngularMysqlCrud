import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(
      response => {
        this.games = response;
      },
      err => console.error(err)
    );
  }

  getGames() {
    this.gameService.getGames()
      .subscribe(
        response => {
          this.games = response;
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.gameService.deleteGame(id)
      .subscribe(
        response => {
          console.log(response);
          this.getGames();
        },
        err => console.error(err)
      )
  }

}
