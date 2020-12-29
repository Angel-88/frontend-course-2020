import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models/vechicle';

@Pipe({ name: 'vehiclePipe' })
export class VehiclePipe implements PipeTransform {
    transform(vehicle: Vehicle, isVehicle: boolean = false): string {
        if (isVehicle) {
            return `${vehicle.manufacturer} - ${vehicle.model} ${vehicle.fuel}`
        }
        return `${vehicle.post.protocol}`
    }
}
