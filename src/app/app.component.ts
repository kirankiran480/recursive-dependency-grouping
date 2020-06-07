import { MyServiceService } from './my-service.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'recursive-grouping';
  public items: Item[];
  constructor(private myService: MyServiceService) {}
  ngOnInit() {
    this.myService.getData().subscribe((response: any) => {
      this.items = this.convertFlatToHierarchy(response.result);
    });
  }
  /**
   * convertFlatToHierarchy.
   *
   * @param arr - array to be converted to hierarchy.
   *
   */
  private convertFlatToHierarchy(arr: any): Item[] {
    const map = {};
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      obj.items = [];
      map[obj.sys_id] = obj;
      const parent = obj.parent.value || '-';
      if (!map[parent]) {
        map[parent] = {
          items: [],
        };
      }
      map[parent].items.push(obj);
    }

    console.log(map);
    return map['-'].items;
  }
}
