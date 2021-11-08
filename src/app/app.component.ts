import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage=0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful woman',
      url: 'https://images.unsplash.com/photo-1621694691240-b63c0deaba70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter',
      url: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Three women',
      url: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful woman',
      url: 'https://images.unsplash.com/photo-1621694691240-b63c0deaba70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter',
      url: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Three women',
      url: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful woman',
      url: 'https://images.unsplash.com/photo-1621694691240-b63c0deaba70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter',
      url: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Three women',
      url: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful woman',
      url: 'https://images.unsplash.com/photo-1621694691240-b63c0deaba70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter',
      url: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Three women',
      url: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    }
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage-index)<5;
  }
}
