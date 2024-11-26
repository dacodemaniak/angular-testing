import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserService } from './user.service'
import { User } from '../models/user';
import { take } from 'rxjs';

describe('UserService', () => {
  let service: UserService
  let httpMock: HttpTestingController
  let mockDatas: Array<User> = []

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController)
    
    let mockUser = new User()
    mockUser.id = 1
    mockUser.username = 'jlaubert'
    mockUser.password = 'jla001'
    mockUser.roles = ['ADMIN']

    mockDatas.push(mockUser)

    mockUser = new User()
    mockUser.id = 2
    mockUser.username = 'user1'
    mockUser.password = 'user1'
    mockUser.roles = ['USER']

    mockDatas.push(mockUser)

  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it(`Should retrieve users`, () => {
    const endPoint = 'http://localhost:3000/users'

    service.findAll()
      .pipe(
        take(1)
      )
      .subscribe((users: Array<User>) => {
        expect(users).toEqual(mockDatas)
      })
    
    const req = httpMock.expectOne(endPoint)
    expect(req.request.method).toBe('GET')
    req.flush(mockDatas)
  })
  
});
