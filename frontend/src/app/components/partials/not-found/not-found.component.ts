import { Component,OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  @Input()
  visible =false;
  @Input()
  notFoundMessage ="Nothing Found!";
  @Input()
  resetLinkText ="Reset"
  @Input()
  resetLinkroute="/";
  constructor(){}
  ngOnInit(): void {
      
  }

}
