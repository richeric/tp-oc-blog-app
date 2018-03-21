import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date = Date();

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio tellus, blandit at urna at, sagittis mollis erat. ' +
               'Nam congue nibh at mauris vehicula sodales placerat eu nunc. Phasellus nec lorem rutrum,' +
               'sollicitudin nisl nec, lobortis quam. ' +
               'Quisque eu gravida nibh.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio tellus, blandit at urna at, sagittis mollis erat. ' +
               'Nam congue nibh at mauris vehicula sodales placerat eu nunc. Phasellus nec lorem rutrum,' +
               'sollicitudin nisl nec, lobortis quam. ' +
               'Quisque eu gravida nibh.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio tellus, blandit at urna at, sagittis mollis erat. ' +
               'Nam congue nibh at mauris vehicula sodales placerat eu nunc. Phasellus nec lorem rutrum,' +
               'sollicitudin nisl nec, lobortis quam. ' +
               'Quisque eu gravida nibh.',
      loveIts: 0,
      created_at: Date()
    }
  ];
}
