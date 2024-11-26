import { HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs"

export interface IService<T> {
    findAll(): Observable<Array<T>>
    findOne(id: number): Observable<T>
    add(t: T): Observable<T>
    update(t: T): Observable<HttpResponse<any>>
    delete(t: T): Observable<HttpResponse<any>>
}
