import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { FirstCompComponent } from './app/first-comp/first-comp.component';

const bootstrap = () => bootstrapApplication(FirstCompComponent, config);

export default bootstrap;
