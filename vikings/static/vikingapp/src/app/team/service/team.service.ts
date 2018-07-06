import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ITeamMember } from '../interfaces/ITeamMember';

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam(): Observable<ITeamMember[]> {
    return this.http.get<ITeamMember[]>('/api/team');
  }

}
