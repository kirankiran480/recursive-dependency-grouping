import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyServiceService } from './my-service.service';

describe('Service: MyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MyServiceService],
    });
  });

  it('should ...', inject([MyServiceService], (service: MyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
