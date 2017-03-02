/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostsService } from './posts.service';
import {HttpModule} from "../../../../node_modules/@angular/http/src/http_module";

describe('Service: Posts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
