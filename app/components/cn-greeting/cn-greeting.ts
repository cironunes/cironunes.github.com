import {Component} from 'angular2/core';

import {CnSocialMedia} from '../cn-social-media/cn-social-media';

@Component({
  selector: 'cn-greeting',
  templateUrl: 'app/components/cn-greeting/cn-greeting.html',
  styleUrls: ['app/components/cn-greeting/cn-greeting.css'],
  providers: [],
  directives: [CnSocialMedia],
  pipes: []
})
export class CnGreeting {

}
