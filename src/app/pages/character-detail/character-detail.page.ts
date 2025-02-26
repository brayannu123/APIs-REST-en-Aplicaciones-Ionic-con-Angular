import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: false
})
export class CharacterDetailPage implements OnInit {

  character: any;
  id: any;
  constructor(private route: ActivatedRoute, private serv: HttpService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct(this.id);
  }

  getProduct(id: any) {
    this.serv.getCharacter(id).subscribe({
      next: (rest: any) => {
        this.character = rest;
        console.log(rest);
      },
      error: (error: any) => { }
    })
  }

}
