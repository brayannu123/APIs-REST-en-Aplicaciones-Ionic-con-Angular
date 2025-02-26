import { Component } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  characters: any[] = [];

  constructor(private service: HttpService) { }

  ngOnInit() {
    this.getBeans()
  }

  getBeans() {
    this.service.getCharacters().subscribe({
      next: (rest: any) => {
        this.characters.push(...rest)
        console.log(this.characters);
      },
      error: (error: any) => { }
    })
  }
}
