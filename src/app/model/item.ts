export interface Item {
  sys_id: string;
  parent: string;
  short_description: string;
  name: string;
  active: string;
  items: Item[];
}
