import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamService } from './team/service/team.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AppComponent', () => {
  let mockTeamService;

  beforeEach(async(() => {
    mockTeamService = {
      getTeam: () => {
        return Observable.of([{firstname: 'Mark'}])
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TeamComponent
      ],
      providers: [
        { provide: TeamService, useValue: mockTeamService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('VIKINGS');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('VIKINGS');
  }));
});
