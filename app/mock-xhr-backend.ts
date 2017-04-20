import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          var mediaItems;
          mediaItems = this._mediaItems;
          responseOptions = new ResponseOptions({
              body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
              status: 200
            });
          break;
        case RequestMethod.Post:
          var mediaItem = JSON.parse(request.text().toString());
          mediaItem.id = this._getNewId();
          this._mediaItems.push(mediaItem);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deleteMediaItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deleteMediaItem(id) {
    var mediaItem = this._mediaItems.find(mediaItem => mediaItem.id === id);
    var index = this._mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this._mediaItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._mediaItems.length > 0) {
      return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
    }
  }

  _mediaItems = [
    {
      id: 1,
      firstname: "John",
      lastname: "Cena",
      gender: "male",
      dob: "12/2/1985",
      nationality : "american",
      marital : "single",
      phone : "628723628390",
      subdiv : "Java",
      status : "contract",
      suspend : "-",
      hireddate : "13/06/2016",
      grade : "SE - AP",
      division : "CDC Asterx",
      email : "john.cena@gmail.com"
    },
    {
      id: 2,
      firstname: "Johnny",
      lastname: "Depay",
      gender: "male",
      dob: "30/05/1980",
      nationality : "england",
      marital : "married",
      phone : "62821290908",
      subdiv : "PhP Bootcamp",
      status : "Permanent",
      suspend : "-",
      hireddate : "10/07/2015",
      grade : "SE - PG",
      division : "SWD Techone",
      email : "johny.depay@mail.com"
    },
  ];
}