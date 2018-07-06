import { Component, OnInit } from '@angular/core';

import { TeamService } from './service/team.service';
import { ITeamMember } from './interfaces/ITeamMember';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: ITeamMember[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam().subscribe(team => {
      this.team = team;
    })
  }

}
