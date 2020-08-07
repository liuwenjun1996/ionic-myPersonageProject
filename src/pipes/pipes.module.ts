import { NgModule } from '@angular/core';
import { FirstPipe } from './first/first';
@NgModule({
	declarations: [FirstPipe],
	imports: [],
	exports: [FirstPipe]
})
export class PipesModule {}
