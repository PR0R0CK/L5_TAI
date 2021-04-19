import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image = '';
  public text: string = "";
  public id: number | undefined;


  constructor(private dataService: DataService, 
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    let idInit: any;
    this.route.paramMap
      .subscribe(params => {
        // console.log(params);
        
        idInit = params.get('id');
      });

    this.dataService.getById(idInit).subscribe((res:any) => {
      this.image = res['image'];
      this.text = res['text'];
    });

  }

}
