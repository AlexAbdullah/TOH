import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }
}
