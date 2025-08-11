import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { FLOORPLANS } from '../common/models/floorplan.data';

export const FloorplanInteceptor: CanActivateFn = (route) => {
  const router = inject(Router);
  const id = route.params['id'];

  if (isNaN(id) || id < 1 || id > FLOORPLANS.length) {    
    router.navigate(['/']);
    return false;
  }

  return true;
};
