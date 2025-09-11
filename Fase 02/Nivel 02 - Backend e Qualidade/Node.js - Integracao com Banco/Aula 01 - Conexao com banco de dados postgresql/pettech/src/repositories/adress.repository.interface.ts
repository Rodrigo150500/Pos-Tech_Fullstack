import type { IAddress } from "@/entities/models/address.interface.js";
import type { Person } from "@/entities/person.entity.js";

export interface IAdressRepository{

    findAdressByPersonId(personId: number, page: number, limit:number): Promise<(IAddress & Person)[]>

    create(address: IAddress):Promise<IAddress | undefined>
}