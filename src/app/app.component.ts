import { Component, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  title = 'MovieAnalysis';

    gridApi:any;
    gridColumnApi:any;

    columnDefs:any;
    defaultColDef:any;
    colResizeDefault:any;
    rowData: any;

  

  



  constructor( private http: HttpClient) {

    this.columnDefs = [
      { headerName: 'Movie ', field: 'movie_title' ,width: 150},
      { headerName: 'Director', field: 'director_name' ,width: 130 },
      { headerName: 'Actor 1', field: 'actor_1_name' ,width: 130 },
      { headerName: 'Actor 2', field: 'actor_2_name' ,width: 130 },
      { headerName: 'Genres', field: 'genres' ,width: 150 },
      { headerName: 'Language', field: 'language'  ,width: 100},
      { headerName: 'Country', field: 'country'  ,width: 70 },
      { headerName: 'Rating', field: 'content_rating'  ,width: 70},
      { headerName: 'Budget', field: 'budget' ,width: 100 },
      { headerName: 'Title Year', field: 'title_year' ,width: 70 },
      { headerName: 'Plot Keywords', field: 'plot_keywords' ,width: 150 },
      { headerName: 'Movie Imb Link', field: 'movie_imdb_link'  ,width: 150},
  
    ];

    this.defaultColDef = { resizable: true,sortable: true, filter: "agTextColumnFilter",floatingFilter: true};
  
    }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.rowData=this.http.get("/movies");
  }
  
}
