import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { TeamComponent } from './team.component';
import { TeamService } from './service/team.service';

describe('TeamComponent', () => {
  let mockTeamService;
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
    mockTeamService = {
      getTeam: () => {
        return Observable.of([{firstname: 'Mark'}])
      }
    };

    TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
      providers: [
        { provide: TeamService, useValue: mockTeamService }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
