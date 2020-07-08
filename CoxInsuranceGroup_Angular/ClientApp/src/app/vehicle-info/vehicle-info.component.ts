import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

  constructor(private _http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
  }
  public xmlItems: any;
  public userInput: string;

  closeResult: string;

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, size: 'lg', centered: true });
  }

  openErrorNull(errorNull) {
    this.modalService.open(errorNull, { size: 'sm', centered: true });
  }

  openErrorInvalid(errorInvalid) {
    this.modalService.open(errorInvalid, { size: 'sm', centered: true });
  }




  GetValue(txtValue: string, longContent, errorNull, errorInvalid) {
    if (txtValue == "") {
      this.openErrorNull(errorNull);
    }
    else if (txtValue.length != 17) {
      this.openErrorInvalid(errorInvalid);
    }
    else {
      this.loadXML(txtValue, longContent);

    }
  }



  loadXML(txtValue, longContent) {
    this.userInput = 'https://cors-anywhere.herokuapp.com/https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/' + txtValue; //https://cors-anywhere.herokuapp.com/ is used for resolving CORS issue
    this._http.get(this.userInput,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
            this.openScrollableContent(longContent);
          });
      });
  }
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.Response.Results[0];
        for (k in obj.DecodedVariable) {
          var item = obj.DecodedVariable[k];
          var value1 = null, value2 = null, value3 = null, value4 = null
          if (typeof item.VariableId !== 'undefined') {
            value1 = item.VariableId[0];
          }
          if (typeof item.Variable !== 'undefined') {
            value2 = item.Variable[0];
          }
          if (typeof item.ValueId !== 'undefined') {
            value3 = item.ValueId[0];
          }
          if (typeof item.Value !== 'undefined') {
            value4 = item.Value[0];
          }
          arr.push({
            VariableId: value1,
            Variable: value2,
            ValueId: value3,
            Value: value4
          });
        }
        resolve(arr);
      });
    });
  }
}

