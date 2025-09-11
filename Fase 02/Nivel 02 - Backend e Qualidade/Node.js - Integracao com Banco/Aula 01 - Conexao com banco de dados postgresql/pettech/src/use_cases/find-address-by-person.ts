import type { IAdressRepository } from "@/repositories/adress.repository.interface.js";

export class FindAddressByPerson{
    constructor(private addressRepository: IAdressRepository){}

    public async handler(personId: number, page: number, limit: number){
        return this.addressRepository.findAdressByPersonId(personId, page, limit)         
    }
}