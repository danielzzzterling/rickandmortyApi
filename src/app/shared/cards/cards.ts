import { Component, OnInit } from '@angular/core';
import { RamApi } from '../../core/services/ram-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards implements OnInit {
  protected title = 'rick-and-morty-app';
    characters: any[] = [];
    
    constructor(private rmService: RamApi) {}
  
    ngOnInit(): void {
        this.rmService.getAllCharacters().subscribe(data => {
          this.characters = data.results;
        });
        }
}
