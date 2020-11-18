import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProfilesService } from '../../services/profiles.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public profiles: any;
  page: number = 1;
  itemsPage: number = 12;
  qtdProfiles: number = 0;
  login: string = '';
  loading: boolean = true;

  constructor(
    public title: Title,
    public router: Router,
    public route: ActivatedRoute,
    private service: ProfilesService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Gendo | FrontEnd Test');
    this.getProfiles();
  }

  getProfiles() {
    this.loading = true;
    this.service.getProfiles()
    .subscribe(res => {
      this.profiles = res
      this.loading = false;
    })
  }

  filterProfileByLogin() {
    this.loading = true;
    if(this.login){
      this.service.getProfileByLogin(this.login)
      .subscribe(res => {
        this.profiles = [res]
        this.loading = false;
      })
    } else {
      this.getProfiles()
    }
  }

  choosePage(pageSelected) {
    this.page = pageSelected;
  }

  setFirstPage(){
    this.page = 1;
  }

}
