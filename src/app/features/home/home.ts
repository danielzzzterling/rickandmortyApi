import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Cards } from '../../shared/cards/cards';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [Header,Cards],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
