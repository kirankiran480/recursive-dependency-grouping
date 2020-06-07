import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MyServiceService } from './my-service.service';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [MyServiceService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'recursive-grouping'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('recursive-grouping');
  });

  it('should fetch the data from api and convert the data to hierarchial', fakeAsync(() => {
    const myService = TestBed.inject(MyServiceService);
    spyOn(myService, 'getData').and.returnValue(
      of({
        result: [
          {
            sys_id: '016d2c3d18400300964f2ff0d21a4ee4',
            parent: '',
            short_description: '',
            name: 'Develop and Manage Products and Services',
            active: 'true',
          },
          {
            sys_id: '016d2c3d18400300964f2ff0d21a4eeb',
            parent: '',
            short_description: '',
            name: 'Market and Sell Products and Services',
            active: 'true',
          },
          {
            sys_id: 'c96d2c3d18400300964f2ff0d21a4ef0',
            parent: {
              value: '016d2c3d18400300964f2ff0d21a4eeb',
            },
            short_description: 'Marketing planning application',
            name: 'Develop and manage marketing plans',
            active: 'true',
          },
          {
            sys_id: 'c96d2c3d18400300964f2ff0d21a4ef0',
            parent: {
              value: '016d2c3d18400300964f2ff0d21a4eeb',
            },
            short_description: 'Marketing planning application',
            name: 'Develop and manage marketing plans',
            active: 'true',
          },
          {
            sys_id: 'c16d2c3d18400300964f2ff0d21a4ef4',
            parent: {
              value: '016d2c3d18400300964f2ff0d21a4eeb',
            },
            short_description: 'Sale planning application',
            name: 'Develop and manage sales plans',
            active: 'true',
          },
          {
            sys_id: 'cd6d2c3d18400300964f2ff0d21a4ee7',
            parent: {
              value: '016d2c3d18400300964f2ff0d21a4ee4',
            },
            short_description: '',
            name: 'Generate and define new product/service ideas',
            active: 'true',
          },
          {
            sys_id: '016d2c3d18400300964f2ff0d21a4eeb',
            parent: '',
            short_description: '',
            name: 'Market and Sell Products and Services',
            active: 'true',
          },
          {
            sys_id: '896d2c3d18400300964f2ff0d21a4ef4',
            parent: {
              value: 'c16d2c3d18400300964f2ff0d21a4ef4',
            },
            short_description: '',
            name: 'Manage leads/opportunities',
            active: 'true',
          },
          {
            sys_id: 'qgslibfg2eq39uecqgslibfg2eq39uec',
            parent: {
              value: '7b6v3p2atyf7d5rk7b6v3p2atyf7d5rk',
            },
            short_description: 'Support and maintain products',
            name: 'Support and maintain product lines',
            active: 'true',
          },
          {
            sys_id: 'zzc0hcqx49p0hi1tzzc0hcqx49p0hi1t',
            parent: {
              value: 'qgslibfg2eq39uecqgslibfg2eq39uec',
            },
            short_description: 'Manage existing products',
            name: 'Manage existing product lines',
            active: 'true',
          },
          {
            sys_id: '7b6v3p2atyf7d5rk7b6v3p2atyf7d5rk',
            parent: {
              value: 'zzc0hcqx49p0hi1tzzc0hcqx49p0hi1t',
            },
            short_description: 'Support existing products',
            name: 'Support existing product lines',
            active: 'true',
          },
        ],
      })
    );
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    tick();
    expect(app.items[0].sys_id).toBe('016d2c3d18400300964f2ff0d21a4ee4');
  }));
});
