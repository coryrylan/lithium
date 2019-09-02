import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0, height: 0 })], { optional: true }),
    query(':enter', [style({ opacity: 0, height: 'auto' }), animate('0.4s', style({ opacity: 1 }))], { optional: true })
  ])
]);
