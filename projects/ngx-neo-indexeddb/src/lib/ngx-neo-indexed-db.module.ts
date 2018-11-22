/**
 * @author Sebastian Larrieu
 * @email slarrieu@neocomplexx.com
 * @create date 2018-11-22 08:23:30
 * @modify date 2018-11-22 08:23:30
*/
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class NgxNeoIndexedDbModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNeoIndexedDbModule,
      providers: []
    };
  }
 }
