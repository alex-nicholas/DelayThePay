import { HttpHeaders } from '@angular/common/http';

export class ServiceBase {
    apiAddress = 'http://localhost:51012/api';

    getHeaders(): HttpHeaders {
        return new HttpHeaders().set('Content-Type', 'application/json');
    }
}
