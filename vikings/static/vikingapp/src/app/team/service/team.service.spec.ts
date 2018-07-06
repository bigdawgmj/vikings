import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TeamService } from './team.service';
import { async } from 'q';

describe('TeamService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [TeamService]
    });
  });

  beforeEach(inject([TeamService], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the api and return a list of team members', async(
    inject([HttpClient, HttpTestingController], (http: HttpClient,
    backend: HttpTestingController) => {
      service.getTeam().subscribe();

      backend.expectOne({
        url: '/api/team',
        method: 'GET'
      });
    })
  ));

});
